import { Routes } from '@angular/router';
import { MainViewComponent } from './views/main-view/main-view.component';
import { EmailConfirmComponent } from './views/email/email-confirm/email-confirm.component';
import { ResetPasswordComponent } from './views/email/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './views/email/forgot-password/forgot-password.component';
import { RegisterComponent } from './views/email/register/register.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { BoardsViewComponent } from './views/boards-view/boards-view.component';
import { TaskDashboardComponent } from './views/task-dashboard/task-dashboard.component';
import { UserProfileComponent } from './views/user-profile.component';
import { AcceptInvitationComponent } from './views/accept-invitation/accept-invitation.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'boards', component: BoardsViewComponent, canActivate: [authGuard] },
  { path: 'main', component: MainViewComponent, canActivate: [authGuard] },
  { path: 'dashboard', component: TaskDashboardComponent, canActivate: [authGuard] },
  { path: 'profile', component: UserProfileComponent, canActivate: [authGuard] },
  { path: 'confirmEmail', component: EmailConfirmComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  // Invitation acceptance — no auth guard so unauthenticated users can reach it and be prompted to log in.
  { path: 'invite', component: AcceptInvitationComponent },
  { path: '**', redirectTo: '' },
];
