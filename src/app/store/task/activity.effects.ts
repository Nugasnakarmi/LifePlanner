import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { ActivityApiService } from 'src/app/services/task/activity.api.service';
import { ToastrService } from 'ngx-toastr';
import * as activityActions from './activity.actions';
import { DIALOG_CACHE_KEYS, DialogFormCacheService } from 'src/app/services/dialog-form-cache/dialog-form-cache.service';

@Injectable()
export class ActivityEffects {
  activityApiService = inject(ActivityApiService);
  private formCache = inject(DialogFormCacheService);
  private toastr = inject(ToastrService);

  loadActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activityActions.loadActivities),
      switchMap(({ taskId }) =>
        from(this.activityApiService.getActivitiesByTaskId(taskId)).pipe(
          map((activities) => activityActions.loadActivitiesSuccess({ activities })),
          catchError((error) => {
            this.toastr.error('Failed to load activities');
            return of(activityActions.loadActivitiesFailure({ error }));
          })
        )
      )
    )
  );

  addActivityToTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activityActions.addActivityToTask),
      mergeMap(({ taskId, activity, position }) =>
        from(this.activityApiService.addActivityToTask(taskId, activity, position)).pipe(
          map((result) => {
            if (!result) {
              this.toastr.error('Failed to add activity');
              return activityActions.addActivityToTaskFailure({ error: 'Failed to add activity to task' });
            }
            return activityActions.addActivityToTaskSuccess({
              activity: result.activity,
              taskActivity: result.taskActivity,
            });
          }),
          catchError((error) => {
            this.toastr.error('Failed to add activity');
            return of(activityActions.addActivityToTaskFailure({ error }));
          })
        )
      )
    )
  );

  updateActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activityActions.updateActivity),
      mergeMap(({ activity }) =>
        from(this.activityApiService.updateActivity(activity)).pipe(
          map((success) => {
            if (!success) {
              this.toastr.error('Failed to update activity');
              return activityActions.updateActivityFailure({ error: 'Failed to update activity' });
            }
            return activityActions.updateActivitySuccess({ activity });
          }),
          catchError((error) => {
            this.toastr.error('Failed to update activity');
            return of(activityActions.updateActivityFailure({ error }));
          })
        )
      )
    )
  );

  removeActivityFromTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activityActions.removeActivityFromTask),
      mergeMap(({ taskActivityId, activityId }) =>
        from(this.activityApiService.removeActivityFromTask(taskActivityId, activityId)).pipe(
          map((success) => {
            if (!success) {
              this.toastr.error('Failed to remove activity');
              return activityActions.removeActivityFromTaskFailure({ error: 'Failed to remove activity from task' });
            }
            return activityActions.removeActivityFromTaskSuccess({ activityId });
          }),
          catchError((error) => {
            this.toastr.error('Failed to remove activity');
            return of(activityActions.removeActivityFromTaskFailure({ error }));
          })
        )
      )
    )
  );

  deleteActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activityActions.deleteActivity),
      mergeMap(({ activityId }) =>
        from(this.activityApiService.deleteActivity(activityId)).pipe(
          map((success) => {
            if (!success) {
              this.toastr.error('Failed to delete activity');
              return activityActions.deleteActivityFailure({ error: 'Failed to delete activity' });
            }
            return activityActions.deleteActivitySuccess({ activityId });
          }),
          catchError((error) => {
            this.toastr.error('Failed to delete activity');
            return of(activityActions.deleteActivityFailure({ error }));
          })
        )
      )
    )
  );

  toggleActivityComplete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activityActions.toggleActivityComplete),
      mergeMap(({ taskActivityId, activityId, completed }) =>
        from(this.activityApiService.toggleActivityComplete(taskActivityId, completed)).pipe(
          map((success) => {
            if (!success) {
              this.toastr.error('Failed to update activity');
              return activityActions.toggleActivityCompleteFailure({ error: 'Failed to update activity completion' });
            }
            return activityActions.toggleActivityCompleteSuccess({ activityId, completed });
          }),
          catchError((error) => {
            this.toastr.error('Failed to update activity');
            return of(activityActions.toggleActivityCompleteFailure({ error }));
          })
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

