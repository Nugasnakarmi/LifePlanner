import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BoardAPIService } from 'src/app/services/board/board.api.service';
import { ToastrService } from 'ngx-toastr';
import * as boardActions from './board.actions';
import * as taskActions from '../task/task.actions';
import { catchError, EMPTY, map, mergeMap, of, switchMap, tap } from 'rxjs';

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

  // loadBoardsSuccess$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(boardActions.loadBoardsSuccess),
  //     tap(({ boards }) => {
  //       this.toastRService.success('Boards loaded successfully');
  //       //we may want to refresh board or sth
  //     })
  //   )
  // );

  // loadBoardsFailure$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(boardActions.loadBoardsFailure),
  //     tap(({ error }) => {
  //       this.toastRService.error(`Failed to load boards: ${error.message}`);
  //     })
  //   )
  // );

  boardNameEdited$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardActions.boardNameEdited),
      mergeMap(({ board }) =>
        this.boardAPIService
          .editBoard(board)
          .then(() => boardActions.boardEditedSuccessfully())
          .catch((error) => boardActions.boardEditFailed({ error }))
      )
    )
  );

  // boardEditedSuccessfully$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(boardActions.boardEditedSuccessfully),
  //     tap(() => {
  //       this.toastRService.success(`Board updated successfully`);
  //     })
  //   )
  // );

  // boardEditFailed$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(boardActions.boardEditFailed),
  //     tap(({ error }) => {
  //       this.toastRService.error(`Failed to update board : ${error.message}`);
  //     })
  //   )
  // );

  constructor(private actions$: Actions) {}
}
