import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  userDetails = null;
  hide = true;


  constructor(private registerService: RegisterService, public registerDialogRef: MatDialogRef<RegisterComponent>) { }

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
    if (type == "email") {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }

      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
    else if (type == "password") {
      if (this.password.hasError('required')) {
        return 'Password must be entered';
      }
    }
      else if (type == "confirmPassword") {
        if (this.confirmPassword.hasError('required')) {
          return 'Please type your password again to confirm';
        }
        else {
          return 'Passwords do not match'
        }

      }
      return 'You must enter a value';
    

  }

  register() {
    console.log("valid registration");
    try {
      this.registerService.registerUser(this.email,this.confirmPassword).then((res)=>{
        if(res){
          console.log(res);
        }
      });
   
     } catch (error) {
       
     }
    

  }
  closeLoginDialog() {
    this.registerDialogRef.close();

  }



}
