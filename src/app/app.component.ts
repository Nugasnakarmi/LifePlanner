import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SupabaseService } from './services/supabase/supabase.service';
import { ThemeService } from './services/theme/theme.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatMenuModule, MatButtonModule, MatIconModule, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'LifePlanner';
  userEmail: string | null = null;
  menuActive = false;

  router = inject(Router);
  supabaseService = inject(SupabaseService);
  themeService = inject(ThemeService);

  async ngOnInit(): Promise<void> {
    const session = await this.supabaseService.getSession();
    if (session?.user?.email) {
      this.userEmail = session.user.email;
    }

    this.supabaseService.supabase.auth.onAuthStateChange((_event, session) => {
      this.userEmail = session?.user?.email ?? null;
    });
  }

  async logout(): Promise<void> {
    await this.supabaseService.signOut();
    this.userEmail = null;
    this.router.navigate(['/']);
  }

  navigateToHome(): void {
    this.router.navigate(['/']);
  }

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }
}
