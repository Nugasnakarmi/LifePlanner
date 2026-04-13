import { Injectable, inject } from '@angular/core';
import { Board } from 'src/app/interfaces/board.interface';
import { BoardTemplate } from 'src/app/interfaces/board-template.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectBoards,
  selectCollaboratedBoards,
  selectOwnBoards,
  selectSelectedBoard,
} from 'src/app/store/board/board.selector';
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
  ownBoards$: Observable<Board[]> = this.store.select(selectOwnBoards);
  collaboratedBoards$: Observable<Board[]> = this.store.select(selectCollaboratedBoards);
  selectedBoard$: Observable<Board | null> = this.store.select(selectSelectedBoard);

  getBoards(): void {
    this.store.dispatch(boardActions.loadBoards());
  }

  boardEditFinished(board: Board): void {
    this.store.dispatch(boardActions.boardEdited({ board: board }));
  }

  //create new board
  createBoard(board: Board): void {
    this.store.dispatch(boardActions.addBoard({ board }));
  }

  selectBoard(board: Board): void {
    this.store.dispatch(boardActions.selectBoard({ board }));
  }

  deleteBoard(boardId: number): void {
    this.store.dispatch(boardActions.deleteBoard({ boardId }));
  }

  createBoardFromTemplate(template: BoardTemplate): void {
    this.store.dispatch(boardActions.createBoardFromTemplate({ template }));
  }
}
