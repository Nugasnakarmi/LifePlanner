import { inject, Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { Board } from 'src/app/interfaces/board.interface';
import { BoardList } from 'src/app/interfaces/board-list.interface';
import { BoardTemplate } from 'src/app/interfaces/board-template.interface';
import { SupabaseService } from '../supabase/supabase.service';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class BoardAPIService {
  supabaseService = inject(SupabaseService);
  toastRService = inject(ToastrService);
  private storageService = inject(StorageService);

  //TODO - Convert promises to observables
  async addBoard(boardData: Board): Promise<boolean> {
    try {
      let user: User = await this.supabaseService.getUser();
      let { data, error } = await this.supabaseService.supabase
        .from('boards')
        .insert({
          name: boardData.name,
          description: boardData.description,
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
      let { data: boards, error } = await this.supabaseService.supabase
        .from('boards')
        .select('*')
        .eq('user_id', user.id);
      if (error) {
        throw error;
      }

      if (boards) {
        return boards;
      }
    } catch (error) {}
  }

  async deleteBoard(boardId: number): Promise<boolean> {
    try {
      // Fetch all tasks for this board with their activities and media
      const { data: tasks } = await this.supabaseService.supabase
        .from('tasks')
        .select('id, task_activities(activity_id, activity:activities(id, media))')
        .eq('board_id', boardId);

      // Collect all media URLs and activity IDs for cleanup
      const mediaUrls: string[] = [];
      const activityIds: number[] = [];
      for (const task of tasks ?? []) {
        for (const ta of (task as any).task_activities ?? []) {
          const activity = ta.activity;
          if (activity) {
            activityIds.push(activity.id);
            for (const m of activity.media ?? []) {
              if (m.url) mediaUrls.push(m.url);
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
    try {
      const user: User = await this.supabaseService.getUser();
      const { data: boardData, error: boardError } = await this.supabaseService.supabase
        .from('boards')
        .insert({
          name: template.name,
          description: template.description,
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
            name: list.name,
            position: listIndex,
            user_id: user.id,
          })
          .select()
          .single();

        if (listError) {
          throw listError;
        }

        const boardList = listData as BoardList;

        if (list.tasks.length > 0) {
          const taskRows = list.tasks.map((task) => ({
            name: task.name,
            description: task.description,
            type: list.listType,
            completion_status: 0,
            user_id: user.id,
            board_id: board.id,
            boards_lists_id: boardList.id,
          }));

          const { error: tasksError } = await this.supabaseService.supabase
            .from('tasks')
            .insert(taskRows);

          if (tasksError) {
            throw tasksError;
          }
        }
      }

      this.toastRService.success(`Board "${template.name}" created from template`);
      return true;
    } catch (error) {
      // Clean up the partially created board. Tasks must be deleted before the board
      // because tasks.board_id does not have ON DELETE CASCADE.
      if (boardId !== null) {
        await this.supabaseService.supabase.from('tasks').delete().eq('board_id', boardId);
        await this.supabaseService.supabase.from('boards').delete().eq('id', boardId);
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
          name: boardData.name,
          description: boardData.description,
          user_id: boardData.user_id,
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
