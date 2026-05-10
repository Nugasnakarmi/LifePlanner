-- ============================================================
-- Allow editor collaborators to manage (delete) activity-media
-- files on boards they have editor access to.
--
-- Problem:
--   The existing DELETE policy on storage.objects only permits a
--   user to delete objects whose first path segment matches their
--   own auth.uid(). When a collaborator (editor) removes an
--   activity whose media files were originally uploaded by the
--   board owner or another collaborator, the storage.remove()
--   call is blocked by the policy even though the table-level
--   activity delete succeeds — leaving orphaned files in the bucket.
--
-- Fix:
--   1. Introduce activity_media_has_board_access() SECURITY DEFINER.
--      It searches the activities table (bypassing RLS to avoid
--      infinite-recursion cycles) for a media JSON entry whose URL
--      ends with the given storage object name, then delegates the
--      board-access check to the existing has_board_access()
--      SECURITY DEFINER function.
--
--   2. Add a new DELETE policy on storage.objects that grants
--      deletion to authenticated users when the helper returns true,
--      complementing the existing owner-based DELETE policy.
-- ============================================================

-- --------------------------------------------------------
-- Helper: resolve a storage object name to board editor access.
-- SECURITY DEFINER reads activities / task_activities / tasks
-- without triggering their RLS policies, following the same
-- pattern used in activity_has_board_access() (20260415120000).
-- --------------------------------------------------------
CREATE OR REPLACE FUNCTION public.activity_media_has_board_access(
  p_object_name text,
  p_min_role    public.collaborator_role DEFAULT 'editor'
)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_catalog
AS $$
  SELECT auth.uid() IS NOT NULL
    AND EXISTS (
      SELECT 1
      FROM public.activities a
      JOIN public.task_activities ta ON ta.activity_id = a.id
      JOIN public.tasks t ON t.id = ta.task_id
      WHERE EXISTS (
        SELECT 1
        FROM jsonb_array_elements(a.media) AS m
        WHERE (m->>'url') LIKE '%/' || p_object_name
      )
        AND t.board_id IS NOT NULL
        AND public.has_board_access(t.board_id, p_min_role)
    );
$$;

REVOKE EXECUTE ON FUNCTION public.activity_media_has_board_access FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.activity_media_has_board_access TO authenticated;

-- --------------------------------------------------------
-- Storage DELETE policy: let editor collaborators delete any
-- activity-media file that belongs to a board they can edit.
-- The existing "Users can delete their own media" policy already
-- covers the file-owner path; this policy adds the cross-user
-- collaborator path.
-- --------------------------------------------------------
CREATE POLICY "Editors can delete shared board activity media"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'activity-media'
    AND public.activity_media_has_board_access(name, 'editor')
  );
