import { inject, Injectable } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from '../supabase/supabase.service';
import { ToastrService } from 'ngx-toastr';
import { Activity, TaskScopedActivity } from 'src/app/interfaces/activity.interface';
import { TaskActivity } from 'src/app/interfaces/task-activity.interface';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class ActivityApiService {
  supabaseService = inject(SupabaseService);
  toastRService = inject(ToastrService);
  private storageService = inject(StorageService);

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
        completed: ta.completed ?? false,
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
            completed: false,
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

  async removeActivityFromTask(taskActivityId: number, activityId: number): Promise<boolean> {
    try {
      // Verify the bridge row exists and matches the provided activityId
      const { data: taskActivity, error: taskActivityError } = await this.supabaseService.supabase
        .from('task_activities')
        .select('activity_id')
        .eq('id', taskActivityId)
        .single();

      if (taskActivityError) {
        throw taskActivityError;
      }

      if (!taskActivity || taskActivity.activity_id !== activityId) {
        throw new Error('Mismatched activity for the given task activity link');
      }

      // Fetch the activity to get media URLs before deletion
      const { data: activity, error: fetchError } = await this.supabaseService.supabase
        .from('activities')
        .select('media')
        .eq('id', activityId)
        .single();

      if (fetchError) {
        throw fetchError;
      }

      // Delete media files from storage (best-effort)
      const mediaUrls = (activity?.media ?? [])
        .map((m: any) => m.url)
        .filter(Boolean);
      if (mediaUrls.length > 0) {
        await this.storageService.deleteFiles(mediaUrls);
      }

      // Delete the activity itself (CASCADE removes task_activities)
      const { error } = await this.supabaseService.supabase
        .from('activities')
        .delete()
        .eq('id', activityId);

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
      // Fetch the activity to get media URLs before deletion
      const { data: activity, error: selectError } = await this.supabaseService.supabase
        .from('activities')
        .select('media')
        .eq('id', activityId)
        .single();

      if (selectError) {
        throw selectError;
      }

      // Delete media files from storage (best-effort)
      const mediaUrls = (activity?.media ?? [])
        .map((m: any) => m.url)
        .filter(Boolean);
      if (mediaUrls.length > 0) {
        await this.storageService.deleteFiles(mediaUrls);
      }

      // Delete the activity (CASCADE removes task_activities)
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

  async toggleActivityComplete(taskActivityId: number, completed: boolean): Promise<boolean> {
    try {
      const { error } = await this.supabaseService.supabase
        .from('task_activities')
        .update({ completed })
        .eq('id', taskActivityId);

      if (error) {
        throw error;
      }

      return true;
    } catch (error) {
      this.toastRService.error(
        `Failed to update activity completion: ${error?.message ?? error}`
      );
      return false;
    }
  }
}

