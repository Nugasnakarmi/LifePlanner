import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IdeaTaskState } from './task.state.interface';
export const selectTaskFeature = createFeatureSelector<IdeaTaskState>('tasks');
export const selectTasks = createSelector(
  selectTaskFeature,
  (state) => state.tasks
);
