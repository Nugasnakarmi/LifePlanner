-- ============================================================
-- Add status tracking to board_invitations and RPCs for
-- in-app invitation acceptance / decline.
-- ============================================================

-- 1. Add status column to board_invitations
--    Reuses the existing invitation_status enum (pending, accepted, declined).
ALTER TABLE public.board_invitations
  ADD COLUMN status public.invitation_status NOT NULL DEFAULT 'pending';

-- Replace the old all-rows UNIQUE(board_id, email) rule with a
-- partial unique index so historical accepted/declined invitations
-- do not block re-inviting the same email to the same board.
DO $$
DECLARE
  board_email_unique_constraint_name text;
BEGIN
  SELECT con.conname
    INTO board_email_unique_constraint_name
  FROM pg_constraint con
  JOIN pg_class rel
    ON rel.oid = con.conrelid
  JOIN pg_namespace nsp
    ON nsp.oid = rel.relnamespace
  JOIN unnest(con.conkey) WITH ORDINALITY AS cols(attnum, ord)
    ON TRUE
  JOIN pg_attribute att
    ON att.attrelid = rel.oid
   AND att.attnum = cols.attnum
  WHERE nsp.nspname = 'public'
    AND rel.relname = 'board_invitations'
    AND con.contype = 'u'
  GROUP BY con.conname
  HAVING array_agg(att.attname ORDER BY cols.ord) = ARRAY['board_id', 'email'];

  IF board_email_unique_constraint_name IS NOT NULL THEN
    EXECUTE format(
      'ALTER TABLE public.board_invitations DROP CONSTRAINT %I',
      board_email_unique_constraint_name
    );
  END IF;
END
$$;

CREATE UNIQUE INDEX IF NOT EXISTS board_invitations_pending_board_id_email_idx
  ON public.board_invitations (board_id, email)
  WHERE status = 'pending';

-- 2. RLS: allow invited users to see their own invitations by matching email
CREATE POLICY "Invitees can view their own invitations"
  ON public.board_invitations FOR SELECT
  USING (
    email = (auth.jwt() ->> 'email')
  );

