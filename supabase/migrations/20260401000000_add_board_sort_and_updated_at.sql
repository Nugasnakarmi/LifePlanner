-- Add board_sort preference to user_preferences table
ALTER TABLE public.user_preferences
  ADD COLUMN IF NOT EXISTS board_sort character varying(20) DEFAULT 'created_at'
  CHECK (board_sort IN ('name', 'created_at', 'updated_at'));

-- Add updated_at column to boards table (tracks last modification time for sorting).
-- Added as nullable first so existing rows are not incorrectly marked "recently modified".
ALTER TABLE public.boards
  ADD COLUMN IF NOT EXISTS updated_at timestamp with time zone;

-- Backfill existing boards so their modification time is stable (matches creation time)
UPDATE public.boards
SET updated_at = created_at
WHERE updated_at IS NULL;

-- Enforce NOT NULL and a server-side default after the backfill
ALTER TABLE public.boards
  ALTER COLUMN updated_at SET DEFAULT now(),
  ALTER COLUMN updated_at SET NOT NULL;

-- Remove any old board-specific trigger function (we reuse the shared set_updated_at below)
DROP FUNCTION IF EXISTS public.boards_set_updated_at();

-- Attach trigger to boards table using the shared updated_at trigger function
DROP TRIGGER IF EXISTS boards_set_updated_at ON public.boards;
CREATE TRIGGER boards_set_updated_at
  BEFORE UPDATE ON public.boards
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
