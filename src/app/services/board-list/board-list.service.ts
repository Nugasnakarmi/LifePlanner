import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BoardList } from 'src/app/interfaces/board-list.interface';
import * as boardListActions from 'src/app/store/board-list/board-list.actions';
import { selectBoardLists, selectAllBoardListsGroupedByBoard } from 'src/app/store/board-list/board-list.selector';

@Injectable({
  providedIn: 'root',
})
export class BoardListService {
  private store = inject(Store);

  lists$: Observable<BoardList[]> = this.store.select(selectBoardLists);
  allListsGroupedByBoard$: Observable<Record<number, BoardList[]>> =
    this.store.select(selectAllBoardListsGroupedByBoard);

  loadLists(boardId: number): void {
    this.store.dispatch(boardListActions.loadBoardLists({ boardId }));
  }

  loadAllLists(): void {
    this.store.dispatch(boardListActions.loadAllBoardListsForUser());
  }

  addList(boardId: number, name: string): void {
    this.store.dispatch(boardListActions.addBoardList({ boardId, name }));
  }

  editListName(listId: number, name: string): void {
    this.store.dispatch(boardListActions.renameBoardList({ listId, name }));
  }

  deleteList(listId: number): void {
    this.store.dispatch(boardListActions.deleteBoardList({ listId }));
  }

  clearLists(): void {
    this.store.dispatch(boardListActions.clearBoardLists());
  }
}


