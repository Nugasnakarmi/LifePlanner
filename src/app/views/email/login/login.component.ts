import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required] );

  hide=true;
  userDetails = null;

  constructor(private loginService: LoginService, public loginDialogRef : MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  login(){
    let loginCredentials = {
      "email": this.email.value,
      "password": this.password.value
    }
    try {
     this.loginService.loginEmailPassword(loginCredentials).then( (res)=>{
      if(res){
        this.userDetails = res;
        this.closeLoginDialog();
      }

    });
    
      
     
    } catch (error) {
      
    }
    
  }
  closeLoginDialog(){
    this.loginDialogRef.close({userDetails: this.userDetails });

  }


}
