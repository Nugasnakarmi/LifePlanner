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
