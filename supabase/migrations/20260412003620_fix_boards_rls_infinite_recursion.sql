-- ============================================================
-- Fix: infinite recursion in boards RLS policies
--
-- Root cause:
--   boards SELECT RLS → "Collaborators can view shared boards"
--     → queries board_collaborators
--   board_collaborators SELECT RLS → "Board owners can view collaborators"
--     → queries boards directly (with RLS) → infinite recursion
--
-- Fix:
--   Introduce is_board_owner() SECURITY DEFINER so the boards table
--   is read without triggering its own RLS policies. Replace all
--   direct `EXISTS (SELECT 1 FROM public.boards …)` checks inside
--   board_collaborators and board_invitations RLS policies with this
--   function. This breaks the cycle.
-- ============================================================

-- --------------------------------------------------------
-- Helper: check if the current user owns a specific board.
-- SECURITY DEFINER runs as the function owner (postgres/
-- service-role), bypassing RLS on the boards table and
-- breaking the recursive policy chain.
-- --------------------------------------------------------
CREATE OR REPLACE FUNCTION public.is_board_owner(p_board_id bigint)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_catalog
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.boards
    WHERE id = p_board_id AND user_id = auth.uid()
  );
$$;

REVOKE EXECUTE ON FUNCTION public.is_board_owner FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.is_board_owner TO authenticated;

-- ============================================================
-- Recreate board_collaborators policies
-- (drop the ones that query boards directly, then add them back
--  using is_board_owner() instead)
-- ============================================================

DROP POLICY IF EXISTS "Board owners can view collaborators"
  ON public.board_collaborators;
CREATE POLICY "Board owners can view collaborators"
  ON public.board_collaborators FOR SELECT
  USING (
    public.is_board_owner(board_id)
    OR user_id = auth.uid()
  );

DROP POLICY IF EXISTS "Board owners can insert collaborators"
  ON public.board_collaborators;
CREATE POLICY "Board owners can insert collaborators"
  ON public.board_collaborators FOR INSERT
  WITH CHECK (
    public.is_board_owner(board_id)
  );

DROP POLICY IF EXISTS "Board owners can update collaborators"
  ON public.board_collaborators;
CREATE POLICY "Board owners can update collaborators"
  ON public.board_collaborators FOR UPDATE
  USING (
    public.is_board_owner(board_id)
  )
  WITH CHECK (
    public.is_board_owner(board_id)
  );

DROP POLICY IF EXISTS "Board owners and collaborators can delete collaborators"
  ON public.board_collaborators;
CREATE POLICY "Board owners and collaborators can delete collaborators"
  ON public.board_collaborators FOR DELETE
  USING (
    public.is_board_owner(board_id)
    OR user_id = auth.uid()
  );

-- ============================================================
-- Recreate board_invitations policies
-- ============================================================

DROP POLICY IF EXISTS "Board owners can view invitations"
  ON public.board_invitations;
CREATE POLICY "Board owners can view invitations"
  ON public.board_invitations FOR SELECT
  USING (
    public.is_board_owner(board_id)
  );

DROP POLICY IF EXISTS "Board owners can insert invitations"
  ON public.board_invitations;
CREATE POLICY "Board owners can insert invitations"
  ON public.board_invitations FOR INSERT
  WITH CHECK (
    public.is_board_owner(board_id)
  );

DROP POLICY IF EXISTS "Board owners can update invitations"
  ON public.board_invitations;
CREATE POLICY "Board owners can update invitations"
  ON public.board_invitations FOR UPDATE
  USING (
    public.is_board_owner(board_id)
  )
  WITH CHECK (
    public.is_board_owner(board_id)
  );

DROP POLICY IF EXISTS "Board owners can delete invitations"
  ON public.board_invitations;
CREATE POLICY "Board owners can delete invitations"
  ON public.board_invitations FOR DELETE
  USING (
    public.is_board_owner(board_id)
  );
