import { inject, Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { Board } from 'src/app/interfaces/board.interface';
import { BoardList } from 'src/app/interfaces/board-list.interface';
import { BoardTemplate } from 'src/app/interfaces/board-template.interface';
import { SupabaseService } from '../supabase/supabase.service';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from '../storage/storage.service';
import { InputSanitizerService } from '../sanitizer/input-sanitizer.service';

@Injectable({
  providedIn: 'root',
})
export class BoardAPIService {
  supabaseService = inject(SupabaseService);
  toastRService = inject(ToastrService);
  private storageService = inject(StorageService);
  private sanitizer = inject(InputSanitizerService);

  //TODO - Convert promises to observables
  async addBoard(boardData: Board): Promise<boolean> {
    try {
      let user: User = await this.supabaseService.getUser();
      let { data, error } = await this.supabaseService.supabase
        .from('boards')
        .insert({
          name: this.sanitizer.sanitize(boardData.name),
          description: this.sanitizer.sanitize(boardData.description),
          user_id: user.id,
          created_at: new Date().toISOString(),
        })
        .select()
        .single();
      if (error) {
        throw error;
      }
      if (!data) {
        throw new Error('Board was not returned after insert');
      }
      this.toastRService.success(`Board ${boardData.name} added successfully`);
      return true;
    } catch (error) {
      this.toastRService.error(`Failed to add board : ${error?.message ?? String(error)}`);
      return false;
    }
  }

  async getBoards(): Promise<Board[]> {
    try {
      let user: User = await this.supabaseService.getUser();

      // Fetch own boards
      let { data: ownBoards, error: ownError } = await this.supabaseService.supabase
        .from('boards')
        .select('*')
        .eq('user_id', user.id);
      if (ownError) {
        throw ownError;
      }

      // Fetch boards shared with the user via accepted collaboration
      let { data: sharedBoards, error: sharedError } = await this.supabaseService.supabase
        .from('board_collaborators')
        .select('board:boards(*)')
        .eq('user_id', user.id)
        .eq('status', 'accepted');
      if (sharedError) {
        throw sharedError;
      }

      const shared = (sharedBoards ?? [])
        .map((row: any) => row.board as Board)
        .filter(Boolean);

      // Merge and deduplicate by id
      const boardMap = new Map<number, Board>();
      for (const b of [...(ownBoards ?? []), ...shared]) {
        if (b.id != null) {
          boardMap.set(b.id, b);
        }
      }

      return Array.from(boardMap.values());
    } catch (error) {}
  }

  async deleteBoard(boardId: number): Promise<boolean> {
    try {
      // Fetch all tasks for this board with their activities and media
      const { data: tasks, error: tasksFetchError } = await this.supabaseService.supabase
        .from('tasks')
        .select('id, task_activities(activity_id, activity:activities(id, media))')
        .eq('board_id', boardId);

      if (tasksFetchError) {
        throw tasksFetchError;
      }

      // Collect all media URLs (excluding template-owned) and activity IDs for cleanup
      const mediaUrls: string[] = [];
      const activityIds: number[] = [];
      for (const task of tasks ?? []) {
        for (const ta of (task as any).task_activities ?? []) {
          const activity = ta.activity;
          if (activity) {
            activityIds.push(activity.id);
            for (const m of activity.media ?? []) {
              // Skip template-owned media — shared with the board template
              if (m.url && !m.fromTemplate) mediaUrls.push(m.url);
            }
          }
        }
      }

      // Delete media files from storage (best-effort)
      if (mediaUrls.length > 0) {
        await this.storageService.deleteFiles(mediaUrls);
      }

      // Delete activities (CASCADE removes task_activities)
      if (activityIds.length > 0) {
        const { error: actError } = await this.supabaseService.supabase
          .from('activities')
          .delete()
          .in('id', activityIds);
        if (actError) throw actError;
      }

      // Delete all tasks for this board
      const { error: tasksError } = await this.supabaseService.supabase
        .from('tasks')
        .delete()
        .eq('board_id', boardId);
      if (tasksError) {
        throw tasksError;
      }

      // Delete the board (CASCADE deletes board_lists)
      const { error } = await this.supabaseService.supabase
        .from('boards')
        .delete()
        .eq('id', boardId);
      if (error) {
        throw error;
      }

      this.toastRService.success('Board deleted successfully');
      return true;
    } catch (error) {
      this.toastRService.error(`Failed to delete board: ${error?.message ?? error}`);
      return false;
    }
  }

  async addBoardFromTemplate(template: BoardTemplate): Promise<boolean> {
    let boardId: number | null = null;
    // Track every activity ID we insert so the cleanup path can delete them
    // even if the task_activities link was never created (orphan guard).
    const insertedActivityIds: number[] = [];
    try {
      const user: User = await this.supabaseService.getUser();
      const { data: boardData, error: boardError } = await this.supabaseService.supabase
        .from('boards')
        .insert({
          name: this.sanitizer.sanitize(template.name),
          description: this.sanitizer.sanitize(template.description),
          user_id: user.id,
          created_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (boardError) {
        throw boardError;
      }

      const board = boardData as Board;
      boardId = board.id;

        // For each template list, create a board_list column then insert its tasks.
        for (const [listIndex, list] of (template.lists ?? []).entries()) {
          const { data: listData, error: listError } = await this.supabaseService.supabase
            .from('board_lists')
            .insert({
              board_id: board.id,
              name: this.sanitizer.sanitize(list.name),
              position: listIndex,
              user_id: user.id,
            })
            .select()
            .single();

          if (listError) {
            throw listError;
          }

          const boardList = listData as BoardList;

          if (list.tasks.length === 0) continue;

          // Bulk-insert all tasks in this list and capture their IDs.
          // PostgreSQL's multi-row INSERT...RETURNING preserves insertion order,
          // so insertedTasks[i].id corresponds to list.tasks[i].
          const taskRows = list.tasks.map((task) => ({
            name: this.sanitizer.sanitize(task.name),
            description: this.sanitizer.sanitize(task.description),
            type: list.listType,
            completion_status: 0,
            user_id: user.id,
            board_id: board.id,
            boards_lists_id: boardList.id,
          }));

          const { data: insertedTasks, error: tasksError } = await this.supabaseService.supabase
            .from('tasks')
            .insert(taskRows)
            .select('id');

          if (tasksError) throw tasksError;

          // For each task that has template activities, materialise them as real
          // activities + task_activity bridge rows using batch inserts.
          for (let taskIdx = 0; taskIdx < list.tasks.length; taskIdx++) {
            const task = list.tasks[taskIdx];
            const taskId = (insertedTasks as any[])[taskIdx].id as number;
            const templateActivities = task.activities ?? [];

            if (templateActivities.length === 0) continue;

            // Batch-insert all activities for this task.
            // Media URLs are shared with the template; mark them so the delete
            // flow skips storage cleanup for template-owned files.
            const activityRows = templateActivities.map((a) => ({
              name: this.sanitizer.sanitize(a.name),
              data: this.sanitizer.sanitizeDataFields(a.data) ?? [],
              media: (a.media ?? []).map((m) => ({ ...m, fromTemplate: true })),
              user_id: user.id,
            }));

            const { data: insertedActivities, error: actError } = await this.supabaseService.supabase
              .from('activities')
              .insert(activityRows)
              .select('id');

            if (actError) throw actError;

            // Record IDs immediately so cleanup can remove them even if the
            // following task_activities insert fails.
            insertedActivityIds.push(...(insertedActivities as any[]).map((a) => a.id as number));

            // Batch-insert all task_activity bridge rows.
            const taskActivityRows = (insertedActivities as any[]).map((act, actIdx) => ({
              task_id: taskId,
              activity_id: act.id,
              position: actIdx,
              completed: false,
            }));

            const { error: taError } = await this.supabaseService.supabase
              .from('task_activities')
              .insert(taskActivityRows);

            if (taError) throw taError;
          }
        }

      this.toastRService.success(`Board "${template.name}" created from template`);
      return true;
    } catch (error) {
      // Best-effort cleanup of the partially created board.
      // Activities and tasks must be deleted before the board because their
      // FKs do not have ON DELETE CASCADE.
      if (boardId !== null) {
        try {
          // Delete all activities we managed to insert (linked or not).
          if (insertedActivityIds.length > 0) {
            const { error: deleteActivitiesError } = await this.supabaseService.supabase
              .from('activities')
              .delete()
              .in('id', insertedActivityIds);
            if (deleteActivitiesError) {
              console.error('Cleanup: failed to delete activities for board', boardId, deleteActivitiesError);
            }
          }

          const { error: deleteTasksError } = await this.supabaseService.supabase
            .from('tasks')
            .delete()
            .eq('board_id', boardId);
          if (deleteTasksError) {
            console.error('Cleanup: failed to delete tasks for board', boardId, deleteTasksError);
          }

          const { error: deleteBoardError } = await this.supabaseService.supabase
            .from('boards')
            .delete()
            .eq('id', boardId);
          if (deleteBoardError) {
            console.error('Cleanup: failed to delete board', boardId, deleteBoardError);
          }
        } catch (cleanupError) {
          console.error('Cleanup: unexpected error for board', boardId, cleanupError);
        }
      }
      this.toastRService.error(`Failed to create board from template: ${error?.message ?? String(error)}`);
      return false;
    }
  }

  async editBoard(boardData: Board): Promise<Board | null> {
    try {
      let { data, error } = await this.supabaseService.supabase
        .from('boards')
        .update({
          name: this.sanitizer.sanitize(boardData.name),
          description: this.sanitizer.sanitize(boardData.description),
        })
        .eq('id', boardData.id)
        .select('*')
        .limit(1)
        .single();
      if (error) {
        throw error;
      }

      return data as Board;
    } catch (error) {
      this.toastRService.error(`Failed to update board: ${error?.message ?? String(error)}`);
      return null;
    }
  }
}
