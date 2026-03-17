-- Create TaskStatus enum type
CREATE TYPE task_status AS ENUM ('Initiated', 'Working On', 'Completed');

-- Add status column to tasks table with default 'Initiated'
ALTER TABLE public.tasks
  ADD COLUMN status task_status NOT NULL DEFAULT 'Initiated';
