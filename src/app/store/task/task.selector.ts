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

export const selectTaskStatusCounts = createSelector(selectTasks, (tasks) => {
  const counts = tasks.reduce(
    (acc, t) => {
      if (t.status === TaskStatus.WorkingOn) {
        acc[TaskStatus.WorkingOn]++;
      } else if (t.status === TaskStatus.Completed) {
        acc[TaskStatus.Completed]++;
      } else {
        acc[TaskStatus.Initiated]++;
      }
      return acc;
    },
    {
      [TaskStatus.Initiated]: 0,
      [TaskStatus.WorkingOn]: 0,
      [TaskStatus.Completed]: 0,
    }
  );
  return { ...counts, total: tasks.length };
});
