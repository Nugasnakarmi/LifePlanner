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

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  supabaseUrl = environment.SUPABASE_URL;
  supabase: SupabaseClient;
  toastRService = inject(ToastrService);

  constructor() {
    const supabaseKey = environment.SUPABASE_KEY;
    this.supabase = createClient(this.supabaseUrl, supabaseKey);
  }

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
      const { data, error } = await this.supabase.auth.signInWithPassword({
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
