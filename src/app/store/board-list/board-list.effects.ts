import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { BoardListApiService } from 'src/app/services/board-list/board-list.api.service';
import * as boardListActions from './board-list.actions';
import { selectBoardLists } from './board-list.selector';

@Injectable()
export class BoardListEffects {
  boardListApiService = inject(BoardListApiService);
  store = inject(Store);

  loadBoardLists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardListActions.loadBoardLists),
      switchMap(({ boardId }) =>
        this.boardListApiService
          .getListsByBoardId(boardId)
          .then((lists) => boardListActions.loadBoardListsSuccess({ lists }))
          .catch((error) => boardListActions.loadBoardListsFailure({ error }))
      )
    )
  );

  loadAllBoardListsForUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardListActions.loadAllBoardListsForUser),
      switchMap(() =>
        this.boardListApiService
          .getAllListsForUser()
          .then((lists) => boardListActions.loadAllBoardListsForUserSuccess({ lists }))
          .catch((error) => boardListActions.loadAllBoardListsForUserFailure({ error }))
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
        return this.boardListApiService
          .addList(boardId, name, nextPosition)
          .then((list) =>
            list
              ? boardListActions.addBoardListSuccess({ list })
              : boardListActions.addBoardListFailure({ error: 'Failed to add list' })
          )
          .catch((error) => boardListActions.addBoardListFailure({ error }));
      })
    )
  );

  renameBoardList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardListActions.renameBoardList),
      mergeMap(({ listId, name }) =>
        this.boardListApiService
          .updateListName(listId, name)
          .then((list) =>
            list
              ? boardListActions.renameBoardListSuccess({ list })
              : boardListActions.renameBoardListFailure({ error: 'Failed to rename list' })
          )
          .catch((error) => boardListActions.renameBoardListFailure({ error }))
      )
    )
  );

  deleteBoardList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(boardListActions.deleteBoardList),
      mergeMap(({ listId }) =>
        this.boardListApiService
          .deleteList(listId)
          .then((success) =>
            success
              ? boardListActions.deleteBoardListSuccess({ listId })
              : boardListActions.deleteBoardListFailure({ error: 'Failed to delete list' })
          )
          .catch((error) => boardListActions.deleteBoardListFailure({ error }))
      )
    )
  );

  constructor(private actions$: Actions) {}
}
