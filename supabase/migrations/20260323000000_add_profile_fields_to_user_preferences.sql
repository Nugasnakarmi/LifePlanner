-- Add profile fields to user_preferences table
ALTER TABLE public.user_preferences
  ADD COLUMN IF NOT EXISTS display_name character varying(100),
  ADD COLUMN IF NOT EXISTS address text,
  ADD COLUMN IF NOT EXISTS avatar_url text;
