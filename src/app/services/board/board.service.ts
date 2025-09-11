import { Injectable, inject } from '@angular/core';
import { Board } from 'src/app/interfaces/board.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectBoards } from 'src/app/store/board/board.selector';
import * as boardActions from 'src/app/store/board/board.actions';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  store = inject(Store<Board>);

  constructor() {
    // You can implement store logic here if needed
  }

  boards$: Observable<Board[]> = this.store.select(selectBoards);

  getBoards(): void {
    this.store.dispatch(boardActions.loadBoards());
  }

  nameEditFinished(board: Board): void {
    this.store.dispatch(boardActions.boardNameEdited({ board: board }));
  }

  //create new board
  createBoard(board: Board): void {
    this.store.dispatch(boardActions.addBoard({ board }));
  }
}
