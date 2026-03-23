import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs';
import { UserProfileApiService } from 'src/app/services/user-profile.api.service';
import * as actions from './user-profile.actions';

@Injectable()
export class UserProfileEffects {
  private actions$ = inject(Actions);
  private api = inject(UserProfileApiService);

  loadProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadUserProfile),
      mergeMap(() =>
        this.api
          .loadProfile()
          .then((profile) =>
            profile
              ? actions.loadUserProfileSuccess({ profile })
              : actions.loadUserProfileNotFound()
          )
          .catch((error) => actions.loadUserProfileFailure({ error }))
      )
    )
  );

  saveProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.saveUserProfile),
      mergeMap(({ updates }) =>
        this.api
          .saveProfile(updates)
          .then((profile) =>
            profile
              ? actions.saveUserProfileSuccess({ profile })
              : actions.saveUserProfileFailure({ error: 'Save returned null' })
          )
          .catch((error) => actions.saveUserProfileFailure({ error }))
      )
    )
  );

  uploadAvatar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.uploadAvatar),
      mergeMap(({ file }) =>
        this.api
          .uploadAvatar(file)
          .then((avatar_url) =>
            avatar_url
              ? actions.uploadAvatarSuccess({ avatar_url })
              : actions.uploadAvatarFailure({ error: 'Upload returned null' })
          )
          .catch((error) => actions.uploadAvatarFailure({ error }))
      )
    )
  );

  removeAvatar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.removeAvatar),
      mergeMap(() =>
        this.api
          .removeAvatar()
          .then((ok) =>
            ok
              ? actions.removeAvatarSuccess()
              : actions.removeAvatarFailure({ error: 'Remove failed' })
          )
          .catch((error) => actions.removeAvatarFailure({ error }))
      )
    )
  );
}
