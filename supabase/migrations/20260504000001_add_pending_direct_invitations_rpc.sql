-- ============================================================
-- Add get_my_pending_direct_invitations() RPC
--
-- Background:
--   The Angular service fetched pending direct invitations via a
--   PostgREST join (board_collaborators.select('*, board:boards(...)'))
--   but the boards RLS blocked pending collaborators from seeing the
--   board, so board.name was always null ("a board") and there was no
--   inviter display name ("Someone") in the invitation card.
--
-- Fix:
--   Introduce a SECURITY DEFINER RPC that reads board_collaborators,
--   boards, and user_preferences without row-level security so the
--   correct board name and inviter display name can be returned to the
--   invitee for their pending direct invitations.
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
    b.name::text                                      AS board_name,
    b.description                                     AS board_description,
    COALESCE(up.display_name::text, u.email::text)    AS inviter_display_name
  FROM public.board_collaborators bc
  JOIN  public.boards          b  ON  b.id  = bc.board_id
  LEFT JOIN auth.users         u  ON  u.id  = bc.invited_by
  LEFT JOIN public.user_preferences up ON up.user_id = bc.invited_by
  WHERE bc.user_id = auth.uid()
    AND bc.status  = 'pending';
$$;

REVOKE EXECUTE ON FUNCTION public.get_my_pending_direct_invitations FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.get_my_pending_direct_invitations TO authenticated;
