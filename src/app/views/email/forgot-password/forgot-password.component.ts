import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/services/forgot-password/forgot-password.service';

@Component({
  imports: [MatFormFieldModule, MatButtonModule, ReactiveFormsModule, MatInputModule],
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  emailSent = false;
  forgotPasswordService = inject(ForgotPasswordService);
  router = inject(Router);

  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'Email is required';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  async sendResetEmail(): Promise<void> {
    if (this.email.valid) {
      const success = await this.forgotPasswordService.sendResetEmail(
        this.email.value
      );
      if (success) {
        this.emailSent = true;
      }
    }
  }

  backToLogin(): void {
    this.router.navigate(['/']);
  }
}
