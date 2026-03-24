import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SupabaseService } from 'src/app/services/supabase/supabase.service';
import { UtilityService } from 'src/app/utility/utility.service';

@Component({
  imports: [
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  hide = true;
  resetPasswordForm: FormGroup;
  supabaseService = inject(SupabaseService);
  toastrService = inject(ToastrService);
  router = inject(Router);

  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup(
      {
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      { validators: UtilityService.confirmPasswordValidator }
    );
  }

  getErrorMessage(controlName: string): string {
    const control = this.resetPasswordForm.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('minlength')) {
      return 'Password must be at least 8 characters';
    }
    return '';
  }

  async confirmPassword(): Promise<void> {
    if (this.resetPasswordForm.valid) {
      const newPassword = this.resetPasswordForm.get('password')?.value;
      if (!newPassword) {
        return;
      }
      const { error } = await this.supabaseService.supabase.auth.updateUser({
        password: newPassword,
      });
      if (error) {
        this.toastrService.error(error.message);
      } else {
        this.toastrService.success('Password updated successfully');
        this.router.navigate(['/']);
      }
    }
  }
}
