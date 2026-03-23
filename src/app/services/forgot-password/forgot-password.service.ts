import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  toastrService = inject(ToastrService);
  supabaseService = inject(SupabaseService);

  async sendResetEmail(email: string): Promise<boolean> {
    const redirectTo = `${window.location.origin}/resetPassword`;
    const { error } =
      await this.supabaseService.supabase.auth.resetPasswordForEmail(email, {
        redirectTo,
      });

    if (error) {
      this.toastrService.error(error.message);
      return false;
    }

    this.toastrService.success('Check your email for a password reset link');
    return true;
  }
}
