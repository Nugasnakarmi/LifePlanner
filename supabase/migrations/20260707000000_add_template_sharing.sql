-- ============================================================
-- Add per-template shareable flag so owners can generate a
-- share link that lets any authenticated user clone the template.
-- ============================================================

-- 1. New column -----------------------------------------------
ALTER TABLE public.board_templates
  ADD COLUMN is_shareable boolean NOT NULL DEFAULT false;

-- 2. Update board_templates SELECT policy --------------------
DROP POLICY "Read system, own, or collaborator templates" ON public.board_templates;

CREATE POLICY "Read system, own, collaborator, or shareable templates"
  ON public.board_templates FOR SELECT
  USING (
    is_system     = true
    OR auth.uid() = user_id
    OR is_shareable = true
    OR EXISTS (
      SELECT 1
      FROM   public.board_collaborators bc
      JOIN   public.boards b ON b.id = bc.board_id
      WHERE  b.user_id    = board_templates.user_id
        AND  bc.user_id   = auth.uid()
        AND  bc.status    = 'accepted'
    )
  );

-- 3. Update board_template_lists SELECT policy ----------------
DROP POLICY "Read lists of visible templates" ON public.board_template_lists;

CREATE POLICY "Read lists of visible templates"
  ON public.board_template_lists FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.board_templates t
      WHERE t.id = template_id
        AND (
          t.is_system     = true
          OR t.user_id    = auth.uid()
          OR t.is_shareable = true
          OR EXISTS (
            SELECT 1
            FROM   public.board_collaborators bc
            JOIN   public.boards b ON b.id = bc.board_id
            WHERE  b.user_id  = t.user_id
              AND  bc.user_id = auth.uid()
              AND  bc.status  = 'accepted'
          )
        )
    )
  );

-- 4. Update board_template_tasks SELECT policy ----------------
DROP POLICY "Read tasks of visible templates" ON public.board_template_tasks;

CREATE POLICY "Read tasks of visible templates"
  ON public.board_template_tasks FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.board_templates t
      WHERE t.id = template_id
        AND (
          t.is_system     = true
          OR t.user_id    = auth.uid()
          OR t.is_shareable = true
          OR EXISTS (
            SELECT 1
            FROM   public.board_collaborators bc
            JOIN   public.boards b ON b.id = bc.board_id
            WHERE  b.user_id  = t.user_id
              AND  bc.user_id = auth.uid()
              AND  bc.status  = 'accepted'
          )
        )
    )
  );

-- 5. RPC: toggle shareable flag on an owned template ----------
CREATE OR REPLACE FUNCTION public.set_template_shareable(
  p_template_id  bigint,
  p_is_shareable boolean
)
RETURNS void
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public, pg_catalog
AS $$
BEGIN
  UPDATE board_templates
     SET is_shareable = p_is_shareable
   WHERE id      = p_template_id
     AND user_id = auth.uid();

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Template not found or not owned by current user';
  END IF;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.set_template_shareable FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.set_template_shareable TO authenticated;

-- 6. RPC: clone a (shareable) template for the current user --
--
--    Re-uses save_board_template internally so all insertion
--    logic (including activities JSONB) is handled in one place.
-- ------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.clone_board_template(
  p_template_id bigint
)
RETURNS bigint
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public, pg_catalog
AS $$
DECLARE
  v_template  record;
  v_lists     jsonb;
  v_new_id    bigint;
BEGIN
  -- SELECT enforced by RLS; also ensure the caller isn't cloning their own template.
  SELECT id, name, description
    INTO v_template
    FROM board_templates
   WHERE id      = p_template_id
     AND user_id != auth.uid();

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Template not found or cannot be cloned (not accessible or already owned)';
  END IF;

  -- Build a JSON representation of all lists + tasks (incl. activities).
  SELECT COALESCE(
    jsonb_agg(
      jsonb_build_object(
        'name',     btl.name,
        'listType', btl.list_type,
        'position', btl.position,
        'tasks', COALESCE((
          SELECT jsonb_agg(
            jsonb_build_object(
              'name',        btt.name,
              'description', COALESCE(btt.description, ''),
              'position',    btt.position,
              'activities',  COALESCE(btt.activities, '[]'::jsonb)
            )
            ORDER BY btt.position
          )
          FROM board_template_tasks btt
          WHERE btt.template_list_id = btl.id
        ), '[]'::jsonb)
      )
      ORDER BY btl.position
    ),
    '[]'::jsonb
  ) INTO v_lists
  FROM board_template_lists btl
  WHERE btl.template_id = p_template_id;

  -- Delegate creation to the existing atomic RPC.
  SELECT public.save_board_template(
    v_template.name,
    COALESCE(v_template.description, ''),
    v_lists
  ) INTO v_new_id;

  RETURN v_new_id;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.clone_board_template FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.clone_board_template TO authenticated;
