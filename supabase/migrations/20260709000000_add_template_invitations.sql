-- ============================================================
-- Add email-based invitation system for board templates.
-- Replaces link-based sharing in the share template dialog.
-- ============================================================

-- 1. New table ------------------------------------------------
CREATE TABLE public.template_invitations (
  id          bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  template_id bigint        NOT NULL REFERENCES public.board_templates(id) ON DELETE CASCADE,
  email       text          NOT NULL,
  invited_by  uuid          NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  token       uuid          NOT NULL DEFAULT gen_random_uuid() UNIQUE,
  status      text          NOT NULL DEFAULT 'pending'
                            CHECK (status IN ('pending', 'accepted', 'declined')),
  created_at  timestamptz   NOT NULL DEFAULT now(),
  expires_at  timestamptz   NOT NULL DEFAULT (now() + interval '7 days'),
  UNIQUE (template_id, email)
);

-- 2. RLS ------------------------------------------------------
ALTER TABLE public.template_invitations ENABLE ROW LEVEL SECURITY;

-- Owner can read and manage their outgoing invitations.
CREATE POLICY "Template owner can manage invitations"
  ON public.template_invitations
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.board_templates t
      WHERE t.id = template_id
        AND t.user_id = auth.uid()
    )
  );

-- Recipients can read their own invitations (matched by JWT email).
CREATE POLICY "Invitee can read own template invitations"
  ON public.template_invitations
  FOR SELECT
  USING (lower(email) = lower(auth.jwt() ->> 'email'));

-- Recipients can update status (accept/decline) of their own invitations.
CREATE POLICY "Invitee can respond to own template invitations"
  ON public.template_invitations
  FOR UPDATE
  USING (lower(email) = lower(auth.jwt() ->> 'email'))
  WITH CHECK (lower(email) = lower(auth.jwt() ->> 'email'));

-- 3. RPC: send a template invitation (owner only) -------------
CREATE OR REPLACE FUNCTION public.send_template_invitation(
  p_template_id bigint,
  p_email       text
)
RETURNS bigint
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public, pg_catalog
AS $$
DECLARE
  v_id bigint;
BEGIN
  -- Verify caller owns the template.
  IF NOT EXISTS (
    SELECT 1 FROM board_templates
    WHERE id = p_template_id AND user_id = auth.uid()
  ) THEN
    RAISE EXCEPTION 'Template not found or not owned by current user';
  END IF;

  INSERT INTO template_invitations (template_id, email, invited_by)
  VALUES (p_template_id, lower(trim(p_email)), auth.uid())
  ON CONFLICT (template_id, email) DO UPDATE
    SET status     = 'pending',
        expires_at = now() + interval '7 days',
        created_at = now()
  RETURNING id INTO v_id;

  RETURN v_id;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.send_template_invitation FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.send_template_invitation TO authenticated;

-- 4. RPC: list pending invitations for a template (owner) -----
CREATE OR REPLACE FUNCTION public.get_template_invitations(
  p_template_id bigint
)
RETURNS TABLE (
  id          bigint,
  template_id bigint,
  email       text,
  status      text,
  created_at  timestamptz,
  expires_at  timestamptz
)
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public, pg_catalog
AS $$
BEGIN
  -- Verify caller owns the template.
  IF NOT EXISTS (
    SELECT 1 FROM board_templates
    WHERE id = p_template_id AND user_id = auth.uid()
  ) THEN
    RAISE EXCEPTION 'Template not found or not owned by current user';
  END IF;

  RETURN QUERY
  SELECT
    ti.id,
    ti.template_id,
    ti.email,
    ti.status,
    ti.created_at,
    ti.expires_at
  FROM template_invitations ti
  WHERE ti.template_id = p_template_id
    AND ti.status       = 'pending'
    AND ti.expires_at   > now()
  ORDER BY ti.created_at DESC;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.get_template_invitations FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.get_template_invitations TO authenticated;

-- 5. RPC: revoke a template invitation (owner) ----------------
CREATE OR REPLACE FUNCTION public.revoke_template_invitation(
  p_invitation_id bigint
)
RETURNS void
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public, pg_catalog
AS $$
BEGIN
  DELETE FROM template_invitations ti
  USING board_templates t
  WHERE ti.id          = p_invitation_id
    AND ti.template_id = t.id
    AND t.user_id      = auth.uid();

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Invitation not found or not owned by current user';
  END IF;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.revoke_template_invitation FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.revoke_template_invitation TO authenticated;

-- 6. RPC: get pending template invitations for current user ---
CREATE OR REPLACE FUNCTION public.get_my_pending_template_invitations()
RETURNS TABLE (
  id                    bigint,
  template_id           bigint,
  created_at            timestamptz,
  expires_at            timestamptz,
  template_name         text,
  template_description  text,
  inviter_display_name  text
)
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public, pg_catalog
AS $$
BEGIN
  RETURN QUERY
  SELECT
    ti.id,
    ti.template_id,
    ti.created_at,
    ti.expires_at,
    t.name                                    AS template_name,
    COALESCE(t.description, '')               AS template_description,
    COALESCE(up.display_name, 'Someone')      AS inviter_display_name
  FROM   template_invitations ti
  JOIN   board_templates       t  ON t.id  = ti.template_id
  LEFT   JOIN user_preferences up ON up.user_id = ti.invited_by
  WHERE  lower(ti.email)   = lower(auth.jwt() ->> 'email')
    AND  ti.status          = 'pending'
    AND  ti.expires_at      > now()
  ORDER BY ti.created_at DESC;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.get_my_pending_template_invitations FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.get_my_pending_template_invitations TO authenticated;

-- 7. RPC: respond to a template invitation (accept/decline) ---
CREATE OR REPLACE FUNCTION public.respond_to_template_invitation(
  p_invitation_id bigint,
  p_accept        boolean
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public, pg_catalog
AS $$
DECLARE
  v_template_id bigint;
  v_new_id      bigint;
BEGIN
  -- Verify invitation belongs to current user and is still pending.
  SELECT ti.template_id INTO v_template_id
  FROM   template_invitations ti
  WHERE  ti.id             = p_invitation_id
    AND  lower(ti.email)   = lower(auth.jwt() ->> 'email')
    AND  ti.status         = 'pending'
    AND  ti.expires_at     > now();

  IF NOT FOUND THEN
    RETURN jsonb_build_object('success', false, 'error', 'Invitation not found or already responded');
  END IF;

  -- Mark invitation as accepted or declined.
  UPDATE template_invitations
     SET status = CASE WHEN p_accept THEN 'accepted' ELSE 'declined' END
   WHERE id = p_invitation_id;

  IF p_accept THEN
    -- Clone the template for the current user.
    SELECT public.clone_board_template(v_template_id) INTO v_new_id;
    RETURN jsonb_build_object('success', true, 'template_id', v_new_id);
  ELSE
    RETURN jsonb_build_object('success', true);
  END IF;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.respond_to_template_invitation FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.respond_to_template_invitation TO authenticated;
