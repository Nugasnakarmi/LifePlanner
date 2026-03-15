-- User-created board templates
CREATE TABLE public.board_templates (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id     UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name        TEXT        NOT NULL,
  description TEXT,
  icon        TEXT        NOT NULL DEFAULT 'description',
  category    TEXT        NOT NULL DEFAULT 'custom',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tasks that belong to a template
CREATE TABLE public.board_template_tasks (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  template_id BIGINT      NOT NULL REFERENCES public.board_templates(id) ON DELETE CASCADE,
  name        TEXT        NOT NULL,
  description TEXT,
  type        SMALLINT    NOT NULL,
  sort_order  SMALLINT    NOT NULL DEFAULT 0
);

-- Indexes
CREATE INDEX idx_board_templates_user_id   ON public.board_templates(user_id);
CREATE INDEX idx_board_template_tasks_tmpl ON public.board_template_tasks(template_id);

-- Row Level Security
ALTER TABLE public.board_templates      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.board_template_tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own templates"
  ON public.board_templates FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own templates"
  ON public.board_templates FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own templates"
  ON public.board_templates FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own templates"
  ON public.board_templates FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view tasks of their templates"
  ON public.board_template_tasks FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.board_templates bt
      WHERE bt.id = template_id AND bt.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can manage tasks of their templates"
  ON public.board_template_tasks FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.board_templates bt
      WHERE bt.id = template_id AND bt.user_id = auth.uid()
    )
  );
