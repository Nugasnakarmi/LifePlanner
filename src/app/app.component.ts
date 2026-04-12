import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SupabaseService } from './services/supabase/supabase.service';
import { ThemeService } from './services/theme/theme.service';
import { AppTitleService } from './services/app-title.service';
import { UserProfileService } from './services/user-profile.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgIf } from '@angular/common';
import { CreateTemplateDialogComponent } from './views/boards-view/create-template-dialog/create-template-dialog.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatMenuModule, MatButtonModule, MatIconModule, MatDividerModule, MatDialogModule, NgIf, AsyncPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userEmail: string | null = null;
  menuActive = false;
  isEditingTitle = false;
  editingTitleValue = '';

  @ViewChild('titleInput') titleInput?: ElementRef<HTMLInputElement>;

  router = inject(Router);
  supabaseService = inject(SupabaseService);
  themeService = inject(ThemeService);
  appTitleService = inject(AppTitleService);
  userProfileService = inject(UserProfileService);
  dialog = inject(MatDialog);

  async ngOnInit(): Promise<void> {
    const session = await this.supabaseService.getSession();
    if (session?.user?.email) {
      this.userEmail = session.user.email;
      await this.appTitleService.loadFromDb();
      this.userProfileService.loadProfile();
      this.redirectPendingInvitation();
    } else {
      this.appTitleService.reset();
      this.userProfileService.clearProfile();
    }

    this.supabaseService.supabase.auth.onAuthStateChange(async (_event, session) => {
      this.userEmail = session?.user?.email ?? null;
      if (session?.user) {
        await this.appTitleService.loadFromDb();
        this.userProfileService.loadProfile();
        this.redirectPendingInvitation();
      } else {
        this.appTitleService.reset();
        this.userProfileService.clearProfile();
      }
    });
  }

  /** If a board invitation token was saved before the user logged in, redirect to the accept page. */
  private redirectPendingInvitation(): void {
    const token = sessionStorage.getItem('pendingInvitationToken');
    if (token) {
      sessionStorage.removeItem('pendingInvitationToken');
      this.router.navigate(['/invite'], { queryParams: { token } });
    }
  }

  startEditingTitle(): void {
    if (!this.userEmail) {
      return;
    }
    this.editingTitleValue = this.appTitleService.appTitle();
    this.isEditingTitle = true;
    setTimeout(() => this.titleInput?.nativeElement?.select(), 0);
  }

  async commitTitleEdit(): Promise<void> {
    this.isEditingTitle = false;
    const newTitle = this.editingTitleValue.trim();
    if (newTitle && newTitle !== this.appTitleService.appTitle()) {
      await this.appTitleService.saveTitle(newTitle);
    }
  }

  cancelTitleEdit(): void {
    this.isEditingTitle = false;
    this.editingTitleValue = '';
  }

  onTitleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.commitTitleEdit();
    } else if (event.key === 'Escape') {
      this.cancelTitleEdit();
    }
  }

  async logout(): Promise<void> {
    await this.supabaseService.signOut();
    this.userEmail = null;
    this.router.navigate(['/']);
  }

  navigateToHome(): void {
    this.router.navigate(['/']);
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  navigateToNewBoard(): void {
    this.router.navigate(['/boards'], { queryParams: { newBoard: 'true' } });
  }

  navigateToProfile(): void {
    this.router.navigate(['/profile']);
  }

  openCreateTemplateDialog(): void {
    this.dialog.open(CreateTemplateDialogComponent, {
      panelClass: 'create-template-panel',
      disableClose: false,
    });
  }

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }
}
