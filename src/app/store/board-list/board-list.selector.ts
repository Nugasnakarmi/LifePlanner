import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BoardListState } from './board-list.state.interface';

export const selectBoardListFeature =
  createFeatureSelector<BoardListState>('board-list');

export const selectBoardLists = createSelector(
  selectBoardListFeature,
  (state) => state.lists
);

export const selectBoardListsLoading = createSelector(
  selectBoardListFeature,
  (state) => state.loading
);
