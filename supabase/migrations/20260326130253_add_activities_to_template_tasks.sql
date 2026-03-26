-- Add an `activities` JSONB column to `board_template_tasks` so that
-- template authors can pre-define lightweight activity definitions
-- (name + optional data fields) for each task.  When a board is created
-- from a template these definitions are materialised as real activities
-- linked to the newly created tasks.

ALTER TABLE board_template_tasks
ADD COLUMN activities jsonb NOT NULL DEFAULT '[]'::jsonb;
