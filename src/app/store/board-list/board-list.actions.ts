import { createAction, props } from '@ngrx/store';
import { BoardList } from 'src/app/interfaces/board-list.interface';

export const loadBoardLists = createAction(
  '[BoardLists] Load Lists',
  props<{ boardId: number }>()
);
export const loadBoardListsSuccess = createAction(
  '[BoardLists] Load Lists Success',
  props<{ lists: BoardList[] }>()
);
export const loadBoardListsFailure = createAction(
  '[BoardLists] Load Lists Failure',
  props<{ error: any }>()
);

export const loadAllBoardListsForUser = createAction(
  '[BoardLists] Load All Lists For User'
);
export const loadAllBoardListsForUserSuccess = createAction(
  '[BoardLists] Load All Lists For User Success',
  props<{ lists: BoardList[] }>()
);
export const loadAllBoardListsForUserFailure = createAction(
  '[BoardLists] Load All Lists For User Failure',
  props<{ error: any }>()
);

export const clearBoardLists = createAction('[BoardLists] Clear Lists');

export const addBoardList = createAction(
  '[BoardLists] Add List',
  props<{ boardId: number; name: string }>()
);
export const addBoardListSuccess = createAction(
  '[BoardLists] Add List Success',
  props<{ list: BoardList }>()
);
export const addBoardListFailure = createAction(
  '[BoardLists] Add List Failure',
  props<{ error: any }>()
);

export const renameBoardList = createAction(
  '[BoardLists] Rename List',
  props<{ listId: number; name: string }>()
);
export const renameBoardListSuccess = createAction(
  '[BoardLists] Rename List Success',
  props<{ list: BoardList }>()
);
export const renameBoardListFailure = createAction(
  '[BoardLists] Rename List Failure',
  props<{ error: any }>()
);

export const deleteBoardList = createAction(
  '[BoardLists] Delete List',
  props<{ listId: number }>()
);
export const deleteBoardListSuccess = createAction(
  '[BoardLists] Delete List Success',
  props<{ listId: number }>()
);
export const deleteBoardListFailure = createAction(
  '[BoardLists] Delete List Failure',
  props<{ error: any }>()
);
