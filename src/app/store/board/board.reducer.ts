import { createReducer, on } from '@ngrx/store';
import { BoardState } from './board.state.interface';
import * as boardActions from './board.actions';

export const initialState: BoardState = {
  boards: [],
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
    loading: false,
  })),
  on(boardActions.loadBoardsFailure, (state, { error }) => ({
    ...state,
    loading: false,
  }))
);
