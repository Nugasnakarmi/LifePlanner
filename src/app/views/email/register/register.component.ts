import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormArray,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';
import { RegisterService } from 'src/app/services/register/register.service';
import { Session, User } from '@supabase/supabase-js';
import { UtilityService } from 'src/app/utility/utility.service';

@Component({
  imports: [
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  fb = new FormBuilder();
  passwordForm = null;
  userDetails:
    | {
        user: User | null;
        session: Session | null;
      }
    | {
        user: null;
        session: null;
      } = null;
  hide = true;
  toastRService = inject(ToastrService);
  registerService = inject(RegisterService);
  private registerDialogRef: MatDialogRef<RegisterComponent>;
  registrationSuccess = false;
  ngOnInit(): void {
    this.passwordForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      { validators: UtilityService.confirmPasswordValidator }
    );
  }

  passwordsMatchValidator(formGroup: any) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatching: true };
  }

  getErrorMessage(formControlName): string {
    const email = this.passwordForm.get('email');
    const password = this.passwordForm.get('password');
    const confirmPassword = this.passwordForm.get('confirmPassword');

    if (formControlName == 'email') {
      if (email.hasError('required')) {
        return 'You must enter a value';
      }

      return email.hasError('email') ? 'Not a valid email' : '';
    } else if (formControlName == 'password') {
      if (password.hasError('required')) {
      }
    } else if (formControlName == 'confirmPassword') {
      if (confirmPassword.hasError('required')) {
        return 'Please type your password again to confirm';
      } else {
        return 'Password must be entered';
      }
    } else if (formControlName == 'PasswordNoMatch') {
      return 'Passwords do not match';
    }
    return 'You must enter a value';
  }

  async register(): Promise<void> {
    const email = this.passwordForm.get('email');
    const password = this.passwordForm.get('password');
    const confirmPassword = this.passwordForm.get('confirmPassword');

    if (this.passwordForm.valid) {
      this.userDetails = await this.registerService.registerUser(
        email.value,
        confirmPassword.value
      );
      if (this.userDetails.user) {
        this.registrationSuccess = true;
      }
    }
  }

  closeLoginDialog() {
    this.registerDialogRef.close();
  }
}
