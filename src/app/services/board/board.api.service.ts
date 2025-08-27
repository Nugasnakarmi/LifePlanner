import { inject, Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { Board } from 'src/app/interfaces/board.interface';
import { SupabaseService } from '../supabase/supabase.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class BoardAPIService {
  supabaseService = inject(SupabaseService);
  toastRService = inject(ToastrService);

<<<<<<< HEAD
  //TODO - Convert promises to observables
=======
>>>>>>> main
  async addBoard(boardData: Board): Promise<boolean> {
    try {
      let user: User = await this.supabaseService.getUser();
      let { data, error } = await this.supabaseService.supabase
        .from('boards')
        .insert({
          name: boardData.name,
          description: boardData.description,
          user_id: user.id,
        });
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
