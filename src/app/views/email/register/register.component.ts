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

@Component({
  standalone: true,
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
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  userDetails = null;
  hide = true;
  toastRService = inject(ToastrService);

  /**
   * Creates a new instance of the RegisterComponent class.
   * @param registerService - The service that handles the registration of a user.
   * @param registerDialogRef - The reference to the dialog that this component is part of.
   */
  /******  4eb6bfff-75fd-4594-a325-972928d7bb89  *******/
  constructor(
    private registerService: RegisterService,
    private registerDialogRef: MatDialogRef<RegisterComponent>
  ) {}

  /**
   * Listen for changes in the password input and run the validation of the
   * confirmPassword input. This is done to allow the user to see the correct
   * error message when the password and confirm password do not match, even if
   * the user hasn't left the confirmPassword input.
/******  cf60718e-340b-4c36-a1f7-db56461eafe8  *******/
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

  register(): void {
    console.log(
      'valid registration for',
      this.email.value,
      '-',
      this.password.value
    );
    try {
      this.registerService
        .registerUser(this.email.value, this.confirmPassword.value)
        .then((res) => {
          console.log(res);
          this.toastRService.success(
            `Registration for ${this.email.value} was successful`,
            'Success'
          );
        });
    } catch (error) {
      if (error) {
        this.toastRService.error(error.message);
      }
    }
  }
  closeLoginDialog() {
    this.registerDialogRef.close();
  }
}
