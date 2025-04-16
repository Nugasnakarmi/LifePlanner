import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IdeaTaskState } from './task.state.interface';
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
