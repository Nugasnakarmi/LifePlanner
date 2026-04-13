import { inject, Injectable } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from '../supabase/supabase.service';
import { ToastrService } from 'ngx-toastr';
import { BoardList } from 'src/app/interfaces/board-list.interface';
import { StorageService } from '../storage/storage.service';
import { InputSanitizerService } from '../sanitizer/input-sanitizer.service';

@Injectable({
  providedIn: 'root',
})
export class BoardListApiService {
  supabaseService = inject(SupabaseService);
  toastRService = inject(ToastrService);
  private storageService = inject(StorageService);
  private sanitizer = inject(InputSanitizerService);

  async getAllListsForUser(): Promise<BoardList[]> {
    try {
      const { data, error } = await this.supabaseService.supabase
        .from('board_lists')
        .select('*')
        .order('board_id', { ascending: true })
        .order('position', { ascending: true });

      if (error) {
        throw error;
      }

      return data ?? [];
    } catch (error) {
      this.toastRService.error(`Failed to load lists: ${error?.message ?? error}`);
      return [];
    }
  }

  async getListsByBoardId(boardId: number): Promise<BoardList[]> {
    try {
      const { data, error } = await this.supabaseService.supabase
        .from('board_lists')
        .select('*')
        .eq('board_id', boardId)
        .order('position', { ascending: true });

      if (error) {
        throw error;
      }

      return data ?? [];
    } catch (error) {
      this.toastRService.error(`Failed to load lists: ${error?.message ?? error}`);
      return [];
    }
  }

  async addList(boardId: number, name: string, position: number): Promise<BoardList | null> {
    try {
      const user: User = await this.supabaseService.getUser();
      const sanitizedName = this.sanitizer.sanitize(name);
      const { data, error } = await this.supabaseService.supabase
        .from('board_lists')
        .insert({
          board_id: boardId,
          name: sanitizedName,
          position,
          user_id: user.id,
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      this.toastRService.success(`List "${name}" added successfully`);
      return data as BoardList;
    } catch (error) {
      this.toastRService.error(`Failed to add list: ${error?.message ?? error}`);
      return null;
    }
  }

  async updateListName(listId: number, name: string): Promise<BoardList | null> {
    try {
      const sanitizedName = this.sanitizer.sanitize(name);
      const { data, error } = await this.supabaseService.supabase
        .from('board_lists')
        .update({ name: sanitizedName })
        .eq('id', listId)
        .select()
        .single();

      if (error) {
        throw error;
      }

      this.toastRService.success(`List renamed to "${name}"`);
      return data as BoardList;
    } catch (error) {
      this.toastRService.error(`Failed to rename list: ${error?.message ?? error}`);
      return null;
    }
  }

  async deleteList(listId: number): Promise<boolean> {
    try {
      // Fetch all tasks in this list with their activities and media
      const { data: tasks, error: tasksSelectError } = await this.supabaseService.supabase
        .from('tasks')
        .select('id, task_activities(activity_id, activity:activities(id, media))')
        .eq('boards_lists_id', listId);

      if (tasksSelectError) {
        throw tasksSelectError;
      }

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

      // Delete all tasks in this list
      const { error: tasksError } = await this.supabaseService.supabase
        .from('tasks')
        .delete()
        .eq('boards_lists_id', listId);

      if (tasksError) {
        throw tasksError;
      }

      const { error } = await this.supabaseService.supabase
        .from('board_lists')
        .delete()
        .eq('id', listId);

      if (error) {
        throw error;
      }

      this.toastRService.success('List deleted successfully');
      return true;
    } catch (error) {
      this.toastRService.error(`Failed to delete list: ${error?.message ?? error}`);
      return false;
    }
  }
}
