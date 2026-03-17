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

export const selectActivityProgress = createSelector(
  selectActivities,
  (activities) => {
    const total = activities.length;
    const completed = activities.filter((a) => a.completed).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, percentage, allCompleted: total > 0 && completed === total };
  }
);

