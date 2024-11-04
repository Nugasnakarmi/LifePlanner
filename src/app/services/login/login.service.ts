import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  AuthTokenResponsePassword,
  createClient,
  Session,
  SupabaseClient,
  User,
  WeakPassword,
} from '@supabase/supabase-js';
import { ToastrService } from 'ngx-toastr';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  toastRService = inject(ToastrService);
  supabaseService = inject(SupabaseService);
  constructor() {}

  async loginEmailPassword(loginCredentials): Promise<
    | {
        user: User;
        session: Session;
        weakPassword?: WeakPassword;
      }
    | {
        user: null;
        session: null;
        weakPassword?: null;
      }
  > {
    try {
      const { data, error } =
        await this.supabaseService.supabase.auth.signInWithPassword({
          email: loginCredentials.email,
          password: loginCredentials.password,
        });
      console.log(data);
      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      this.toastRService.error(`Login error : ${error.message}`, 'Failure');
    }
  }
}
