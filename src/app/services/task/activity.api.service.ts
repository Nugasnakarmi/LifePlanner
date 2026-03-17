import { inject, Injectable } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from '../supabase/supabase.service';
import { ToastrService } from 'ngx-toastr';
import { Activity, TaskScopedActivity } from 'src/app/interfaces/activity.interface';
import { TaskActivity } from 'src/app/interfaces/task-activity.interface';

@Injectable({
  providedIn: 'root',
})
export class ActivityApiService {
  supabaseService = inject(SupabaseService);
  toastRService = inject(ToastrService);

  async getActivitiesByTaskId(taskId: number): Promise<TaskScopedActivity[]> {
    try {
      const { data, error } = await this.supabaseService.supabase
        .from('task_activities')
        .select('*, activity:activities(*)')
        .eq('task_id', taskId)
        .order('position', { ascending: true });

      if (error) {
        throw error;
      }

      return (data ?? []).map((ta: any) => ({
        ...ta.activity,
        position: ta.position,
        task_activity_id: ta.id,
      }));
    } catch (error) {
      this.toastRService.error(`Failed to load activities: ${error?.message ?? error}`);
      return [];
    }
  }

  async addActivityToTask(
    taskId: number,
    activity: Activity,
    position: number
  ): Promise<{ activity: Activity; taskActivity: TaskActivity } | null> {
    try {
      const user: User = await this.supabaseService.getUser();
      const { data: createdActivity, error: actError } =
        await this.supabaseService.supabase
          .from('activities')
          .insert({
            name: activity.name,
            data: activity.data ?? [],
            media: activity.media ?? [],
            user_id: user.id,
          })
          .select()
          .single();

      if (actError) {
        throw actError;
      }

      const { data: taskActivity, error: taError } =
        await this.supabaseService.supabase
          .from('task_activities')
          .insert({
            task_id: taskId,
            activity_id: createdActivity.id,
            position,
          })
          .select()
          .single();

      if (taError) {
        await this.supabaseService.supabase
          .from('activities')
          .delete()
          .eq('id', createdActivity.id);
        throw taError;
      }

      this.toastRService.success(`Activity "${activity.name}" added to task`);
      return {
        activity: createdActivity as Activity,
        taskActivity: taskActivity as TaskActivity,
      };
    } catch (error) {
      this.toastRService.error(
        `Failed to add activity to task: ${error?.message ?? error}`
      );
      return null;
    }
  }

  async updateActivity(activity: Activity): Promise<boolean> {
    try {
      const { error } = await this.supabaseService.supabase
        .from('activities')
        .update({
          name: activity.name,
          data: activity.data,
          media: activity.media,
        })
        .eq('id', activity.id);

      if (error) {
        throw error;
      }

      this.toastRService.success(
        `Activity "${activity.name}" updated successfully`
      );
      return true;
    } catch (error) {
      this.toastRService.error(
        `Failed to update activity: ${error?.message ?? error}`
      );
      return false;
    }
  }

  async removeActivityFromTask(taskActivityId: number): Promise<boolean> {
    try {
      const { error } = await this.supabaseService.supabase
        .from('task_activities')
        .delete()
        .eq('id', taskActivityId);

      if (error) {
        throw error;
      }

      this.toastRService.success('Activity removed from task');
      return true;
    } catch (error) {
      this.toastRService.error(
        `Failed to remove activity from task: ${error?.message ?? error}`
      );
      return false;
    }
  }

  async deleteActivity(activityId: number): Promise<boolean> {
    try {
      const { error } = await this.supabaseService.supabase
        .from('activities')
        .delete()
        .eq('id', activityId);

      if (error) {
        throw error;
      }

      this.toastRService.success('Activity deleted successfully');
      return true;
    } catch (error) {
      this.toastRService.error(
        `Failed to delete activity: ${error?.message ?? error}`
      );
      return false;
    }
  }
}
