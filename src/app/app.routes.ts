import { Routes } from '@angular/router';
import { MainViewComponent } from './views/main-view/main-view.component';
import { EmailConfirmComponent } from './views/email/email-confirm/email-confirm.component';
import { ResetPasswordComponent } from './views/email/reset-password/reset-password.component';
import { RegisterComponent } from './views/email/register/register.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { BoardsViewComponent } from './views/boards-view/boards-view.component';
import { TaskDashboardComponent } from './views/task-dashboard/task-dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'boards', component: BoardsViewComponent, canActivate: [authGuard] },
  { path: 'main', component: MainViewComponent, canActivate: [authGuard] },
  { path: 'dashboard', component: TaskDashboardComponent, canActivate: [authGuard] },
  { path: 'confirmEmail', component: EmailConfirmComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' },
];
