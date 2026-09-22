# LifePlanner MCP server

This server exposes LifePlanner's authenticated API actions as MCP tools for
Claude. It uses the caller's Supabase access token, so Supabase RLS remains the
authorization boundary. It never uses a service-role key.

## Configuration

Set these environment variables before starting the server:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_ACCESS_TOKEN` — the signed-in user's current access token
- `ANTHROPIC_API_KEY` (optional, for the read-only `ask_lifeplanner` tool)
- `ANTHROPIC_MODEL` (optional)

Run it from the repository root:

```sh
cd mcp-server
npm install
npm start
```

Add the command to Claude Desktop or another MCP client:

```json
{
  "mcpServers": {
    "lifeplanner": {
      "command": "npm",
      "args": ["--prefix", "/absolute/path/to/LifePlanner/mcp-server", "start"],
      "env": {
        "SUPABASE_URL": "...",
        "SUPABASE_ANON_KEY": "...",
        "SUPABASE_ACCESS_TOKEN": "..."
      }
    }
  }
}
```

The tool names mirror the Angular API service actions: boards, board lists,
tasks, activities, templates, collaboration, invitations, and profiles.
Update `src/server.ts` and this inventory whenever an API service adds,
removes, or changes an action.
