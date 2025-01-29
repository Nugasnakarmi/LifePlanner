import { createReducer, on } from '@ngrx/store';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskApiActions } from './task.actions';

export const initialState: IdeaTaskState = [];
export const tasksReducer = createReducer(
  initialState,
  on(TaskApiActions.retrievedTaskList, (_state, { tasks }) => tasks)
);
