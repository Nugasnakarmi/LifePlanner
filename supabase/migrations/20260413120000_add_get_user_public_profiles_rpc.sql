-- ============================================================
-- RPC: get_user_public_profiles
-- Returns only public-facing fields (display_name, avatar_url)
-- for the given array of user IDs.  Runs SECURITY DEFINER so it
-- bypasses the "own row only" RLS on user_preferences, allowing
-- board collaborators and owners to look up each other's display
-- names without exposing private fields (e.g. address, app_title).
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
  WHERE up.user_id = ANY(p_user_ids);
$$;

REVOKE EXECUTE ON FUNCTION public.get_user_public_profiles(uuid[]) FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.get_user_public_profiles(uuid[]) TO authenticated;
