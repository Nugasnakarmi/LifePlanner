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
  on(boardActions.boardEditedSuccessfully, (state, { board }) => {
    // The API returns only database columns (name, description, etc.).
    // Merge with the existing board entry to preserve client-side collaboration
    // properties (isCollaborated, canEdit, ownerDisplayName) that are not
    // stored in the database, so collaborated boards stay in "Shared With You".
    const existingBoard = state.boards.find((b) => b.id === board.id);
    const mergedBoard: Board = existingBoard ? { ...existingBoard, ...board } : board;
    return {
      ...state,
      boards: [...state.boards.map((b) => (b.id === board.id ? mergedBoard : b))],
      selectedBoard:
        state.selectedBoard?.id === board.id ? mergedBoard : state.selectedBoard,
      loading: false,
    };
  }),
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
