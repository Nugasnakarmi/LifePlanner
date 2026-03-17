import { createAction, props } from '@ngrx/store';
import { Activity, TaskScopedActivity } from 'src/app/interfaces/activity.interface';
import { TaskActivity } from 'src/app/interfaces/task-activity.interface';

export const loadActivities = createAction(
  '[Activities] Load Activities',
  props<{ taskId: number }>()
);
export const loadActivitiesSuccess = createAction(
  '[Activities] Load Activities Success',
  props<{ activities: TaskScopedActivity[] }>()
);
export const loadActivitiesFailure = createAction(
  '[Activities] Load Activities Failure',
  props<{ error: any }>()
);

export const clearActivities = createAction('[Activities] Clear Activities');

export const addActivityToTask = createAction(
  '[Activities] Add Activity To Task',
  props<{ taskId: number; activity: Activity; position: number }>()
);
export const addActivityToTaskSuccess = createAction(
  '[Activities] Add Activity To Task Success',
  props<{ activity: Activity; taskActivity: TaskActivity }>()
);
export const addActivityToTaskFailure = createAction(
  '[Activities] Add Activity To Task Failure',
  props<{ error: any }>()
);

export const updateActivity = createAction(
  '[Activities] Update Activity',
  props<{ activity: Activity }>()
);
export const updateActivitySuccess = createAction(
  '[Activities] Update Activity Success',
  props<{ activity: Activity }>()
);
export const updateActivityFailure = createAction(
  '[Activities] Update Activity Failure',
  props<{ error: any }>()
);

export const removeActivityFromTask = createAction(
  '[Activities] Remove Activity From Task',
  props<{ taskActivityId: number; activityId: number }>()
);
export const removeActivityFromTaskSuccess = createAction(
  '[Activities] Remove Activity From Task Success',
  props<{ activityId: number }>()
);
export const removeActivityFromTaskFailure = createAction(
  '[Activities] Remove Activity From Task Failure',
  props<{ error: any }>()
);

export const deleteActivity = createAction(
  '[Activities] Delete Activity',
  props<{ activityId: number }>()
);
export const deleteActivitySuccess = createAction(
  '[Activities] Delete Activity Success',
  props<{ activityId: number }>()
);
export const deleteActivityFailure = createAction(
  '[Activities] Delete Activity Failure',
  props<{ error: any }>()
);
