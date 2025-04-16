import { createReducer, on } from '@ngrx/store';
import { IdeaTaskState } from 'src/app/store/task/task.state.interface';
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
  on(taskActions.taskWasUpdatedSuccessfully, (state, { task }) => {
    console.log('Current state:', state);
    console.log('Task received:', task);

    return {
      ...state,
      tasks: state.tasks.map((existingTask) =>
        existingTask.id === task.id
          ? { ...existingTask, ...task }
          : existingTask
      ),
      loading: false,
    };
  }),
  on(taskActions.loadTaskSuccess, (state, { tasks }) => {
    console.log('Current state:', state);
    console.log('Tasks received:', tasks);
    return {
      ...state,
      tasks,
      loading: false,
    };
  })
);
