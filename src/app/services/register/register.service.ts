import { inject, Injectable } from '@angular/core';
import { Session, User } from '@supabase/supabase-js';
import { ToastrService } from 'ngx-toastr';
import { SupabaseService } from '../supabase/supabase.service';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  toastrService = inject(ToastrService);
  supabaseService = inject(SupabaseService);
  constructor() {}

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
    let { data, error } = await this.supabaseService.supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      this.toastrService.error(error.message);
      return { user: null, session: null };
    }

    if (data?.user) {
      if (!data.user.identities?.length) {
        this.toastrService.error('An account with this email already exists.');
        return { user: null, session: null };
      }
      this.toastrService.success(
        `Registration successful for ${data.user.email}`
      );
      return data;
    }

    return { user: null, session: null };
  }

  // async confirmUser(token: string, tokenId: string) {
  //   await this.app.emailPasswordAuth.confirmUser({ token, tokenId });
  // }
}
