import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, from, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { BoardListApiService } from 'src/app/services/board-list/board-list.api.service';
import { ToastrService } from 'ngx-toastr';
import * as boardListActions from './board-list.actions';
import { selectBoardLists } from './board-list.selector';

@Injectable()
export class BoardListEffects {
  boardListApiService = inject(BoardListApiService);
  store = inject(Store);
  toastr = inject(ToastrService);

  loadBoardLists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardListActions.loadBoardLists),
      switchMap(({ boardId }) =>
        from(this.boardListApiService.getListsByBoardId(boardId)).pipe(
          map((lists) => boardListActions.loadBoardListsSuccess({ lists })),
          catchError((error) => {
            this.toastr.error('Failed to load lists');
            return of(boardListActions.loadBoardListsFailure({ error }));
          })
        )
      )
    )
  );

  loadAllBoardListsForUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardListActions.loadAllBoardListsForUser),
      switchMap(() =>
        from(this.boardListApiService.getAllListsForUser()).pipe(
          map((lists) => boardListActions.loadAllBoardListsForUserSuccess({ lists })),
          catchError((error) => {
            this.toastr.error('Failed to load lists');
            return of(boardListActions.loadAllBoardListsForUserFailure({ error }));
          })
        )
      )
    )
  );

  addBoardList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardListActions.addBoardList),
      withLatestFrom(this.store.select(selectBoardLists)),
      concatMap(([{ boardId, name }, currentLists]) => {
        const nextPosition =
          currentLists.length > 0
            ? Math.max(...currentLists.map((l) => l.position)) + 1
            : 0;
        return from(this.boardListApiService.addList(boardId, name, nextPosition)).pipe(
          map((list) => {
            if (!list) {
              this.toastr.error('Failed to add list');
              return boardListActions.addBoardListFailure({ error: 'Failed to add list' });
            }
            return boardListActions.addBoardListSuccess({ list });
          }),
          catchError((error) => {
            this.toastr.error('Failed to add list');
            return of(boardListActions.addBoardListFailure({ error }));
          })
        );
      })
    )
  );

  renameBoardList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardListActions.renameBoardList),
      mergeMap(({ listId, name }) =>
        from(this.boardListApiService.updateListName(listId, name)).pipe(
          map((list) => {
            if (!list) {
              this.toastr.error('Failed to rename list');
              return boardListActions.renameBoardListFailure({ error: 'Failed to rename list' });
            }
            return boardListActions.renameBoardListSuccess({ list });
          }),
          catchError((error) => {
            this.toastr.error('Failed to rename list');
            return of(boardListActions.renameBoardListFailure({ error }));
          })
        )
      )
    )
  );

  deleteBoardList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardListActions.deleteBoardList),
      mergeMap(({ listId }) =>
        from(this.boardListApiService.deleteList(listId)).pipe(
          map((success) => {
            if (!success) {
              this.toastr.error('Failed to delete list');
              return boardListActions.deleteBoardListFailure({ error: 'Failed to delete list' });
            }
            return boardListActions.deleteBoardListSuccess({ listId });
          }),
          catchError((error) => {
            this.toastr.error('Failed to delete list');
            return of(boardListActions.deleteBoardListFailure({ error }));
          })
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
