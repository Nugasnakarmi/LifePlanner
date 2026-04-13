import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BoardState } from './board.state.interface';

export const selectBoardFeature = createFeatureSelector<BoardState>('board');
export const selectBoards = createSelector(
  selectBoardFeature,
  (state) => state.boards
);
export const selectBoardLoadingState = createSelector(
  selectBoardFeature,
  (state) => state.loading
);

export const selectSelectedBoard = createSelector(
  selectBoardFeature,
  (state) => state.selectedBoard
);

export const selectOwnBoards = createSelector(
  selectBoards,
  (boards) => boards.filter((b) => !b.isCollaborated)
);

export const selectCollaboratedBoards = createSelector(
  selectBoards,
  (boards) => boards.filter((b) => b.isCollaborated)
);
