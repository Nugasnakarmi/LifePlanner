-- ============================================================
-- Fix template invitation RPCs to use SECURITY DEFINER.
--
-- Background (same issue previously fixed for board invitations):
--   get_my_pending_template_invitations and respond_to_template_invitation
--   used SECURITY INVOKER.  The INNER JOIN on board_templates in
--   get_my_pending_template_invitations was blocked by RLS for private
--   (non-shareable) templates, making invitations invisible to recipients.
--   respond_to_template_invitation called clone_board_template which also
--   failed via the same RLS restriction, so accepting any invitation for
--   a private template silently errored.
--
-- Fix:
--   Switch both functions to SECURITY DEFINER so they run with the
--   function-owner's privileges (bypassing RLS on the joined tables)
--   while still using auth.jwt() to validate the caller's identity.
--   This matches the approach already used by
--   get_my_pending_email_invitations and respond_to_board_invitation.
-- ============================================================

-- 1. get_my_pending_template_invitations -----------------------
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
SECURITY DEFINER
SET search_path = public, pg_catalog
AS $$
BEGIN
  RETURN QUERY
  SELECT
    ti.id,
    ti.template_id,
    ti.created_at,
    ti.expires_at,
    t.name::text                                          AS template_name,
    COALESCE(t.description, '')::text                     AS template_description,
    COALESCE(up.display_name::text, u.email::text, 'Someone') AS inviter_display_name
  FROM   template_invitations ti
  JOIN   board_templates       t  ON t.id  = ti.template_id
  LEFT JOIN auth.users         u  ON u.id  = ti.invited_by
  LEFT JOIN user_preferences   up ON up.user_id = ti.invited_by
  WHERE  lower(ti.email)   = lower(auth.jwt() ->> 'email')
    AND  ti.status          = 'pending'
    AND  ti.expires_at      > now()
  ORDER BY ti.created_at DESC;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.get_my_pending_template_invitations FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.get_my_pending_template_invitations TO authenticated;

-- 2. respond_to_template_invitation ----------------------------
CREATE OR REPLACE FUNCTION public.respond_to_template_invitation(
  p_invitation_id bigint,
  p_accept        boolean
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_catalog
AS $$
DECLARE
  v_template_id bigint;
  v_new_id      bigint;
BEGIN
  -- Reject unauthenticated callers early.
  IF auth.uid() IS NULL THEN
    RETURN jsonb_build_object('success', false, 'error', 'Authentication required');
  END IF;

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
    -- SECURITY DEFINER allows clone_board_template to access the private template.
    SELECT public.clone_board_template(v_template_id) INTO v_new_id;
    RETURN jsonb_build_object('success', true, 'template_id', v_new_id);
  ELSE
    RETURN jsonb_build_object('success', true);
  END IF;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.respond_to_template_invitation FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.respond_to_template_invitation TO authenticated;
