import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs';
import { BoardTemplateApiService } from 'src/app/services/board-template/board-template.api.service';
import * as actions from './board-template.actions';

@Injectable()
export class BoardTemplateEffects {
  private actions$ = inject(Actions);
  private api = inject(BoardTemplateApiService);

  loadBoardTemplates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadBoardTemplates),
      mergeMap(() =>
        this.api
          .getBoardTemplates()
          .then((templates) => actions.loadBoardTemplatesSuccess({ templates }))
          .catch((error) => actions.loadBoardTemplatesFailure({ error }))
      )
    )
  );

  saveBoardTemplate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.saveBoardTemplate),
      mergeMap(({ template }) =>
        this.api
          .saveTemplate(template)
          .then((saved) =>
            saved
              ? actions.saveBoardTemplateSuccess({ template: saved })
              : actions.saveBoardTemplateFailure({ error: 'Save returned null' })
          )
          .catch((error) => actions.saveBoardTemplateFailure({ error }))
      )
    )
  );

  deleteBoardTemplate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteBoardTemplate),
      mergeMap(({ dbId }) =>
        this.api
          .deleteTemplate(dbId)
          .then((ok) =>
            ok
              ? actions.deleteBoardTemplateSuccess({ dbId })
              : actions.deleteBoardTemplateFailure({ error: 'Delete failed' })
          )
          .catch((error) => actions.deleteBoardTemplateFailure({ error }))
      )
    )
  );
}
