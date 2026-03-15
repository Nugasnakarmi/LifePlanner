-- ============================================================
-- Associate tasks to a specific board list
-- ON DELETE SET NULL preserves the task if the list is removed
-- ============================================================
ALTER TABLE public.tasks
  ADD COLUMN boards_lists_id bigint
    REFERENCES public.board_lists(id) ON DELETE SET NULL;
