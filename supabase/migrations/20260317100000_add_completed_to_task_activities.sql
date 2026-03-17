-- Add completed boolean to track individual activity completion within a task
ALTER TABLE public.task_activities
  ADD COLUMN completed boolean NOT NULL DEFAULT false;
