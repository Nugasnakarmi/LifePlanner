import { inject, Injectable } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from '../supabase/supabase.service';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskStatus } from 'src/app/enums/task-status.enum';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class TaskAPIService {
  supabaseService = inject(SupabaseService);
  toastRService = inject(ToastrService);

  async addTask(taskData: IdeaTask): Promise<IdeaTask | null> {
    try {
      let user: User = await this.supabaseService.getUser();
      let { data, error } = await this.supabaseService.supabase
        .from('tasks')
        .insert({
          name: taskData.name,
          description: taskData.description,
          type: taskData.type,
          completion_status: taskData.completion_status,
          status: taskData.status ?? TaskStatus.Initiated,
          user_id: user.id,
          board_id: taskData.board_id,
          boards_lists_id: taskData.boards_lists_id,
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      this.toastRService.success(`Task ${taskData.name} added successfully`);
      return data as IdeaTask;
    } catch (error) {
      this.toastRService.error(`Failed to add task: ${error.message}`);
      return null;
    }
  }

  async getTasks(): Promise<IdeaTask[]> {
    try {
      let user: User = await this.supabaseService.getUser();
      let { data: tasks, error } = await this.supabaseService.supabase
        .from('tasks')
        .select('*')
        .eq('user_id', user.id);
      if (error) {
        throw error;
      }

      if (tasks) {
        return tasks;
      }
    } catch (error) {
      this.toastRService.error(`Failed to get tasks: ${error.message}`);
    }
  }

  async updateTaskContainer(taskData: Partial<IdeaTask>): Promise<boolean> {
    try {
      let user: User = await this.supabaseService.getUser();
      let { data, error } = await this.supabaseService.supabase
        .from('tasks')
        .update({
          type: taskData.type,
          boards_lists_id: taskData.boards_lists_id,
        })
        .eq('id', taskData.id);

      if (error) {
        throw error;
      }

      return true;
    } catch (error) {
      this.toastRService.error(`Failed to update task : ${error.message}`);
    }
  }

  async deleteTask(id: number): Promise<boolean> {
    try {
      let { data, error } = await this.supabaseService.supabase
        .from('tasks')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }
      this.toastRService.success(`Task deleted successfully`);

      return true;
    } catch (error) {
      this.toastRService.error(`Failed to delete task : ${error.message}`);
    }
  }

  async editTask(taskData: IdeaTask): Promise<boolean> {
    try {
      let { data, error } = await this.supabaseService.supabase
        .from('tasks')
        .update({
          name: taskData.name,
          description: taskData.description,
          type: taskData.type,
        })
        .eq('id', taskData.id);

      if (error) {
        throw error;
      }

      this.toastRService.success(
        `Task ${taskData.name} was updated successfully`
      );
      return true;
    } catch (error) {
      this.toastRService.error(`Failed to update task : ${error.message}`);
    }
  }

  async updateTaskStatus(taskId: number, status: TaskStatus): Promise<boolean> {
    try {
      let { error } = await this.supabaseService.supabase
        .from('tasks')
        .update({ status })
        .eq('id', taskId);

      if (error) {
        throw error;
      }

      this.toastRService.success(`Task status updated to "${status}"`);
      return true;
    } catch (error) {
      this.toastRService.error(`Failed to update task status: ${error.message}`);
      return false;
    }
  }
}
