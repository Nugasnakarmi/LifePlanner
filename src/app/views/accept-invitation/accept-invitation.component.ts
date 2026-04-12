import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { SupabaseService } from 'src/app/services/supabase/supabase.service';
import * as collabActions from 'src/app/store/board/board-collaboration.actions';

/** Storage key used to preserve the invitation token across a login redirect. */
const PENDING_INVITE_KEY = 'pendingInvitationToken';

@Component({
  selector: 'app-accept-invitation',
  standalone: true,
  imports: [NgIf, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './accept-invitation.component.html',
  styleUrls: ['./accept-invitation.component.scss'],
})
export class AcceptInvitationComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private store = inject(Store);
  private actions$ = inject(Actions);
  private supabaseService = inject(SupabaseService);
  private destroyRef = inject(DestroyRef);

  status: 'loading' | 'success' | 'error' | 'unauthenticated' = 'loading';
  errorMessage = '';

  async ngOnInit(): Promise<void> {
    const token = this.route.snapshot.queryParamMap.get('token');

    if (!token) {
      this.status = 'error';
      this.errorMessage = 'Invalid invitation link: missing token.';
      return;
    }

    const session = await this.supabaseService.getSession();

    if (!session) {
      // Save the token so it can be picked up after the user logs in.
      sessionStorage.setItem(PENDING_INVITE_KEY, token);
      this.status = 'unauthenticated';
      return;
    }

    this.acceptToken(token);
  }

  private acceptToken(token: string): void {
    this.status = 'loading';

    this.actions$
      .pipe(
        ofType(
          collabActions.acceptInvitationByTokenSuccess,
          collabActions.acceptInvitationByTokenFailure
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((action) => {
        if (action.type === collabActions.acceptInvitationByTokenSuccess.type) {
          this.status = 'success';
          setTimeout(() => this.router.navigate(['/boards']), 1500);
        } else {
          this.status = 'error';
          this.errorMessage =
            (action as ReturnType<typeof collabActions.acceptInvitationByTokenFailure>).error;
        }
      });

    this.store.dispatch(collabActions.acceptInvitationByToken({ token }));
  }

  goToLogin(): void {
    this.router.navigate(['/']);
  }

  goToBoards(): void {
    this.router.navigate(['/boards']);
  }
}
