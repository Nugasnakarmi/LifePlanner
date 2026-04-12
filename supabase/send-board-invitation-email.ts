// =============================================================
// Supabase Edge Function: send-board-invitation-email
//
// DEPLOYMENT:
//   1. Create the standard Supabase Edge Function directory:
//        mkdir -p supabase/functions/send-board-invitation-email
//
//   2. Move this file into that directory as index.ts:
//        mv supabase/send-board-invitation-email.ts \
//           supabase/functions/send-board-invitation-email/index.ts
//
//   3. Deploy the function:
//        supabase functions deploy send-board-invitation-email
//
//   4. Set the required secrets (if not already set):
//        supabase secrets set SMTP_HOST='smtp.example.com'
//        supabase secrets set SMTP_PORT='587'
//        supabase secrets set SMTP_USER='your-smtp-user'
//        supabase secrets set SMTP_PASS='your-smtp-password'
//        supabase secrets set SMTP_FROM='noreply@yourdomain.com'
//        supabase secrets set SITE_URL='https://yourapp.com'
//
//   5. Store Vault secrets so the database trigger can reach this
//      function (see the migration file for details):
//        supabase secrets set project_url='https://<ref>.supabase.co'
//        supabase secrets set service_role_key='<service-role-key>'
// =============================================================

import nodemailer from "npm:nodemailer@6";

/** Escape HTML special characters to prevent injection in email body. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface InvitationPayload {
  email: string;
  token: string;
  board_name: string;
  inviter_name: string;
  role: string;
  expires_at: string;
}

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

function jsonResponse(
  body: Record<string, unknown>,
  status: number,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function buildEmailHtml(
  inviterName: string,
  boardName: string,
  role: string,
  inviteLink: string,
  expiresAt: string,
): string {
  const expiresDate = new Date(expiresAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Board Invitation</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f4f4f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .container { max-width: 520px; margin: 40px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); overflow: hidden; }
    .header { background: #4f46e5; padding: 24px 32px; }
    .header h1 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 600; }
    .body-content { padding: 32px; color: #333; line-height: 1.6; }
    .body-content p { margin: 0 0 16px; }
    .role-badge { display: inline-block; background: #e0e7ff; color: #4338ca; padding: 2px 10px; border-radius: 12px; font-size: 13px; font-weight: 600; text-transform: capitalize; }
    .cta { display: inline-block; margin: 16px 0; padding: 12px 28px; background: #4f46e5; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px; }
    .footer { padding: 16px 32px; font-size: 12px; color: #999; border-top: 1px solid #eee; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>LifePlanner &mdash; Board Invitation</h1>
    </div>
    <div class="body-content">
      <p>Hi there,</p>
      <p>
        <strong>${escapeHtml(inviterName)}</strong> has invited you to collaborate on
        the board <strong>&ldquo;${escapeHtml(boardName)}&rdquo;</strong> as a
        <span class="role-badge">${escapeHtml(role)}</span>.
      </p>
      <p>Click the button below to accept the invitation:</p>
      <p><a class="cta" href="${inviteLink}">Accept Invitation</a></p>
      <p style="font-size:13px;color:#666;">
        Or copy and paste this URL into your browser:<br/>
        <a href="${inviteLink}" style="color:#4f46e5;word-break:break-all;">${inviteLink}</a>
      </p>
      <p style="font-size:13px;color:#999;">
        This invitation expires on <strong>${expiresDate}</strong>.
      </p>
    </div>
    <div class="footer">
      You received this email because someone invited you to a LifePlanner board.
      If you did not expect this invitation you can safely ignore this email.
    </div>
  </div>
</body>
</html>`;
}

Deno.serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // ── Auth: only allow service-role calls ──────────────────────
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return jsonResponse({ error: "Missing authorization header" }, 401);
    }
    const token = authHeader.replace("Bearer ", "");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    if (!serviceRoleKey || token !== serviceRoleKey) {
      return jsonResponse({ error: "Unauthorized" }, 401);
    }

    // ── Parse & validate payload ────────────────────────────────
    const payload: InvitationPayload = await req.json();

    if (!payload.email || !payload.token || !payload.board_name) {
      return jsonResponse(
        { error: "Missing required fields: email, token, board_name" },
        400,
      );
    }

    // ── Build invitation link ───────────────────────────────────
    const siteUrl = (Deno.env.get("SITE_URL") ?? "http://localhost:4200")
      .replace(/\/+$/, "");
    const inviteLink = `${siteUrl}/invite?token=${encodeURIComponent(payload.token)}`;

    // ── Configure SMTP transport ────────────────────────────────
    const smtpPort = Number(Deno.env.get("SMTP_PORT") ?? "587");
    const transport = nodemailer.createTransport({
      host: Deno.env.get("SMTP_HOST"),
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: Deno.env.get("SMTP_USER"),
        pass: Deno.env.get("SMTP_PASS"),
      },
    });

    const fromAddress =
      Deno.env.get("SMTP_FROM") ??
      Deno.env.get("SMTP_ADMIN_EMAIL") ??
      "noreply@lifeplanner.app";

    // ── Send the email ──────────────────────────────────────────
    await transport.sendMail({
      from: fromAddress,
      to: payload.email,
      subject: `${payload.inviter_name} invited you to collaborate on "${payload.board_name}"`,
      html: buildEmailHtml(
        payload.inviter_name,
        payload.board_name,
        payload.role,
        inviteLink,
        payload.expires_at,
      ),
    });

    console.log(
      `Invitation email sent to ${payload.email} for board "${payload.board_name}"`,
    );

    return jsonResponse({ success: true }, 200);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Failed to send invitation email:", message);
    return jsonResponse({ error: "Failed to send invitation email" }, 500);
  }
});
