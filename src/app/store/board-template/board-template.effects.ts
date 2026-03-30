import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, mergeMap, of, tap } from 'rxjs';
import { BoardTemplateApiService } from 'src/app/services/board-template/board-template.api.service';
import { ToastrService } from 'ngx-toastr';
import * as actions from './board-template.actions';
import { DIALOG_CACHE_KEYS, DialogFormCacheService } from 'src/app/services/dialog-form-cache/dialog-form-cache.service';

@Injectable()
export class BoardTemplateEffects {
  private actions$ = inject(Actions);
  private api = inject(BoardTemplateApiService);
  private formCache = inject(DialogFormCacheService);
  private toastr = inject(ToastrService);

  loadBoardTemplates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadBoardTemplates),
      mergeMap(() =>
        from(this.api.getBoardTemplates()).pipe(
          map((templates) => actions.loadBoardTemplatesSuccess({ templates })),
          catchError((error) => {
            this.toastr.error('Failed to load templates');
            return of(actions.loadBoardTemplatesFailure({ error }));
          })
        )
      )
    )
  );

  saveBoardTemplate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.saveBoardTemplate),
      mergeMap(({ template }) =>
        from(this.api.saveTemplate(template)).pipe(
          map((saved) => {
            if (!saved) {
              return actions.saveBoardTemplateFailure({ error: 'Save returned null' });
            }
            return actions.saveBoardTemplateSuccess({ template: saved });
          }),
          catchError((error) => {
            this.toastr.error('Failed to save template');
            return of(actions.saveBoardTemplateFailure({ error }));
          })
        )
      )
    )
  );

  deleteBoardTemplate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteBoardTemplate),
      mergeMap(({ dbId }) =>
        from(this.api.deleteTemplate(dbId)).pipe(
          map((ok) => {
            if (!ok) {
              return actions.deleteBoardTemplateFailure({ error: 'Delete failed' });
            }
            return actions.deleteBoardTemplateSuccess({ dbId });
          }),
          catchError((error) => {
            this.toastr.error('Failed to delete template');
            return of(actions.deleteBoardTemplateFailure({ error }));
          })
        )
      )
    )
  );

  editBoardTemplate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.editBoardTemplate),
      mergeMap(({ template }) =>
        from(this.api.updateTemplate(template)).pipe(
          map((updated) => {
            if (!updated) {
              return actions.editBoardTemplateFailure({ error: 'Update returned null', dbId: template.dbId! });
            }
            return actions.editBoardTemplateSuccess({ template: updated });
          }),
          catchError((error) => {
            this.toastr.error('Failed to update template');
            return of(actions.editBoardTemplateFailure({ error, dbId: template.dbId! }));
          })
        )
      )
    )
  );

  clearTemplateDraft$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.saveBoardTemplateSuccess),
        tap(() => this.formCache.clear(DIALOG_CACHE_KEYS.CREATE_TEMPLATE))
      ),
    { dispatch: false }
  );
}
