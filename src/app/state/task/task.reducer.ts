import { createReducer, on } from '@ngrx/store';
import { IdeaTaskState } from 'src/app/state/task/task.state.interface';
import { TaskActions } from './task.actions';

export const initialState: IdeaTaskState = {
  tasks: [],
};
export const tasksReducer = createReducer(
  initialState,
  on(TaskActions.retrievedTaskList, (state, { tasks }) => ({ ...state, tasks }))
);
