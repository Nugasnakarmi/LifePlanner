-- ============================================================
-- Fix: enforce activities.user_id immutability via trigger and
-- correct the collaborator UPDATE policy's WITH CHECK clause.
--
-- Problem with the previous approach (WITH CHECK (auth.uid() = user_id)):
--   1. BREAKS the normal case: a collaborator editing another
--      user's activity content (without changing user_id) fails
--      because auth.uid() ≠ existing user_id.
--   2. ALLOWS ownership theft: a collaborator can satisfy both
--      USING and WITH CHECK by setting user_id = auth.uid().
--
-- Correct approach:
--   - Enforce user_id immutability at the trigger level so the
--     column simply cannot be changed by anyone.
--   - Keep the policy's WITH CHECK aligned with the USING
--     expression (board editor access), which is the correct
--     post-update row-visibility check for collaborators.
-- ============================================================

-- 1. Trigger function: reject any attempt to change user_id on activities.
CREATE OR REPLACE FUNCTION public.prevent_activity_user_id_change()
  RETURNS trigger
  LANGUAGE plpgsql
  SECURITY DEFINER
  SET search_path = public, pg_catalog
AS $$
BEGIN
  IF NEW.user_id IS DISTINCT FROM OLD.user_id THEN
    RAISE EXCEPTION
      'user_id is immutable on activities (old: %, new: %)',
      OLD.user_id, NEW.user_id;
  END IF;
  RETURN NEW;
END;
$$;

-- 2. Attach the trigger to activities (idempotent via OR REPLACE above +
--    DROP TRIGGER IF EXISTS here).
DROP TRIGGER IF EXISTS enforce_activity_user_id_immutable ON public.activities;

CREATE TRIGGER enforce_activity_user_id_immutable
  BEFORE UPDATE ON public.activities
  FOR EACH ROW EXECUTE FUNCTION public.prevent_activity_user_id_change();

-- 3. Recreate the collaborator UPDATE policy with an explicit WITH CHECK
--    that matches the USING expression. Because user_id is now enforced
--    immutable by the trigger, the post-update row will always pass the
--    same board-access check as the pre-update row.
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
    -- Post-update the row must still be linked to a board task where the
    -- caller has editor access. user_id immutability is enforced by the
    -- enforce_activity_user_id_immutable trigger above.
    EXISTS (
      SELECT 1
      FROM public.task_activities ta
      JOIN public.tasks t ON t.id = ta.task_id
      WHERE ta.activity_id = activities.id
        AND t.board_id IS NOT NULL
        AND public.has_board_access(t.board_id, 'editor')
    )
  );
