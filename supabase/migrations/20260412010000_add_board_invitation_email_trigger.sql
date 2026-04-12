-- ============================================================
-- Trigger: send board invitation email via Edge Function
--
-- When a row is inserted into board_invitations, this trigger
-- uses the pg_net extension to call the "send-board-invitation-email"
-- Edge Function, which sends an SMTP email to the invitee.
--
-- Prerequisites (one-time setup):
--   1. Enable pg_net extension (done below).
--   2. Store two secrets in the Supabase Vault:
--        supabase secrets set project_url='https://<project-ref>.supabase.co'
--        supabase secrets set service_role_key='<service-role-key>'
--      Or via SQL:
--        SELECT vault.create_secret('<url>',  'project_url');
--        SELECT vault.create_secret('<key>',  'service_role_key');
--   3. Deploy the Edge Function:
--        supabase functions deploy send-board-invitation-email
--   4. Set Edge Function secrets for SMTP:
--        supabase secrets set SMTP_HOST='...'
--        supabase secrets set SMTP_PORT='587'
--        supabase secrets set SMTP_USER='...'
--        supabase secrets set SMTP_PASS='...'
--        supabase secrets set SMTP_FROM='noreply@yourdomain.com'
--        supabase secrets set SITE_URL='https://yourapp.com'
-- ============================================================

-- 1. Enable pg_net for async HTTP calls from triggers
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- 2. Trigger function: gather context and POST to the Edge Function
CREATE OR REPLACE FUNCTION public.handle_board_invitation_created()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions, pg_catalog
AS $$
DECLARE
  v_board_name    text;
  v_inviter_name  text;
  v_project_url   text;
  v_service_key   text;
BEGIN
  -- Resolve board name
  SELECT b.name INTO v_board_name
  FROM public.boards b
  WHERE b.id = NEW.board_id;

  -- Resolve inviter display name; fall back to auth email
  SELECT COALESCE(up.display_name, u.email)
  INTO v_inviter_name
  FROM auth.users u
  LEFT JOIN public.user_preferences up ON up.user_id = u.id
  WHERE u.id = NEW.invited_by;

  -- Read secrets from Supabase Vault
  SELECT decrypted_secret INTO v_project_url
  FROM vault.decrypted_secrets
  WHERE name = 'project_url'
  LIMIT 1;

  SELECT decrypted_secret INTO v_service_key
  FROM vault.decrypted_secrets
  WHERE name = 'service_role_key'
  LIMIT 1;

  -- Guard: skip if vault secrets are not configured yet
  IF v_project_url IS NULL OR v_service_key IS NULL THEN
    RAISE WARNING 'Board invitation email skipped: vault secrets "project_url" and/or "service_role_key" are not configured.';
    RETURN NEW;
  END IF;

  -- Fire-and-forget HTTP POST to the Edge Function via pg_net
  PERFORM net.http_post(
    url     := v_project_url || '/functions/v1/send-board-invitation-email',
    body    := jsonb_build_object(
                 'email',        NEW.email,
                 'token',        NEW.token::text,
                 'board_name',   COALESCE(v_board_name, 'Untitled Board'),
                 'inviter_name', COALESCE(v_inviter_name, 'A LifePlanner user'),
                 'role',         NEW.role::text,
                 'expires_at',   NEW.expires_at
               ),
    headers := jsonb_build_object(
                 'Content-Type',  'application/json',
                 'Authorization', 'Bearer ' || v_service_key
               )
  );

  RETURN NEW;
END;
$$;

-- 3. Attach the trigger to board_invitations
CREATE TRIGGER on_board_invitation_created
  AFTER INSERT ON public.board_invitations
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_board_invitation_created();
