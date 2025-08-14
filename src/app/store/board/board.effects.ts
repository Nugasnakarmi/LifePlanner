import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BoardAPIService } from 'src/app/services/board/board.api.service';
import * as boardActions from './board.actions';
import * as taskActions from '../task/task.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class BoardEffects {
  boardAPIService = inject(BoardAPIService);

  addBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardActions.addBoard),
      mergeMap(({ board }) =>
        this.boardAPIService
          .addBoard(board)
          .then(() => boardActions.loadBoardsSuccess({ boards: [board] }))
          .catch((error) => boardActions.loadBoardsFailure({ error }))
      )
    )
  );

  loadBoards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.landingPageInitialized),
      mergeMap(() =>
        this.boardAPIService
          .getBoards()
          .then((fetchedBoards) =>
            boardActions.loadBoardsSuccess({ boards: fetchedBoards })
          )
          .catch((error) => boardActions.loadBoardsFailure({ error }))
      )
    )
  );

  constructor(private actions$: Actions) {}
}
