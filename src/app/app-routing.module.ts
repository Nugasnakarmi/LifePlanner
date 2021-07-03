import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailConfirmComponent } from './views/email/email-confirm/email-confirm.component';
import { ResetPasswordComponent } from './views/email/reset-password/reset-password.component';
import { MainViewComponent } from './views/main-view/main-view.component';

const routes: Routes = [
{path:'', component: MainViewComponent},
{path:'confirmEmail', component: EmailConfirmComponent},
{path:'resetPassword', component: ResetPasswordComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
