import { inject, Injectable } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from '../supabase/supabase.service';
import { ToastrService } from 'ngx-toastr';
import { BoardList } from 'src/app/interfaces/board-list.interface';

@Injectable({
  providedIn: 'root',
})
export class BoardListApiService {
  supabaseService = inject(SupabaseService);
  toastRService = inject(ToastrService);

  async getAllListsForUser(): Promise<BoardList[]> {
    try {
      const user: User = await this.supabaseService.getUser();
      const { data, error } = await this.supabaseService.supabase
        .from('board_lists')
        .select('*')
        .eq('user_id', user.id)
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
      const user: User = await this.supabaseService.getUser();
      const { data, error } = await this.supabaseService.supabase
        .from('board_lists')
        .select('*')
        .eq('board_id', boardId)
        .eq('user_id', user.id)
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
      const { data, error } = await this.supabaseService.supabase
        .from('board_lists')
        .insert({
          board_id: boardId,
          name,
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
      const user: User = await this.supabaseService.getUser();
      const { data, error } = await this.supabaseService.supabase
        .from('board_lists')
        .update({ name })
        .eq('id', listId)
        .eq('user_id', user.id)
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
      const user: User = await this.supabaseService.getUser();
      const { error } = await this.supabaseService.supabase
        .from('board_lists')
        .delete()
        .eq('id', listId)
        .eq('user_id', user.id);

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
