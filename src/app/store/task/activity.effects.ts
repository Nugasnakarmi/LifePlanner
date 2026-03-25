import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, switchMap, tap } from 'rxjs';
import { ActivityApiService } from 'src/app/services/task/activity.api.service';
import * as activityActions from './activity.actions';
import { DIALOG_CACHE_KEYS, DialogFormCacheService } from 'src/app/services/dialog-form-cache/dialog-form-cache.service';

@Injectable()
export class ActivityEffects {
  activityApiService = inject(ActivityApiService);
  private formCache = inject(DialogFormCacheService);

  loadActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activityActions.loadActivities),
      switchMap(({ taskId }) =>
        this.activityApiService
          .getActivitiesByTaskId(taskId)
          .then((activities) =>
            activityActions.loadActivitiesSuccess({ activities })
          )
          .catch((error) =>
            activityActions.loadActivitiesFailure({ error })
          )
      )
    )
  );

  addActivityToTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activityActions.addActivityToTask),
      mergeMap(({ taskId, activity, position }) =>
        this.activityApiService
          .addActivityToTask(taskId, activity, position)
          .then((result) =>
            result
              ? activityActions.addActivityToTaskSuccess({
                  activity: result.activity,
                  taskActivity: result.taskActivity,
                })
              : activityActions.addActivityToTaskFailure({
                  error: 'Failed to add activity to task',
                })
          )
          .catch((error) =>
            activityActions.addActivityToTaskFailure({ error })
          )
      )
    )
  );

  updateActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activityActions.updateActivity),
      mergeMap(({ activity }) =>
        this.activityApiService
          .updateActivity(activity)
          .then((success) =>
            success
              ? activityActions.updateActivitySuccess({ activity })
              : activityActions.updateActivityFailure({
                  error: 'Failed to update activity',
                })
          )
          .catch((error) =>
            activityActions.updateActivityFailure({ error })
          )
      )
    )
  );

  removeActivityFromTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activityActions.removeActivityFromTask),
      mergeMap(({ taskActivityId, activityId }) =>
        this.activityApiService
          .removeActivityFromTask(taskActivityId, activityId)
          .then((success) =>
            success
              ? activityActions.removeActivityFromTaskSuccess({ activityId })
              : activityActions.removeActivityFromTaskFailure({
                  error: 'Failed to remove activity from task',
                })
          )
          .catch((error) =>
            activityActions.removeActivityFromTaskFailure({ error })
          )
      )
    )
  );

  deleteActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activityActions.deleteActivity),
      mergeMap(({ activityId }) =>
        this.activityApiService
          .deleteActivity(activityId)
          .then((success) =>
            success
              ? activityActions.deleteActivitySuccess({ activityId })
              : activityActions.deleteActivityFailure({
                  error: 'Failed to delete activity',
                })
          )
          .catch((error) =>
            activityActions.deleteActivityFailure({ error })
          )
      )
    )
  );

  toggleActivityComplete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activityActions.toggleActivityComplete),
      mergeMap(({ taskActivityId, activityId, completed }) =>
        this.activityApiService
          .toggleActivityComplete(taskActivityId, completed)
          .then((success) =>
            success
              ? activityActions.toggleActivityCompleteSuccess({ activityId, completed })
              : activityActions.toggleActivityCompleteFailure({
                  error: 'Failed to update activity completion',
                })
          )
          .catch((error) =>
            activityActions.toggleActivityCompleteFailure({ error })
          )
      )
    )
  );

  clearActivityDraft$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(activityActions.addActivityToTaskSuccess),
        tap(() => this.formCache.clear(DIALOG_CACHE_KEYS.ACTIVITY_FORM))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}

