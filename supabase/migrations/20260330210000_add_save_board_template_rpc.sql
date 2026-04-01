-- ============================================================
-- Atomic RPC: save_board_template
-- Inserts a new user-owned template together with its lists and
-- tasks (including activities JSONB) in a single transaction.
-- Using an RPC avoids PostgREST ambiguity between the
-- board_template_tasks.activities JSONB column and the separate
-- activities table, which can cause silent insert failures.
-- Runs as SECURITY INVOKER so RLS policies on all three
-- tables are enforced with the caller's identity.
-- ============================================================

CREATE OR REPLACE FUNCTION public.save_board_template(
  p_name        text,
  p_description text,
  p_lists       jsonb
)
RETURNS bigint
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public, pg_catalog
AS $$
DECLARE
  v_template_id bigint;
  v_list    jsonb;
  v_task    jsonb;
  v_list_id bigint;
  v_len_l   integer;
  v_len_t   integer;
  v_idx_l   integer;
  v_idx_t   integer;
BEGIN
  INSERT INTO board_templates (user_id, name, description)
  VALUES (auth.uid(), p_name, p_description)
  RETURNING id INTO v_template_id;

  IF p_lists IS NOT NULL AND jsonb_typeof(p_lists) != 'array' THEN
    RAISE EXCEPTION 'p_lists must be a JSON array, got %', jsonb_typeof(p_lists);
  END IF;

  v_len_l := CASE
               WHEN p_lists IS NULL THEN 0
               ELSE jsonb_array_length(p_lists)
             END;
  FOR v_idx_l IN 0 .. v_len_l - 1 LOOP
    v_list := p_lists -> v_idx_l;

    INSERT INTO board_template_lists (template_id, name, list_type, position)
    VALUES (
      v_template_id,
      v_list ->> 'name',
      (v_list ->> 'listType')::smallint,
      (v_list ->> 'position')::smallint
    )
    RETURNING id INTO v_list_id;

    v_len_t := CASE
                 WHEN jsonb_typeof(v_list -> 'tasks') = 'array'
                 THEN jsonb_array_length(v_list -> 'tasks')
                 ELSE 0
               END;
    FOR v_idx_t IN 0 .. v_len_t - 1 LOOP
      v_task := (v_list -> 'tasks') -> v_idx_t;

      INSERT INTO board_template_tasks (template_id, template_list_id, name, description, position, activities)
      VALUES (
        v_template_id,
        v_list_id,
        v_task ->> 'name',
        COALESCE(v_task ->> 'description', ''),
        (v_task ->> 'position')::smallint,
        CASE
          WHEN jsonb_typeof(v_task -> 'activities') = 'array'
          THEN v_task -> 'activities'
          ELSE '[]'::jsonb
        END
      );
    END LOOP;
  END LOOP;

  RETURN v_template_id;
END;
$$;

-- Allow authenticated users to call the function; deny anonymous access.
REVOKE EXECUTE ON FUNCTION public.save_board_template FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.save_board_template TO authenticated;
