-- Add board_sort preference to user_preferences table
ALTER TABLE public.user_preferences
  ADD COLUMN IF NOT EXISTS board_sort character varying(20) DEFAULT 'created_at'
  CHECK (board_sort IN ('name', 'created_at', 'updated_at'));

-- Add updated_at column to boards table (tracks last modification time for sorting)
ALTER TABLE public.boards
  ADD COLUMN IF NOT EXISTS updated_at timestamp with time zone NOT NULL DEFAULT now();

-- Trigger function to auto-update boards.updated_at on row update
CREATE OR REPLACE FUNCTION public.boards_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Attach trigger to boards table
DROP TRIGGER IF EXISTS boards_set_updated_at ON public.boards;
CREATE TRIGGER boards_set_updated_at
  BEFORE UPDATE ON public.boards
  FOR EACH ROW EXECUTE FUNCTION public.boards_set_updated_at();
