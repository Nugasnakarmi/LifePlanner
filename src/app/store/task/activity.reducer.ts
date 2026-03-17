import { createReducer, on } from '@ngrx/store';
import { ActivityState } from './activity.state.interface';
import * as activityActions from './activity.actions';

export const initialActivityState: ActivityState = {
  activities: [],
  loading: false,
};

export const activityReducer = createReducer(
  initialActivityState,
  on(activityActions.loadActivities, (state) => ({
    ...state,
    loading: true,
  })),
  on(activityActions.loadActivitiesSuccess, (state, { activities }) => ({
    ...state,
    activities,
    loading: false,
  })),
  on(activityActions.loadActivitiesFailure, (state) => ({
    ...state,
    loading: false,
  })),
  on(activityActions.clearActivities, (state) => ({
    ...state,
    activities: [],
    loading: false,
  })),
  on(activityActions.addActivityToTaskSuccess, (state, { activity, taskActivity }) => ({
    ...state,
    activities: [...state.activities, {
      ...activity,
      task_activity_id: taskActivity.id!,
      position: taskActivity.position ?? 0,
      completed: taskActivity.completed ?? false,
    }],
  })),
  on(activityActions.updateActivitySuccess, (state, { activity }) => ({
    ...state,
    activities: state.activities.map((a) =>
      a.id === activity.id ? { ...a, ...activity } : a
    ),
  })),
  on(activityActions.removeActivityFromTaskSuccess, (state, { activityId }) => ({
    ...state,
    activities: state.activities.filter((a) => a.id !== activityId),
  })),
  on(activityActions.deleteActivitySuccess, (state, { activityId }) => ({
    ...state,
    activities: state.activities.filter((a) => a.id !== activityId),
  })),
  on(activityActions.toggleActivityCompleteSuccess, (state, { activityId, completed }) => ({
    ...state,
    activities: state.activities.map((a) =>
      a.id === activityId ? { ...a, completed } : a
    ),
  }))
);

