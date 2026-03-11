import { Component, inject, OnInit } from '@angular/core';
import { LoginComponent } from '../email/login/login.component';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase/supabase.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [LoginComponent],
  standalone: true,
})
export class LandingPageComponent implements OnInit {
  private supabaseService = inject(SupabaseService);
  private router = inject(Router);

  async ngOnInit(): Promise<void> {
    const session = await this.supabaseService.getSession();
    if (session) {
      this.router.navigate(['/boards']);
    }
  }
}
