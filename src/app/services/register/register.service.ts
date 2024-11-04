import { inject, Injectable } from '@angular/core';
import * as Realm from 'realm-web';
import { environment } from 'src/environments/environment';
import {
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
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

  async registerUser(
    email,
    password
  ): Promise<
    | {
        user: User | null;
        session: Session | null;
      }
    | {
        user: null;
        session: null;
      }
  > {
    let { data, error } = await this.supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      this.toastrService.error(error.message);
      return;
    }

    if (data) {
      this.toastrService.success(
        `$Registration successful for {data.user.email}`
      );
      return data;
    }
  }

  // async confirmUser(token: string, tokenId: string) {
  //   await this.app.emailPasswordAuth.confirmUser({ token, tokenId });
  // }
}
