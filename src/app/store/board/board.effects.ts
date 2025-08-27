import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BoardAPIService } from 'src/app/services/board/board.api.service';
import { ToastrService } from 'ngx-toastr';
import * as boardActions from './board.actions';
import * as taskActions from '../task/task.actions';
import { catchError, EMPTY, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { Board } from 'src/app/interfaces/board.interface';

@Injectable()
export class BoardEffects {
  boardAPIService = inject(BoardAPIService);
  toastRService = inject(ToastrService);

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

  boardNameEdited$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardActions.boardNameEdited),
      mergeMap(({ board }) =>
        this.boardAPIService
          .editBoard(board)
          .then((board: Board) =>
            boardActions.boardEditedSuccessfully({ board })
          )
          .catch((error) => boardActions.boardEditFailed({ error }))
      )
    )
  );

  constructor(private actions$: Actions) {}
}
