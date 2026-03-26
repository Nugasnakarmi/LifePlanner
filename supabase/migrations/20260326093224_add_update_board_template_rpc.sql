-- ============================================================
-- Atomic RPC: update_board_template
-- Updates a user-owned template header, then deletes and
-- re-inserts its lists and tasks in a single transaction so
-- the template is never left in a partially-updated state.
-- Runs as SECURITY INVOKER so RLS policies on all three
-- tables are enforced with the caller's identity.
-- ============================================================

CREATE OR REPLACE FUNCTION public.update_board_template(
  p_template_id bigint,
  p_name        text,
  p_description text,
  p_lists       jsonb
)
RETURNS void
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public, pg_catalog
AS $$
DECLARE
  v_list    jsonb;
  v_task    jsonb;
  v_list_id bigint;
  v_len_l   integer;
  v_len_t   integer;
  v_idx_l   integer;
  v_idx_t   integer;
BEGIN
  UPDATE board_templates
  SET name        = p_name,
      description = p_description
  WHERE id = p_template_id;

  -- Raise an error if no rows matched: template does not exist or RLS denied access.
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Template % not found or access denied', p_template_id;
  END IF;

  -- Delete existing lists; cascades to board_template_tasks via FK.
  DELETE FROM board_template_lists
  WHERE template_id = p_template_id;

  -- Re-insert lists and their tasks from the JSON payload.
  v_len_l := COALESCE(jsonb_array_length(p_lists), 0);
  FOR v_idx_l IN 0 .. v_len_l - 1 LOOP
    v_list := p_lists -> v_idx_l;

    INSERT INTO board_template_lists (template_id, name, list_type, position)
    VALUES (
      p_template_id,
      v_list ->> 'name',
      (v_list ->> 'listType')::smallint,
      (v_list ->> 'position')::smallint
    )
    RETURNING id INTO v_list_id;

    v_len_t := COALESCE(jsonb_array_length(v_list -> 'tasks'), 0);
    FOR v_idx_t IN 0 .. v_len_t - 1 LOOP
      v_task := (v_list -> 'tasks') -> v_idx_t;

      INSERT INTO board_template_tasks (template_id, template_list_id, name, description, position)
      VALUES (
        p_template_id,
        v_list_id,
        v_task ->> 'name',
        COALESCE(v_task ->> 'description', ''),
        (v_task ->> 'position')::smallint
      );
    END LOOP;
  END LOOP;
END;
$$;

-- Allow authenticated users to call the function; deny anonymous access.
REVOKE EXECUTE ON FUNCTION public.update_board_template FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.update_board_template TO authenticated;
