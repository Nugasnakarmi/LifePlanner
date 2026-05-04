-- ============================================================
-- Fix: get_my_pending_direct_invitations() inviter_display_name
--      can be NULL when invited_by is NULL (ON DELETE SET NULL).
--
-- Root cause:
--   board_collaborators.invited_by is nullable — when the inviter's
--   account is deleted PostgreSQL sets invited_by to NULL.  The
--   original COALESCE(up.display_name, u.email) produces NULL in
--   that case because both LEFT JOINs return no row, breaking the
--   non-nullable contract declared on PendingInvitationWithBoard
--   in the Angular interface.
--
-- Fix:
--   Add a literal fallback ('Unknown') as the final COALESCE
--   argument so inviter_display_name is guaranteed non-NULL
--   regardless of the invited_by value.
-- ============================================================

CREATE OR REPLACE FUNCTION public.get_my_pending_direct_invitations()
RETURNS TABLE(
  id          bigint,
  board_id    bigint,
  role        public.collaborator_role,
  invited_by  uuid,
  created_at  timestamptz,
  board_name        text,
  board_description text,
  inviter_display_name text
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_catalog
AS $$
  SELECT
    bc.id,
    bc.board_id,
    bc.role,
    bc.invited_by,
    bc.created_at,
    b.name::text                                                AS board_name,
    b.description                                               AS board_description,
    COALESCE(up.display_name::text, u.email::text, 'Unknown')  AS inviter_display_name
  FROM public.board_collaborators bc
  JOIN  public.boards          b  ON  b.id  = bc.board_id
  LEFT JOIN auth.users         u  ON  u.id  = bc.invited_by
  LEFT JOIN public.user_preferences up ON up.user_id = bc.invited_by
  WHERE bc.user_id = auth.uid()
    AND bc.status  = 'pending';
$$;

REVOKE EXECUTE ON FUNCTION public.get_my_pending_direct_invitations FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.get_my_pending_direct_invitations TO authenticated;
