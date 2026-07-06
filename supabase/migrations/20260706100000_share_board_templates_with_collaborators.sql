-- ============================================================
-- Allow accepted board collaborators to see templates created
-- by the users who share boards with them.
-- ============================================================

-- ---- board_templates ----
DROP POLICY "Read system or own templates" ON public.board_templates;

CREATE POLICY "Read system, own, or collaborator templates"
  ON public.board_templates FOR SELECT
  USING (
    is_system = true
    OR auth.uid() = user_id
    OR EXISTS (
      SELECT 1
      FROM public.board_collaborators bc
      JOIN public.boards b ON b.id = bc.board_id
      WHERE b.user_id = board_templates.user_id
        AND bc.user_id = auth.uid()
        AND bc.status  = 'accepted'
    )
  );

-- ---- board_template_lists ----
DROP POLICY "Read lists of visible templates" ON public.board_template_lists;

CREATE POLICY "Read lists of visible templates"
  ON public.board_template_lists FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.board_templates t
      WHERE t.id = template_id
        AND (
          t.is_system = true
          OR t.user_id = auth.uid()
          OR EXISTS (
            SELECT 1
            FROM public.board_collaborators bc
            JOIN public.boards b ON b.id = bc.board_id
            WHERE b.user_id = t.user_id
              AND bc.user_id = auth.uid()
              AND bc.status  = 'accepted'
          )
        )
    )
  );

-- ---- board_template_tasks ----
DROP POLICY "Read tasks of visible templates" ON public.board_template_tasks;

CREATE POLICY "Read tasks of visible templates"
  ON public.board_template_tasks FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.board_templates t
      WHERE t.id = template_id
        AND (
          t.is_system = true
          OR t.user_id = auth.uid()
          OR EXISTS (
            SELECT 1
            FROM public.board_collaborators bc
            JOIN public.boards b ON b.id = bc.board_id
            WHERE b.user_id = t.user_id
              AND bc.user_id = auth.uid()
              AND bc.status  = 'accepted'
          )
        )
    )
  );
