import { Board } from 'src/app/interfaces/board.interface';
import { createAction, props } from '@ngrx/store';

export const addBoard = createAction(
  '[Boards] Add Board',
  props<{ board: Board }>()
);

export const loadBoardsSuccess = createAction(
  '[Boards] Load Boards Success',
  props<{ boards: Board[] }>()
);

export const loadBoardsFailure = createAction(
  '[Boards] Load Boards Failure',
  props<{ error: any }>()
);

export const boardNameEdited = createAction(
  '[Boards] Board was updated',
  props<{ board: Board }>()
);

export const boardEditedSuccessfully = createAction(
  '[Boards] Board was edited successfully'
);

export const boardEditFailed = createAction(
  '[Boards] Board edit failed',
  props<{ error: any }>()
);
