import Anthropic from '@anthropic-ai/sdk';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const supabaseUrl = process.env['SUPABASE_URL'];
const supabaseKey = process.env['SUPABASE_ANON_KEY'];
const accessToken = process.env['SUPABASE_ACCESS_TOKEN'];

if (!supabaseUrl || !supabaseKey || !accessToken) {
  throw new Error('SUPABASE_URL, SUPABASE_ANON_KEY, and SUPABASE_ACCESS_TOKEN are required');
}

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey, {
  global: { headers: { Authorization: 'Bearer ' + accessToken } },
});
const anthropic = process.env['ANTHROPIC_API_KEY']
  ? new Anthropic({ apiKey: process.env['ANTHROPIC_API_KEY'] })
  : null;
const server = new McpServer({ name: 'lifeplanner-api', version: '0.1.0' });

const id = z.number().int().positive();
const result = (value: unknown) => ({
  content: [{ type: 'text' as const, text: JSON.stringify(value ?? null) }],
});

async function query(
  operation: () => PromiseLike<{ data: unknown; error: { message: string } | null }>
) {
  const { data, error } = await operation();
  if (error) throw new Error(error.message);
  return data;
}

function register(
  name: string,
  description: string,
  shape: z.ZodRawShape,
  handler: (args: any) => Promise<unknown>
) {
  server.registerTool(name, { description, inputSchema: shape }, async (args) => {
    try {
      return result(await handler(args));
    } catch (error) {
      return {
        isError: true,
        ...result({ error: error instanceof Error ? error.message : String(error) }),
      };
    }
  });
}

register('list_boards', 'List boards available to the authenticated user.', {}, () =>
  query(() =>
    supabase
      .from('boards')
      .select('*')
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: true })
  )
);
register('create_board', 'Create a board.', { name: z.string().min(1), description: z.string().optional() }, (args) =>
  query(() => supabase.from('boards').insert({ name: args.name, description: args.description ?? '' }).select().single())
);
register('update_board', 'Update a board name or description.', { board_id: id, name: z.string().min(1).optional(), description: z.string().optional() }, (args) =>
  query(() => supabase.from('boards').update({ name: args.name, description: args.description }).eq('id', args.board_id).select().single())
);
register('delete_board', 'Delete a board owned by the authenticated user.', { board_id: id }, (args) =>
  query(() => supabase.from('boards').delete().eq('id', args.board_id).select('id'))
);

register('list_board_lists', 'List lists for a board.', { board_id: id }, (args) =>
  query(() => supabase.from('board_lists').select('*').eq('board_id', args.board_id).order('position'))
);
register('create_board_list', 'Create a list on a board.', { board_id: id, name: z.string().min(1), position: z.number().int().nonnegative().optional() }, (args) =>
  query(() => supabase.from('board_lists').insert({ board_id: args.board_id, name: args.name, position: args.position ?? 0 }).select().single())
);
register('rename_board_list', 'Rename a board list.', { list_id: id, name: z.string().min(1) }, (args) =>
  query(() => supabase.from('board_lists').update({ name: args.name }).eq('id', args.list_id).select().single())
);
register('delete_board_list', 'Delete a board list.', { list_id: id }, (args) =>
  query(() => supabase.from('board_lists').delete().eq('id', args.list_id).select('id'))
);

register('list_tasks', 'List tasks, including their activity links.', {}, () =>
  query(() => supabase.from('tasks').select('*, task_activities(id, completed, position, activity:activities(*))').order('position').order('id'))
);
register('create_task', 'Create a task.', {
  name: z.string().min(1), description: z.string().optional(), type: z.string(), board_id: id.optional(),
  boards_lists_id: id.optional(), status: z.string().optional(), completion_status: z.number().int().min(0).max(100).optional(),
}, (args) => query(() => supabase.from('tasks').insert({
  name: args.name, description: args.description ?? '', type: args.type, board_id: args.board_id,
  boards_lists_id: args.boards_lists_id, status: args.status ?? 'Initiated', completion_status: args.completion_status ?? 0,
}).select().single()));
register('update_task', 'Update task content or container.', {
  task_id: id, name: z.string().min(1).optional(), description: z.string().optional(), type: z.string().optional(),
  board_id: id.optional(), boards_lists_id: id.optional(),
}, (args) => query(() => supabase.from('tasks').update({
  name: args.name, description: args.description, type: args.type, board_id: args.board_id, boards_lists_id: args.boards_lists_id,
}).eq('id', args.task_id).select().single()));
register('reorder_tasks', 'Set task order within a list.', { task_ids: z.array(id).min(1) }, (args) =>
  query(() => supabase.rpc('reorder_tasks', { task_ids: args.task_ids }))
);
register('delete_task', 'Delete a task.', { task_id: id }, (args) =>
  query(() => supabase.from('tasks').delete().eq('id', args.task_id).select('id'))
);
register('update_task_status', 'Update a task status.', { task_id: id, status: z.string().min(1) }, (args) =>
  query(() => supabase.from('tasks').update({ status: args.status }).eq('id', args.task_id).select().single())
);
register('update_task_completion', 'Update task completion percentage.', { task_id: id, completion_status: z.number().int().min(0).max(100) }, (args) =>
  query(() => supabase.from('tasks').update({ completion_status: args.completion_status }).eq('id', args.task_id).select().single())
);

