-- Migration: Create board_lists table
-- Purpose: Stores the configurable list (column) names used in each board,
--          allowing each board to have its own custom list layout.

CREATE TABLE IF NOT EXISTS public.board_lists (
  id            SERIAL PRIMARY KEY,
  board_id      INTEGER NOT NULL REFERENCES public.boards(id) ON DELETE CASCADE,
  list_key      TEXT    NOT NULL,
  display_name  TEXT    NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (board_id, list_key)
);

-- Enable Row Level Security
ALTER TABLE public.board_lists ENABLE ROW LEVEL SECURITY;

-- Policy: users may only access lists belonging to their own boards
CREATE POLICY "Users can manage lists on their own boards"
  ON public.board_lists
  USING (
    board_id IN (
      SELECT id FROM public.boards WHERE user_id = auth.uid()
    )
  )
  WITH CHECK (
    board_id IN (
      SELECT id FROM public.boards WHERE user_id = auth.uid()
    )
  );

-- Index for fast lookups by board
CREATE INDEX IF NOT EXISTS board_lists_board_id_idx ON public.board_lists (board_id);
