# Supabase Backend Services

This directory contains the Supabase backend configuration for LifePlanner, including database migrations and Edge Functions.

## Directory Structure

```
supabase/
├── functions/
│   └── send-board-invitation-email/   # Edge Function for invitation emails
│       └── index.ts
├── migrations/                        # Database schema migrations
└── README.md
```

---

## Edge Functions

### `send-board-invitation-email`

Sends a styled HTML invitation email when a user is invited to collaborate on a board. This function is triggered automatically by a Postgres `AFTER INSERT` trigger on the `board_invitations` table — no client-side email sending is required.

**How it works:**

1. A row is inserted into `board_invitations` (e.g. via the app UI).
2. A Postgres trigger (`on_board_invitation_created`) fires and uses `pg_net` to POST the invitation payload to this Edge Function.
3. The Edge Function authenticates the request, builds a styled HTML email, and sends it via SMTP.

**Source:** [`supabase/functions/send-board-invitation-email/index.ts`](functions/send-board-invitation-email/index.ts)

**Database migration:** [`supabase/migrations/20260412010000_add_board_invitation_email_trigger.sql`](migrations/20260412010000_add_board_invitation_email_trigger.sql)

---

## Setup Guide

### Prerequisites

- [Supabase CLI](https://supabase.com/docs/guides/cli) installed and linked to your project
- A Supabase project with the `board_invitations` table
- An SMTP email provider (e.g. SendGrid, Mailgun, Amazon SES, or any SMTP server)

### Step 1: Apply Database Migrations

Run all pending migrations to create the trigger function and `pg_net` extension:

```bash
supabase db push
```

This will:
- Enable the `pg_net` extension (for async HTTP calls from Postgres)
- Create the `handle_board_invitation_created()` trigger function
- Attach an `AFTER INSERT` trigger to `board_invitations`

### Step 2: Configure Vault Secrets

The database trigger reads two secrets from [Supabase Vault](https://supabase.com/docs/guides/database/vault) to authenticate its HTTP call to the Edge Function.

```bash
# Your Supabase project URL (found in Project Settings → API)
supabase secrets set project_url='https://<your-project-ref>.supabase.co'

# Your service role key (found in Project Settings → API → service_role key)
supabase secrets set service_role_key='<your-service-role-key>'
```

> **Note:** The `service_role_key` value stored in Vault must match the `SUPABASE_SERVICE_ROLE_KEY` that the Supabase runtime auto-injects into Edge Functions. This is the same key — the trigger reads it from Vault, and the Edge Function reads it from its runtime environment.

Alternatively, you can store them via SQL:

```sql
SELECT vault.create_secret('https://<your-project-ref>.supabase.co', 'project_url');
SELECT vault.create_secret('<your-service-role-key>', 'service_role_key');
```

### Step 3: Configure SMTP Secrets

The Edge Function uses these secrets to connect to your SMTP provider and send emails:

```bash
# SMTP server connection
supabase secrets set SMTP_HOST='smtp.example.com'
supabase secrets set SMTP_PORT='587'
supabase secrets set SMTP_USER='your-smtp-username'
supabase secrets set SMTP_PASS='your-smtp-password'

# Sender address (the "From" field in invitation emails)
supabase secrets set SMTP_FROM='noreply@yourdomain.com'

# Your application's public URL (used to build invitation links)
supabase secrets set SITE_URL='https://yourapp.com'
```

| Secret       | Required | Description                                                     | Example                          |
|-------------|----------|-----------------------------------------------------------------|----------------------------------|
| `SMTP_HOST` | Yes      | SMTP server hostname                                            | `smtp.sendgrid.net`              |
| `SMTP_PORT` | Yes      | SMTP server port (`587` for STARTTLS, `465` for SSL)            | `587`                            |
| `SMTP_USER` | Yes      | SMTP authentication username                                    | `apikey`                         |
| `SMTP_PASS` | Yes      | SMTP authentication password or API key                         | `SG.xxxx`                        |
| `SMTP_FROM` | Yes      | Sender email address                                            | `noreply@yourdomain.com`         |
| `SITE_URL`  | Yes      | Public URL of the LifePlanner app (no trailing slash)           | `https://yourapp.com`            |

> **Important:** `SITE_URL` is required. The Edge Function will return a 500 error if it is missing or invalid, to prevent sending emails with broken invitation links.

### Step 4: Deploy the Edge Function

```bash
supabase functions deploy send-board-invitation-email
```

### Step 5: Verify the Setup

1. **Check secrets are configured:**
   ```bash
   supabase secrets list
   ```
   Confirm that `project_url`, `service_role_key`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, and `SITE_URL` are all listed.

2. **Test the flow:** Create a board invitation through the app. The invitee should receive a styled HTML email with an "Accept Invitation" button.

3. **Check logs on failure:**
   ```bash
   supabase functions logs send-board-invitation-email
   ```
   - If you see `"Server misconfiguration: SITE_URL is not set"` → set the `SITE_URL` secret.
   - If you see `"Unauthorized"` → verify that `service_role_key` in Vault matches the project's service role key.
   - If you see `"Failed to send invitation email"` → check your SMTP credentials.

---

## Troubleshooting

| Symptom                              | Likely Cause                                          | Fix                                                         |
|--------------------------------------|------------------------------------------------------|-------------------------------------------------------------|
| No email sent, no errors in logs     | Vault secrets (`project_url`, `service_role_key`) not configured | Check Postgres logs for the `RAISE WARNING` message; set the vault secrets |
| Edge Function returns 401            | `service_role_key` in Vault doesn't match the project's service role key | Re-set the vault secret with the correct key                |
| Edge Function returns 500 (SITE_URL) | `SITE_URL` secret is missing or invalid              | Set `SITE_URL` to your app's public URL (must use `http://` or `https://`) |
| Email sent but link is broken        | `SITE_URL` is misconfigured                          | Ensure `SITE_URL` has no trailing slash and points to your live app |
| SMTP connection error                | Wrong SMTP credentials or port                       | Verify `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`  |
