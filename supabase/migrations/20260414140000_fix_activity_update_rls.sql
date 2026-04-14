-- ============================================================
-- Fix: activities UPDATE RLS missing WITH CHECK clause
--
-- Root cause:
--   "Collaborators can update shared board activities" declared
--   only a USING clause. PostgreSQL defaults the WITH CHECK to
--   the same expression as USING, which re-evaluates the
--   task_activities JOIN *after* the update. For a row whose
--   task_activities link was just inserted in the same request
--   the post-update check could fail transiently.
--
--   More critically, when the activity owner (not a board
--   collaborator) calls updateActivity() the "Users can update
--   their own activities" policy covers them via USING, but
--   without an explicit WITH CHECK the default repeats the USING
--   predicate on the new row. Since user_id is unchanged this
--   is safe for that policy; the real gap is the collaborator
--   policy where the post-update USING check is less obvious.
--
-- Fix:
--   Add an explicit WITH CHECK to the collaborator UPDATE policy
--   that mirrors the ownership gate (auth.uid() = user_id) so
--   a collaborator cannot reassign an activity to another owner
--   while also remaining unblocked when updating content fields.
-- ============================================================

DROP POLICY IF EXISTS "Collaborators can update shared board activities"
  ON public.activities;

CREATE POLICY "Collaborators can update shared board activities"
  ON public.activities FOR UPDATE
  USING (
    EXISTS (
      SELECT 1
      FROM public.task_activities ta
      JOIN public.tasks t ON t.id = ta.task_id
      WHERE ta.activity_id = activities.id
        AND t.board_id IS NOT NULL
        AND public.has_board_access(t.board_id, 'editor')
    )
  )
  WITH CHECK (
    -- The collaborator must remain the activity owner after the update.
    -- This prevents reassigning user_id while allowing all other field edits.
    auth.uid() = user_id
  );
