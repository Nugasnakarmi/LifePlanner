import { createReducer, on } from '@ngrx/store';
import { BoardListState } from './board-list.state.interface';
import * as boardListActions from './board-list.actions';

export const initialState: BoardListState = {
  lists: [],
  allLists: [],
  loading: false,
};

export const boardListsReducer = createReducer(
  initialState,
  on(boardListActions.loadBoardLists, (state) => ({ ...state, loading: true })),
  on(boardListActions.loadBoardListsSuccess, (state, { lists }) => ({
    ...state,
    lists,
    loading: false,
  })),
  on(boardListActions.loadBoardListsFailure, (state) => ({
    ...state,
    loading: false,
  })),
  on(boardListActions.loadAllBoardListsForUser, (state) => ({ ...state, loading: true })),
  on(boardListActions.loadAllBoardListsForUserSuccess, (state, { lists }) => ({
    ...state,
    allLists: lists,
    loading: false,
  })),
  on(boardListActions.loadAllBoardListsForUserFailure, (state) => ({
    ...state,
    loading: false,
  })),
  on(boardListActions.clearBoardLists, (state) => ({ ...state, lists: [], loading: false })),
  on(boardListActions.addBoardListSuccess, (state, { list }) => ({
    ...state,
    lists: [...state.lists, list],
    allLists: [...state.allLists, list],
  })),
  on(boardListActions.renameBoardListSuccess, (state, { list }) => ({
    ...state,
    lists: state.lists.map((l) => (l.id === list.id ? { ...l, name: list.name } : l)),
    allLists: state.allLists.map((l) => (l.id === list.id ? { ...l, name: list.name } : l)),
  })),
  on(boardListActions.deleteBoardListSuccess, (state, { listId }) => ({
    ...state,
    lists: state.lists.filter((l) => l.id !== listId),
    allLists: state.allLists.filter((l) => l.id !== listId),
  }))
);
