import { inject, Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login/login.service';
import { SupabaseService } from '../supabase/supabase.service';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { IdeaType } from 'src/app/enums/idea-type.enum';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  supabaseService = inject(SupabaseService);
  toastRService = inject(ToastrService);

  async addTask(taskData: IdeaTask): Promise<boolean> {
    try {
      let user: User = await this.supabaseService.getUser();
      let { data, error } = await this.supabaseService.supabase
        .from('tasks')
        .insert({
          name: taskData.name,
          description: taskData.description,
          type: taskData.type,
          completion_status: taskData.completion_status,
          user_id: user.id,
        });

      if (error) {
        throw error;
      }

      this.toastRService.success(`Task ${taskData.name} added successfully}`);
      return true;
    } catch (error) {
      this.toastRService.error(`Failed to add task : ${error.message}`);
    }
  }

  async getTasks(): Promise<any> {
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
      this.toastRService.error(`Failed to add task : ${error.message}`);
    }
  }
}
