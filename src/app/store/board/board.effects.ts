import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BoardAPIService } from 'src/app/services/board/board.api.service';
import { ToastrService } from 'ngx-toastr';
import * as boardActions from './board.actions';
import * as taskActions from '../task/task.actions';
import { catchError, from, map, mergeMap, of } from 'rxjs';
import { Board } from 'src/app/interfaces/board.interface';

@Injectable()
export class BoardEffects {
  boardAPIService = inject(BoardAPIService);
  toastr = inject(ToastrService);

  addBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardActions.addBoard),
      mergeMap(({ board }) =>
        from(this.boardAPIService.addBoard(board)).pipe(
          mergeMap((createdBoard) => {
            if (!createdBoard) {
              return of(boardActions.loadBoardsFailure({ error: 'Failed to create board' }));
            }
            return from(this.boardAPIService.getBoards()).pipe(
              mergeMap((fetchedBoards) => [
                boardActions.addBoardSuccess({ board: createdBoard }),
                boardActions.loadBoardsSuccess({ boards: fetchedBoards ?? [] }),
              ])
            );
          }),
          catchError((error) => {
            this.toastr.error('Failed to add board');
            return of(boardActions.loadBoardsFailure({ error }));
          })
        )
      )
    )
  );

  loadBoards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.landingPageInitialized, boardActions.loadBoards),
      mergeMap(() =>
        from(this.boardAPIService.getBoards()).pipe(
          map((fetchedBoards) =>
            boardActions.loadBoardsSuccess({ boards: fetchedBoards ?? [] })
          ),
          catchError((error) => {
            this.toastr.error('Failed to load boards');
            return of(boardActions.loadBoardsFailure({ error }));
          })
        )
      )
    )
  );

  boardEdited$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardActions.boardEdited),
      mergeMap(({ board }) =>
        from(this.boardAPIService.editBoard(board)).pipe(
          map((updatedBoard: Board | null) => {
            if (!updatedBoard) {
              this.toastr.error('Failed to update board');
              return boardActions.boardEditFailed({ error: 'Failed to update board' });
            }
            return boardActions.boardEditedSuccessfully({ board: updatedBoard });
          }),
          catchError((error) => {
            this.toastr.error('Failed to update board');
            return of(boardActions.boardEditFailed({ error }));
          })
        )
      )
    )
  );

  deleteBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardActions.deleteBoard),
      mergeMap(({ boardId }) =>
        from(this.boardAPIService.deleteBoard(boardId)).pipe(
          map((success) => {
            if (!success) {
              this.toastr.error('Failed to delete board');
              return boardActions.deleteBoardFailure({ error: 'Failed to delete board' });
            }
            return boardActions.deleteBoardSuccess({ boardId });
          }),
          catchError((error) => {
            this.toastr.error('Failed to delete board');
            return of(boardActions.deleteBoardFailure({ error }));
          })
        )
      )
    )
  );

  createBoardFromTemplate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardActions.createBoardFromTemplate),
      mergeMap(({ template }) =>
        from(this.boardAPIService.addBoardFromTemplate(template)).pipe(
          mergeMap(() => from(this.boardAPIService.getBoards())),
          map((fetchedBoards) =>
            boardActions.loadBoardsSuccess({ boards: fetchedBoards ?? [] })
          ),
          catchError((error) => {
            this.toastr.error('Failed to create board from template');
            return of(boardActions.loadBoardsFailure({ error }));
          })
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
