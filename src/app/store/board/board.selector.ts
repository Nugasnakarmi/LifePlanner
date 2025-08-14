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
