-- Atomically persist task positions for a reordered list.
CREATE OR REPLACE FUNCTION public.reorder_tasks(task_ids bigint[])
RETURNS void
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public, pg_catalog
AS $$
BEGIN
  WITH ordered_tasks AS (
    SELECT task_id, ordinality - 1 AS new_position
    FROM unnest(task_ids) WITH ORDINALITY AS t(task_id, ordinality)
  )
  UPDATE public.tasks AS tasks
  SET position = ordered_tasks.new_position::smallint
  FROM ordered_tasks
  WHERE tasks.id = ordered_tasks.task_id;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.reorder_tasks(bigint[]) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.reorder_tasks(bigint[]) TO authenticated;
