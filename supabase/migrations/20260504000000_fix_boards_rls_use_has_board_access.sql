-- ============================================================
-- Fix: boards RLS "Collaborators can view/update shared boards"
--      policies use an inline EXISTS subquery on board_collaborators.
--
-- Root cause:
--   getBoards() in the Angular service queries board_collaborators
--   and uses a PostgREST embedded join (board:boards(*)) to fetch
--   the board data in the same request.  When PostgreSQL evaluates
--   the boards RLS "Collaborators can view shared boards" policy from
--   within that join context, it re-queries board_collaborators.
--   This creates a policy evaluation cycle starting from
--   board_collaborators that can cause the embedded board to be
--   returned as null, hiding collaborated boards from the landing page.
--
--   Every other table's collaborator policy (board_lists, tasks,
--   task_activities) already uses the has_board_access() SECURITY
--   DEFINER helper, which reads board_collaborators without triggering
--   its RLS and therefore breaks the cycle.  The boards policies were
--   the only ones that still used inline EXISTS.
--
-- Fix:
--   Replace the inline EXISTS subquery with has_board_access() in both
--   the SELECT and UPDATE collaborator policies on public.boards,
--   making them consistent with all other tables.
-- ============================================================

-- ── SELECT: collaborators can view shared boards ─────────────
DROP POLICY IF EXISTS "Collaborators can view shared boards" ON public.boards;
CREATE POLICY "Collaborators can view shared boards"
  ON public.boards FOR SELECT
  USING (
    public.has_board_access(id, 'viewer')
  );

-- ── UPDATE: editor/owner collaborators can update shared boards ─
DROP POLICY IF EXISTS "Collaborators can update shared boards" ON public.boards;
CREATE POLICY "Collaborators can update shared boards"
  ON public.boards FOR UPDATE
  USING (
    public.has_board_access(id, 'editor')
  )
  WITH CHECK (
    public.has_board_access(id, 'editor')
  );
