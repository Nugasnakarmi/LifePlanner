import { createReducer, on } from '@ngrx/store';
import { Board } from 'src/app/interfaces/board.interface';
import { BoardState } from './board.state.interface';
import * as boardActions from './board.actions';

function resolveSelectedBoard(
  currentSelected: Board | null,
  boards: Board[]
): Board | null {
  if (currentSelected?.id) {
    return boards.find((b) => b.id === currentSelected.id) ?? (boards[0] ?? null);
  }
  return boards[0] ?? null;
}

export const initialState: BoardState = {
  boards: [],
  selectedBoard: null,
  loading: false,
};

export const boardsReducer = createReducer(
  initialState,
  on(boardActions.addBoard, (state, { board }) => ({
    ...state,
    boards: [...state.boards, board],
    loading: false,
  })),
  on(boardActions.loadBoardsSuccess, (state, { boards }) => ({
    ...state,
    boards,
    selectedBoard: resolveSelectedBoard(state.selectedBoard, boards),
    loading: false,
  })),
  on(boardActions.loadBoardsFailure, (state, { error }) => ({
    ...state,
    loading: false,
  })),
  on(boardActions.boardEditedSuccessfully, (state, { board }) => ({
    ...state,
    boards: [...state.boards.map((b) => (b.id === board.id ? board : b))],
    selectedBoard:
      state.selectedBoard?.id === board.id ? board : state.selectedBoard,
    loading: true,
  })),
  on(boardActions.selectBoard, (state, { board }) => ({
    ...state,
    selectedBoard: board,
  })),
  on(boardActions.deleteBoardSuccess, (state, { boardId }) => {
    const updatedBoards = state.boards.filter((b) => b.id !== boardId);
    const newSelectedBoard =
      state.selectedBoard?.id === boardId
        ? (updatedBoards[0] ?? null)
        : state.selectedBoard;
    return {
      ...state,
      boards: updatedBoards,
      selectedBoard: newSelectedBoard,
    };
  })
);
