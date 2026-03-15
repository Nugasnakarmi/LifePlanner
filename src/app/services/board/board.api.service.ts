import { inject, Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { Board } from 'src/app/interfaces/board.interface';
import { BoardTemplate } from 'src/app/interfaces/board-template.interface';
import { SupabaseService } from '../supabase/supabase.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class BoardAPIService {
  supabaseService = inject(SupabaseService);
  toastRService = inject(ToastrService);

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
        });
      if (data) {
        console.log('Board added:', data);
      }
      if (error) {
        throw error;
      }
      this.toastRService.success(`Board ${boardData.name} added successfully`);
      return true;
    } catch (error) {
      this.toastRService.error(`Failed to add board : ${error.message}`);
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
      // Delete all tasks for this board first
      const { error: tasksError } = await this.supabaseService.supabase
        .from('tasks')
        .delete()
        .eq('board_id', boardId);
      if (tasksError) {
        throw tasksError;
      }

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

      // Flatten tasks from all lists; each list's listType maps to the task's type column
      const taskRows = (template.lists ?? []).flatMap((list) =>
        list.tasks.map((task) => ({
          name: task.name,
          description: task.description,
          type: list.listType,
          completion_status: 0,
          user_id: user.id,
          board_id: board.id,
        }))
      );

      if (taskRows.length > 0) {
        const { error: tasksError } = await this.supabaseService.supabase
          .from('tasks')
          .insert(taskRows);

        if (tasksError) {
          throw tasksError;
        }
      }

      this.toastRService.success(`Board "${template.name}" created from template`);
      return true;
    } catch (error) {
      this.toastRService.error(`Failed to create board from template: ${error.message}`);
      return false;
    }
  }

  async editBoard(boardData: Board): Promise<unknown> {
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

      return data;
    } catch (error) {
      return false;
    }
  }
}
