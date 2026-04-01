import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, mergeMap, of } from 'rxjs';
import { UserProfileApiService } from 'src/app/services/user-profile.api.service';
import { ToastrService } from 'ngx-toastr';
import * as actions from './user-profile.actions';

@Injectable()
export class UserProfileEffects {
  private actions$ = inject(Actions);
  private api = inject(UserProfileApiService);
  private toastr = inject(ToastrService);

  loadProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadUserProfile),
      mergeMap(() =>
        from(this.api.loadProfile()).pipe(
          map((profile) =>
            profile
              ? actions.loadUserProfileSuccess({ profile })
              : actions.loadUserProfileNotFound()
          ),
          catchError((error) => {
            this.toastr.error('Failed to load profile');
            return of(actions.loadUserProfileFailure({ error }));
          })
        )
      )
    )
  );

  saveProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.saveUserProfile),
      mergeMap(({ updates, silent }) =>
        from(this.api.saveProfile(updates, { silent })).pipe(
          map((profile) => {
            if (!profile) {
              this.toastr.error('Failed to save profile');
              return actions.saveUserProfileFailure({ error: 'Save returned null' });
            }
            return actions.saveUserProfileSuccess({ profile });
          }),
          catchError((error) => {
            this.toastr.error('Failed to save profile');
            return of(actions.saveUserProfileFailure({ error }));
          })
        )
      )
    )
  );

  uploadAvatar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.uploadAvatar),
      mergeMap(({ file }) =>
        from(this.api.uploadAvatar(file)).pipe(
          map((avatar_url) => {
            if (!avatar_url) {
              this.toastr.error('Failed to upload avatar');
              return actions.uploadAvatarFailure({ error: 'Upload returned null' });
            }
            return actions.uploadAvatarSuccess({ avatar_url });
          }),
          catchError((error) => {
            this.toastr.error('Failed to upload avatar');
            return of(actions.uploadAvatarFailure({ error }));
          })
        )
      )
    )
  );

  removeAvatar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.removeAvatar),
      mergeMap(() =>
        from(this.api.removeAvatar()).pipe(
          map((ok) => {
            if (!ok) {
              this.toastr.error('Failed to remove avatar');
              return actions.removeAvatarFailure({ error: 'Remove failed' });
            }
            return actions.removeAvatarSuccess();
          }),
          catchError((error) => {
            this.toastr.error('Failed to remove avatar');
            return of(actions.removeAvatarFailure({ error }));
          })
        )
      )
    )
  );
}
