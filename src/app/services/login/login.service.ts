import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
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

  async loginEmailPassword(loginCredentials): Promise<any> {
    // Create an anonymous credential

    try {
      let { data, error } = await this.supabase.auth.signInWithPassword({
        email: loginCredentials.email,
        password: loginCredentials.password,
      });

      console.log(data);
      this.toastRService.success('Login successful', 'Success');
    } catch (err) {
      console.error('Failed to log in', err);
    }
  }
}
