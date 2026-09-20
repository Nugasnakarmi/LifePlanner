-- Persist the order of tasks within each board list.
ALTER TABLE public.tasks
  ADD COLUMN position smallint NOT NULL DEFAULT 0;

WITH ranked_tasks AS (
  SELECT
    id,
    ROW_NUMBER() OVER (
      PARTITION BY boards_lists_id
      ORDER BY created_at, id
    ) - 1 AS task_position
  FROM public.tasks
)
UPDATE public.tasks AS tasks
SET position = ranked_tasks.task_position
FROM ranked_tasks
WHERE tasks.id = ranked_tasks.id;
