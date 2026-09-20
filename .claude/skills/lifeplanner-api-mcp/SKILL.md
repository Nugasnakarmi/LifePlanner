# LifePlanner API/MCP skill

Use this skill whenever a LifePlanner API action changes.

## Required synchronization

The MCP server is the external API-action surface for Claude. Whenever a
`*.api.service.ts`, Supabase RPC used by an API service, or related API
interface changes:

1. Update the matching tool in `mcp-server/src/server.ts`.
2. Keep its input validation, authorization assumptions, and result shape
   aligned with the Angular API service.
3. Update `mcp-server/README.md` if the tool inventory or configuration
   changes.
4. Run `npm run build --prefix mcp-server`.

Do not use a Supabase service-role key in the MCP server. Requests must use a
user access token so Supabase RLS policies continue to enforce ownership and
collaboration permissions. The `ask_lifeplanner` tool is advisory only and
must not be used as a substitute for an API action.

## API action sources

The current action sources are:

- `src/app/services/board/board.api.service.ts`
- `src/app/services/board/board-collaboration.api.service.ts`
- `src/app/services/board-list/board-list.api.service.ts`
- `src/app/services/board-template/board-template.api.service.ts`
- `src/app/services/task/task.api.service.ts`
- `src/app/services/task/activity.api.service.ts`
- `src/app/services/user-profile.api.service.ts`
