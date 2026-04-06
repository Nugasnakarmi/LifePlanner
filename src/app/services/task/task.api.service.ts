import { inject, Injectable } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from '../supabase/supabase.service';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskStatus } from 'src/app/enums/task-status.enum';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from '../storage/storage.service';
import { InputSanitizerService } from '../sanitizer/input-sanitizer.service';

@Injectable({
  providedIn: 'root',
})
export class TaskAPIService {
  supabaseService = inject(SupabaseService);
  toastRService = inject(ToastrService);
  private storageService = inject(StorageService);
  private sanitizer = inject(InputSanitizerService);

  async addTask(taskData: IdeaTask): Promise<IdeaTask | null> {
    try {
      let user: User = await this.supabaseService.getUser();
      let { data, error } = await this.supabaseService.supabase
        .from('tasks')
        .insert({
          name: this.sanitizer.sanitize(taskData.name),
          description: this.sanitizer.sanitize(taskData.description),
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
        .select('*, task_activities(id, completed, position, activity:activities(id, name, media))')
        .eq('user_id', user.id);
      if (error) {
        throw error;
      }

      if (tasks) {
        return tasks.map((task: any) => {
          const { task_activities, ...rest } = task;
          return {
            ...rest,
            activities: (task_activities ?? [])
              .sort((a: any, b: any) => (a.position ?? 0) - (b.position ?? 0))
              .map((ta: any) => ({
                id: ta.activity?.id,
                name: ta.activity?.name ?? '',
                media: ta.activity?.media ?? [],
                task_activity_id: ta.id,
                position: ta.position ?? 0,
                completed: ta.completed ?? false,
              })),
          };
        });
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
      // Fetch all activities linked to this task with their media
      const {
        data: taskActivities,
        error: taskActivitiesError,
      } = await this.supabaseService.supabase
        .from('task_activities')
        .select('activity_id, activity:activities(id, media)')
        .eq('task_id', id);

      if (taskActivitiesError) {
        throw taskActivitiesError;
      }

      // Collect media URLs (excluding template-owned) and activity IDs for cleanup
      const mediaUrls: string[] = [];
      const activityIds: number[] = [];
      for (const ta of taskActivities ?? []) {
        const activity = (ta as any).activity;
        if (activity) {
          activityIds.push(activity.id);
          for (const m of activity.media ?? []) {
            // Skip template-owned media — shared with the board template
            if (m.url && !m.fromTemplate) mediaUrls.push(m.url);
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

      // Delete the task
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
      return false;
    }
  }

  async editTask(taskData: IdeaTask): Promise<boolean> {
    try {
      let { data, error } = await this.supabaseService.supabase
        .from('tasks')
        .update({
          name: this.sanitizer.sanitize(taskData.name),
          description: this.sanitizer.sanitize(taskData.description),
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

  async updateCompletionStatus(taskId: number, completionStatus: number): Promise<boolean> {
    try {
      let { error } = await this.supabaseService.supabase
        .from('tasks')
        .update({ completion_status: completionStatus })
        .eq('id', taskId);

      if (error) {
        throw error;
      }

      return true;
    } catch (error) {
      this.toastRService.error(`Failed to update task completion: ${error.message}`);
      return false;
    }
  }
}
