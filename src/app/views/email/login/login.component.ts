import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { RegisterComponent } from '../register/register.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatIconModule],
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
  loginDialogRef = inject(MatDialogRef<LoginComponent>);
  constructor() {}

  ngOnInit(): void {}
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  login() {
    let loginCredentials = {
      email: this.email.value,
      password: this.password.value,
    };
    try {
      this.loginService.loginEmailPassword(loginCredentials).then((res) => {
        if (res) {
          this.userDetails = res;
          this.closeLoginDialog();
        }
      });
    } catch (error) {}
  }
  register() {
    this.loginDialogRef.close();
    let registerRef = this.registerDialog.open(RegisterComponent);
    registerRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

  closeLoginDialog() {
    this.loginDialogRef.close({ userDetails: this.userDetails });
  }
}
