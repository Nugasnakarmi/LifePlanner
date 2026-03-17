import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActivityState } from './activity.state.interface';

export const selectActivityFeature =
  createFeatureSelector<ActivityState>('activity');

export const selectActivities = createSelector(
  selectActivityFeature,
  (state) => state.activities
);

export const selectActivitiesLoading = createSelector(
  selectActivityFeature,
  (state) => state.loading
);
