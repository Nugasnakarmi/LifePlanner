import { Routes } from '@angular/router';
import { MainViewComponent } from './views/main-view/main-view.component';
import { EmailConfirmComponent } from './views/email/email-confirm/email-confirm.component';
import { ResetPasswordComponent } from './views/email/reset-password/reset-password.component';
import { LoginComponent } from './views/email/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: MainViewComponent },
  { path: 'confirmEmail', component: EmailConfirmComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
];
