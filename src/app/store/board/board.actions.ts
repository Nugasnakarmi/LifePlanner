import { Board } from 'src/app/interfaces/board.interface';
import { BoardTemplate } from 'src/app/interfaces/board-template.interface';
import { createAction, props } from '@ngrx/store';

export const addBoard = createAction(
  '[Boards] Create Board button was clicked',
  props<{ board: Board }>()
);

export const addBoardSuccess = createAction(
  '[Boards] Board was added successfully',
  props<{ board: Board }>()
);

export const loadBoards = createAction('[Boards] Load Boards');
export const loadBoardsSuccess = createAction(
  '[Boards] Load Boards Success',
  props<{ boards: Board[] }>()
);

export const loadBoardsFailure = createAction(
  '[Boards] Load Boards Failure',
  props<{ error: any }>()
);

export const boardEdited = createAction(
  '[Boards] Board was updated',
  props<{ board: Board }>()
);

export const boardEditedSuccessfully = createAction(
  '[Boards] Board was edited successfully',
  props<{ board: Board }>()
);

export const boardEditFailed = createAction(
  '[Boards] Board edit failed',
  props<{ error: any }>()
);

export const selectBoard = createAction(
  '[Boards] Board was selected',
  props<{ board: Board }>()
);

export const deleteBoard = createAction(
  '[Boards] Delete Board',
  props<{ boardId: number }>()
);

export const deleteBoardSuccess = createAction(
  '[Boards] Delete Board Success',
  props<{ boardId: number }>()
);

export const deleteBoardFailure = createAction(
  '[Boards] Delete Board Failure',
  props<{ error: any }>()
);

export const createBoardFromTemplate = createAction(
  '[Boards] Create Board From Template',
  props<{ template: BoardTemplate }>()
);
