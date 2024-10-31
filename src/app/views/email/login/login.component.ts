import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { RegisterComponent } from '../register/register.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  hide = true;
  userDetails = null;

  constructor(
    private loginService: LoginService,
    private registerDialog: MatDialog,
    private loginDialogRef: MatDialogRef<LoginComponent>
  ) {}

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
