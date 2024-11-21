import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
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

@Component({
    imports: [
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
    ],
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
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
    this.password.valueChanges.subscribe(() => {
      this.confirmPassword.updateValueAndValidity();
    });
  }

  public static matchValues(
    matchTo: string // name of the control to match to
  ): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
  }
  getErrorMessage(type) {
    if (type == 'email') {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }

      return this.email.hasError('email') ? 'Not a valid email' : '';
    } else if (type == 'password') {
      if (this.password.hasError('required')) {
        return 'Password must be entered';
      }
    } else if (type == 'confirmPassword') {
      if (this.confirmPassword.hasError('required')) {
        return 'Please type your password again to confirm';
      } else {
        return 'Passwords do not match';
      }
    }
    return 'You must enter a value';
  }

  async register(): Promise<void> {
    console.log(
      'valid registration for',
      this.email.value,
      '-',
      this.password.value
    );

    this.userDetails = await this.registerService.registerUser(
      this.email.value,
      this.confirmPassword.value
    );
    if (this.userDetails.user) {
      this.registrationSuccess = true;
    }
  }
  closeLoginDialog() {
    this.registerDialogRef.close();
  }
}
