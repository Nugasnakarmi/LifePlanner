import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { RegisterComponent } from '../register/register.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
  ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  hide = true;
  userDetails = null;
  loginService = inject(LoginService);
  registerDialog = inject(MatDialog);
  router = inject(Router);
  // loginDialogRef = inject(MatDialogRef<LoginComponent>);
  constructor() {}

  ngOnInit(): void {}
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  async login() {
    let loginCredentials = {
      email: this.email.value,
      password: this.password.value,
    };
    try {
      const userSessionDetails = await this.loginService.loginEmailPassword(
        loginCredentials
      );
      this.userDetails = userSessionDetails.user;
      this.router.navigate(['/main']);
    } catch (error) {}
  }
  register() {
    this.router.navigate(['/register']);
  }

  keyDown($event): void {
    if ($event.key === 'Enter') {
      this.login();
    }
  }
}
