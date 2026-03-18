import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BoardListState } from './board-list.state.interface';
import { BoardList } from 'src/app/interfaces/board-list.interface';

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

export const selectAllBoardLists = createSelector(
  selectBoardListFeature,
  (state) => state.allLists
);

export const selectAllBoardListsGroupedByBoard = createSelector(
  selectAllBoardLists,
  (lists) =>
    lists.reduce((acc, list) => {
      if (!acc[list.board_id]) {
        acc[list.board_id] = [];
      }
      acc[list.board_id].push(list);
      return acc;
    }, {} as Record<number, BoardList[]>)
);
