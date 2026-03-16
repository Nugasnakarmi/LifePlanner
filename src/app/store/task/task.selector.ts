import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IdeaTaskState } from './task.state.interface';
import { TaskStatus } from 'src/app/enums/task-status.enum';

export const selectTaskFeature =
  createFeatureSelector<IdeaTaskState>('idea-task');
export const selectTasks = createSelector(
  selectTaskFeature,
  (state) => state.tasks
);
export const selectLoadingState = createSelector(
  selectTaskFeature,
  (state) => state.loading
);

export const selectTaskStatusCounts = createSelector(selectTasks, (tasks) => ({
  [TaskStatus.Initiated]: tasks.filter((t) => t.status === TaskStatus.Initiated || !t.status).length,
  [TaskStatus.WorkingOn]: tasks.filter((t) => t.status === TaskStatus.WorkingOn).length,
  [TaskStatus.Completed]: tasks.filter((t) => t.status === TaskStatus.Completed).length,
  total: tasks.length,
}));
