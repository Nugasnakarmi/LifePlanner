import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs';
import { UserTemplateApiService } from 'src/app/services/user-template/user-template.api.service';
import * as actions from './user-template.actions';

@Injectable()
export class UserTemplateEffects {
  private actions$ = inject(Actions);
  private api = inject(UserTemplateApiService);

  loadUserTemplates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadUserTemplates),
      mergeMap(() =>
        this.api
          .getUserTemplates()
          .then((templates) => actions.loadUserTemplatesSuccess({ templates }))
          .catch((error) => actions.loadUserTemplatesFailure({ error }))
      )
    )
  );

  saveUserTemplate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.saveUserTemplate),
      mergeMap(({ template }) =>
        this.api
          .saveTemplate(template)
          .then((saved) =>
            saved
              ? actions.saveUserTemplateSuccess({ template: saved })
              : actions.saveUserTemplateFailure({ error: 'Save returned null' })
          )
          .catch((error) => actions.saveUserTemplateFailure({ error }))
      )
    )
  );

  deleteUserTemplate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteUserTemplate),
      mergeMap(({ dbId }) =>
        this.api
          .deleteTemplate(dbId)
          .then((ok) =>
            ok
              ? actions.deleteUserTemplateSuccess({ dbId })
              : actions.deleteUserTemplateFailure({ error: 'Delete failed' })
          )
          .catch((error) => actions.deleteUserTemplateFailure({ error }))
      )
    )
  );
}
