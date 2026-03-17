import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Activity, TaskScopedActivity } from 'src/app/interfaces/activity.interface';
import * as activityActions from 'src/app/store/task/activity.actions';
import { selectActivities, selectActivitiesLoading, selectActivityProgress } from 'src/app/store/task/activity.selector';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private store = inject(Store);

  activities$: Observable<TaskScopedActivity[]> = this.store.select(selectActivities);
  loading$: Observable<boolean> = this.store.select(selectActivitiesLoading);
  progress$ = this.store.select(selectActivityProgress);

  loadActivities(taskId: number): void {
    this.store.dispatch(activityActions.loadActivities({ taskId }));
  }

  addActivityToTask(taskId: number, activity: Activity, position: number): void {
    this.store.dispatch(
      activityActions.addActivityToTask({ taskId, activity, position })
    );
  }

  updateActivity(activity: Activity): void {
    this.store.dispatch(activityActions.updateActivity({ activity }));
  }

  removeActivityFromTask(taskActivityId: number, activityId: number): void {
    this.store.dispatch(
      activityActions.removeActivityFromTask({ taskActivityId, activityId })
    );
  }

  deleteActivity(activityId: number): void {
    this.store.dispatch(activityActions.deleteActivity({ activityId }));
  }

  clearActivities(): void {
    this.store.dispatch(activityActions.clearActivities());
  }

  toggleActivityComplete(taskActivityId: number, activityId: number, completed: boolean): void {
    this.store.dispatch(
      activityActions.toggleActivityComplete({ taskActivityId, activityId, completed })
    );
  }
}

