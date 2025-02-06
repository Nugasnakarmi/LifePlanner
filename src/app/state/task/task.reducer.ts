import { createReducer, on } from '@ngrx/store';
import { IdeaTaskState } from 'src/app/state/task/task.state.interface';
import * as taskActions from './task.actions';

export const initialState: IdeaTaskState = {
  tasks: [],
};
export const tasksReducer = createReducer(
  initialState,
  on(taskActions.loadTaskSuccess, (state, { tasks }) => ({ ...state, tasks }))
);
