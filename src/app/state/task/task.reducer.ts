import { createReducer, on } from '@ngrx/store';
import { IdeaTaskState } from 'src/app/state/task/task.state.interface';
import * as taskActions from './task.actions';

export const initialState: IdeaTaskState = {
  tasks: [],
  loading: false,
};

export const tasksReducer = createReducer(
  initialState,
  on(taskActions.landingPageInitialized, (state) => ({
    ...state,
    loading: true,
  })),
  on(taskActions.loadTaskSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    loading: false,
  }))
);
