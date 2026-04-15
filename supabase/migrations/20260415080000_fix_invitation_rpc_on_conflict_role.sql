-- ============================================================
-- Fix: remove `role = EXCLUDED.role` from the ON CONFLICT clause
-- in respond_to_board_invitation and accept_board_invitation.
--
-- Root cause:
--   Both RPCs use SECURITY DEFINER but the BEFORE UPDATE trigger
--   enforce_board_collaborator_update uses SECURITY INVOKER.
--   When the ON CONFLICT path fires (a pending board_collaborators
--   row already exists, e.g. from a direct invitation), the trigger
--   runs and checks:
--
--     IF NEW.role IS DISTINCT FROM OLD.role THEN
--       RAISE EXCEPTION 'Invitees may only update acceptance fields';
--
--   So if the email invitation specifies a different role than the
--   existing pending row, the UPSERT throws an exception, the RPC
--   returns an error, and the board never gets an accepted
--   board_collaborators row — the board never appears for the user.
--
-- Fix:
--   Drop `role = EXCLUDED.role` from ON CONFLICT DO UPDATE in both
--   RPCs so the trigger's structural-fields check always passes.
--   On pure INSERT (no existing row) the role from the invitation
--   is still used.  On conflict (existing row), the already-assigned
--   role is preserved; the board owner can adjust it afterwards via
--   the normal updateCollaboratorRole flow.
-- ============================================================

-- ============================================================
-- 1. respond_to_board_invitation
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
    -- Upsert into board_collaborators.
    -- On conflict (a pending direct-invitation row already exists), only
    -- update status/accepted_at.  Changing `role` here triggers the
    -- enforce_board_collaborator_update trigger which blocks non-owner
    -- role changes and would raise an exception, preventing acceptance.
    INSERT INTO public.board_collaborators (board_id, user_id, role, invited_by, status, accepted_at)
    VALUES (v_invitation.board_id, auth.uid(), v_invitation.role, v_invitation.invited_by, 'accepted', now())
    ON CONFLICT (board_id, user_id)
    DO UPDATE SET
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
-- 2. accept_board_invitation (token-based)
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

  -- Upsert into board_collaborators.
  -- On conflict (a pending direct-invitation row already exists), only
  -- update status/accepted_at.  Changing `role` here triggers the
  -- enforce_board_collaborator_update trigger which blocks non-owner
  -- role changes and would raise an exception, preventing acceptance.
  INSERT INTO public.board_collaborators (board_id, user_id, role, invited_by, status, accepted_at)
  VALUES (v_invitation.board_id, auth.uid(), v_invitation.role, v_invitation.invited_by, 'accepted', now())
  ON CONFLICT (board_id, user_id)
  DO UPDATE SET
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

REVOKE EXECUTE ON FUNCTION public.accept_board_invitation FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.accept_board_invitation TO authenticated;