register('list_task_activities', 'List activities linked to a task.', { task_id: id }, (args) =>
  query(() => supabase.from('task_activities').select('*, activity:activities(*)').eq('task_id', args.task_id).order('position'))
);
register('create_activity', 'Create an activity and link it to a task.', { task_id: id, name: z.string().min(1), data: z.array(z.unknown()).optional(), media: z.array(z.unknown()).optional(), position: z.number().int().nonnegative().optional() }, async (args) => {
  const activity = await query(() => supabase.from('activities').insert({ name: args.name, data: args.data ?? [], media: args.media ?? [] }).select().single()) as { id: number };
  return query(() => supabase.from('task_activities').insert({ task_id: args.task_id, activity_id: activity.id, position: args.position ?? 0, completed: false }).select().single());
});
register('update_activity', 'Update activity content.', { activity_id: id, name: z.string().min(1).optional(), data: z.array(z.unknown()).optional(), media: z.array(z.unknown()).optional() }, (args) =>
  query(() => supabase.from('activities').update({ name: args.name, data: args.data, media: args.media }).eq('id', args.activity_id).select().single())
);
register('remove_activity_from_task', 'Remove an activity link and activity.', { activity_id: id }, (args) =>
  query(() => supabase.from('activities').delete().eq('id', args.activity_id).select('id'))
);
register('toggle_activity_complete', 'Set completion for a task activity link.', { task_activity_id: id, completed: z.boolean() }, (args) =>
  query(() => supabase.from('task_activities').update({ completed: args.completed }).eq('id', args.task_activity_id).select().single())
);

register('list_board_templates', 'List visible board templates.', {}, () =>
  query(() => supabase.from('board_templates').select('*, board_template_lists(*, board_template_tasks(*))').order('created_at', { ascending: false }))
);
register('delete_board_template', 'Delete a board template.', { template_id: id }, (args) =>
  query(() => supabase.from('board_templates').delete().eq('id', args.template_id).select('id'))
);
register('clone_board_template', 'Clone a visible board template.', { template_id: id }, (args) =>
  query(() => supabase.rpc('clone_board_template', { p_template_id: args.template_id }))
);
register('set_template_shareable', 'Set whether a template can be shared.', { template_id: id, is_shareable: z.boolean() }, (args) =>
  query(() => supabase.rpc('set_template_shareable', { p_template_id: args.template_id, p_is_shareable: args.is_shareable }))
);

register('list_collaborators', 'List collaborators for a board.', { board_id: id }, (args) =>
  query(() => supabase.from('board_collaborators').select('*').eq('board_id', args.board_id).order('created_at'))
);
register('add_collaborator', 'Invite a known user to a board.', { board_id: id, user_id: z.string().uuid(), role: z.enum(['viewer', 'editor']) }, (args) =>
  query(() => supabase.from('board_collaborators').insert({ board_id: args.board_id, user_id: args.user_id, role: args.role, status: 'pending' }).select().single())
);
register('update_collaborator_role', 'Change a collaborator role.', { collaborator_id: id, role: z.enum(['viewer', 'editor']) }, (args) =>
  query(() => supabase.from('board_collaborators').update({ role: args.role }).eq('id', args.collaborator_id).select().single())
);
register('remove_collaborator', 'Remove a collaborator.', { collaborator_id: id }, (args) =>
  query(() => supabase.from('board_collaborators').delete().eq('id', args.collaborator_id).select('id'))
);
register('leave_shared_board', 'Leave a shared board.', { board_id: id }, (args) =>
  query(() => supabase.from('board_collaborators').delete().eq('board_id', args.board_id).select('id'))
);
register('list_pending_invitations', 'List pending board invitations for the current user.', {}, () =>
  query(() => supabase.rpc('get_my_pending_direct_invitations'))
);
register('respond_to_invitation', 'Accept or decline a board invitation.', { collaborator_id: id, accept: z.boolean() }, (args) =>
  query(() => supabase.from('board_collaborators').update({ status: args.accept ? 'accepted' : 'declined' }).eq('id', args.collaborator_id).select().single())
);

register('get_profile', 'Get the authenticated user profile.', {}, () =>
  query(() => supabase.from('user_preferences').select('*').maybeSingle())
);
register('update_profile', 'Update the authenticated user profile.', { display_name: z.string().optional(), address: z.string().optional(), avatar_url: z.string().url().optional(), board_sort: z.string().optional() }, (args) =>
  query(() => supabase.from('user_preferences').upsert(args, { onConflict: 'user_id' }).select().single())
);

register('ask_lifeplanner', 'Ask Claude for guidance about available LifePlanner API actions. This never mutates data.', { question: z.string().min(1) }, async ({ question }) => {
  if (!anthropic) return { error: 'ANTHROPIC_API_KEY is not configured' };
  const response = await anthropic.messages.create({
    model: process.env['ANTHROPIC_MODEL'] ?? 'claude-3-5-haiku-latest',
    max_tokens: 512,
    system: 'You are a concise LifePlanner API assistant. Explain which available API action a user should use. Never claim to have performed an action.',
    messages: [{ role: 'user', content: question }],
  });
  return response.content.map((block) => block.type === 'text' ? block.text : '').join('');
});

await server.connect(new StdioServerTransport());
