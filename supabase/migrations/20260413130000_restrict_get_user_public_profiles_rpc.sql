-- ============================================================
-- Fix: restrict get_user_public_profiles to caller-related users
--
-- The original implementation allowed any authenticated user to
-- look up display_name/avatar_url for any arbitrary UUID, which
-- bypassed the RLS intent on user_preferences.
--
-- Updated restriction: only return profiles for users who are
-- owners of boards where auth.uid() is an accepted collaborator.
-- This scopes the lookup to the minimal set of users the caller
-- has a legitimate need to see (i.e. the boards they collaborate on).
-- ============================================================
CREATE OR REPLACE FUNCTION public.get_user_public_profiles(p_user_ids uuid[])
RETURNS TABLE(user_id uuid, display_name character varying, avatar_url text)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_catalog
AS $$
  SELECT up.user_id, up.display_name, up.avatar_url
  FROM public.user_preferences up
  WHERE up.user_id = ANY(p_user_ids)
    AND EXISTS (
      -- The requested profile must belong to the owner of a board
      -- where the calling user is an accepted collaborator.
      SELECT 1
      FROM public.board_collaborators bc
      JOIN public.boards b ON b.id = bc.board_id
      WHERE b.user_id  = up.user_id
        AND bc.user_id = auth.uid()
        AND bc.status  = 'accepted'
    );
$$;

REVOKE EXECUTE ON FUNCTION public.get_user_public_profiles(uuid[]) FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.get_user_public_profiles(uuid[]) TO authenticated;
