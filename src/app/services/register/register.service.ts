import { inject, Injectable } from '@angular/core';
import * as Realm from 'realm-web';
import { environment } from 'src/environments/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  toastrService = inject(ToastrService);
  supabase: SupabaseClient;
  constructor() {
    const supabaseKey = environment.SUPABASE_KEY;
    this.supabase = createClient(environment.SUPABASE_URL, supabaseKey);
  }

  async registerUser(email, password): Promise<any> {
    let { data, error } = await this.supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (data) {
      this.toastrService.success(
        `$Registration successful for {data.user.email}`
      );
    }
    if (error) {
      this.toastrService.error(error.message);
    }
  }

  // async confirmUser(token: string, tokenId: string) {
  //   await this.app.emailPasswordAuth.confirmUser({ token, tokenId });
  // }
}