-- ============================================================
-- 3. RPC: get_my_pending_email_invitations
--    Returns pending, non-expired email invitations for the
--    current user (matched by JWT email), with board info and
--    inviter display name.
-- ============================================================
CREATE OR REPLACE FUNCTION public.get_my_pending_email_invitations()
RETURNS TABLE(
  id bigint,
  board_id bigint,
  role public.collaborator_role,
  created_at timestamptz,
  expires_at timestamptz,
  board_name text,
  board_description text,
  inviter_display_name text
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_catalog
AS $$
  SELECT
    bi.id,
    bi.board_id,
    bi.role,
    bi.created_at,
    bi.expires_at,
    b.name::text        AS board_name,
    b.description       AS board_description,
    COALESCE(up.display_name::text, u.email) AS inviter_display_name
  FROM public.board_invitations bi
  JOIN public.boards b ON b.id = bi.board_id
  LEFT JOIN auth.users u ON u.id = bi.invited_by
  LEFT JOIN public.user_preferences up ON up.user_id = bi.invited_by
  WHERE bi.email = (auth.jwt() ->> 'email')
    AND bi.status = 'pending'
    AND bi.expires_at > now();
$$;

REVOKE EXECUTE ON FUNCTION public.get_my_pending_email_invitations FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.get_my_pending_email_invitations TO authenticated;

-- ============================================================
-- 4. RPC: respond_to_board_invitation
--    Lets an authenticated user accept or decline an email
--    invitation by its ID.  Validates that the caller's JWT
--    email matches the invitation email.
--    On accept: upserts board_collaborators and marks the
--    invitation as accepted.
--    On decline: marks the invitation as declined.
-- ============================================================
CREATE OR REPLACE FUNCTION public.respond_to_board_invitation(
  p_invitation_id bigint,
  p_accept boolean
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_catalog
AS $$
DECLARE
  v_invitation record;
  v_collaborator_id bigint;
BEGIN
  -- Reject unauthenticated callers early.
  IF auth.uid() IS NULL THEN
    RETURN jsonb_build_object('success', false, 'error', 'Authentication required');
  END IF;

  -- Find the invitation; must belong to the caller and still be pending.
  SELECT * INTO v_invitation
  FROM public.board_invitations
  WHERE id = p_invitation_id
    AND email = (auth.jwt() ->> 'email')
    AND status = 'pending'
    AND expires_at > now();

  IF NOT FOUND THEN
    RETURN jsonb_build_object('success', false, 'error', 'Invitation not found, expired, or already responded');
  END IF;

  IF p_accept THEN
    -- Upsert into board_collaborators
    INSERT INTO public.board_collaborators (board_id, user_id, role, invited_by, status, accepted_at)
    VALUES (v_invitation.board_id, auth.uid(), v_invitation.role, v_invitation.invited_by, 'accepted', now())
    ON CONFLICT (board_id, user_id)
    DO UPDATE SET
      role        = EXCLUDED.role,
      status      = 'accepted',
      accepted_at = now()
    RETURNING id INTO v_collaborator_id;

    -- Mark invitation as accepted
    UPDATE public.board_invitations
    SET status = 'accepted'
    WHERE id = v_invitation.id;

    RETURN jsonb_build_object(
      'success', true,
      'collaborator_id', v_collaborator_id,
      'board_id', v_invitation.board_id
    );
  ELSE
    -- Mark invitation as declined
    UPDATE public.board_invitations
    SET status = 'declined'
    WHERE id = v_invitation.id;

    RETURN jsonb_build_object(
      'success', true,
      'declined', true,
      'board_id', v_invitation.board_id
    );
  END IF;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.respond_to_board_invitation FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.respond_to_board_invitation TO authenticated;

-- ============================================================
-- 5. Update accept_board_invitation (token-based) to mark
--    status = 'accepted' instead of deleting the invitation row.
--    Also filter by status = 'pending' to prevent re-acceptance.
-- ============================================================
CREATE OR REPLACE FUNCTION public.accept_board_invitation(p_token uuid)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_catalog
AS $$
DECLARE
  v_invitation record;
  v_collaborator_id bigint;
BEGIN
  -- Reject unauthenticated callers early.
  IF auth.uid() IS NULL THEN
    RETURN jsonb_build_object('success', false, 'error', 'Authentication required');
  END IF;

  -- Find the invitation
  SELECT * INTO v_invitation
  FROM public.board_invitations
  WHERE token = p_token
    AND expires_at > now()
    AND status = 'pending';

  IF NOT FOUND THEN
    RETURN jsonb_build_object('success', false, 'error', 'Invitation not found or expired');
  END IF;

  -- Verify the caller's email matches the invitation email
  IF v_invitation.email <> (auth.jwt() ->> 'email') THEN
    RETURN jsonb_build_object('success', false, 'error', 'This invitation was sent to a different email address');
  END IF;

  -- Upsert into board_collaborators
  INSERT INTO public.board_collaborators (board_id, user_id, role, invited_by, status, accepted_at)
  VALUES (v_invitation.board_id, auth.uid(), v_invitation.role, v_invitation.invited_by, 'accepted', now())
  ON CONFLICT (board_id, user_id)
  DO UPDATE SET
    role        = EXCLUDED.role,
    status      = 'accepted',
    accepted_at = now()
  RETURNING id INTO v_collaborator_id;

  -- Mark invitation as accepted (instead of deleting)
  UPDATE public.board_invitations
  SET status = 'accepted'
  WHERE id = v_invitation.id;

  RETURN jsonb_build_object(
    'success', true,
    'collaborator_id', v_collaborator_id,
    'board_id', v_invitation.board_id
  );
END;
$$;
