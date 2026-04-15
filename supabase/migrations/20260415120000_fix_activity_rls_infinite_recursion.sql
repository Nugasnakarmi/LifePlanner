-- ============================================================
-- Fix: infinite recursion in activities / task_activities RLS policies
--
-- Root cause:
--   When inserting or selecting from task_activities, PostgreSQL adds
--   that relation to its RLS policy-evaluation stack. The INSERT
--   WITH CHECK policies on task_activities query public.activities
--   (SELECT), and the activities SELECT policy "Collaborators can view
--   shared board activities" contains an EXISTS subquery that reads
--   public.task_activities again. PostgreSQL detects the relation is
--   already in the policy stack and raises:
--     "infinite recursion detected in policy for relation task_activities"
--
--   The same cycle occurs for SELECT from task_activities JOIN activities:
--     task_activities SELECT (outer) → activities SELECT RLS →
--     "Collaborators" policy → task_activities SELECT (inner) → detected
--
-- Fix:
--   Introduce activity_has_board_access() SECURITY DEFINER so
--   task_activities and tasks are read without triggering their own RLS.
--   Rewrite all activities collaborator SELECT/UPDATE/DELETE policies to
--   call this function instead of the inline EXISTS subqueries.
--   This breaks the recursion cycle, following the same pattern used in
--   20260412003620_fix_boards_rls_infinite_recursion.sql.
-- ============================================================

-- --------------------------------------------------------
-- Helper: check if the current user has at least p_min_role access
-- to any board task that the given activity is linked to.
-- SECURITY DEFINER runs with the privileges of the function owner so
-- task_activities and tasks are read without invoking their RLS policies,
-- which breaks the recursion cycle.
-- --------------------------------------------------------
CREATE OR REPLACE FUNCTION public.activity_has_board_access(
  p_activity_id bigint,
  p_min_role    public.collaborator_role DEFAULT 'viewer'
)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_catalog
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.task_activities ta
    JOIN public.tasks t ON t.id = ta.task_id
    WHERE ta.activity_id = p_activity_id
      AND t.board_id IS NOT NULL
      AND public.has_board_access(t.board_id, p_min_role)
  );
$$;

REVOKE EXECUTE ON FUNCTION public.activity_has_board_access FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.activity_has_board_access TO authenticated;

-- ============================================================
-- Recreate activities collaborator policies
-- (drop the ones that query task_activities directly via RLS,
--  then add them back using activity_has_board_access() instead)
-- ============================================================

-- ---- SELECT ----
DROP POLICY IF EXISTS "Collaborators can view shared board activities"
  ON public.activities;
CREATE POLICY "Collaborators can view shared board activities"
  ON public.activities FOR SELECT
  USING (
    public.activity_has_board_access(id, 'viewer')
  );

-- ---- UPDATE ----
DROP POLICY IF EXISTS "Collaborators can update shared board activities"
  ON public.activities;
CREATE POLICY "Collaborators can update shared board activities"
  ON public.activities FOR UPDATE
  USING (
    public.activity_has_board_access(id, 'editor')
  )
  WITH CHECK (
    public.activity_has_board_access(id, 'editor')
  );

-- ---- DELETE ----
DROP POLICY IF EXISTS "Collaborators can delete shared board activities"
  ON public.activities;
CREATE POLICY "Collaborators can delete shared board activities"
  ON public.activities FOR DELETE
  USING (
    public.activity_has_board_access(id, 'editor')
  );
