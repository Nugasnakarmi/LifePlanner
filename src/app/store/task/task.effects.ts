import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as taskActions from './task.actions';
import { inject, Injectable } from '@angular/core';
import { TaskAPIService } from 'src/app/services/task/task.api.service';
import { catchError, map, mergeMap, switchMap, concatMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Injectable()
export class TaskEffects {
  dialogService = inject(DialogService);
  constructor(
    private actions$: Actions,
    private taskAPIService: TaskAPIService
  ) {}

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.landingPageInitialized),
      mergeMap(() =>
        from(this.taskAPIService.getTasks()).pipe(
          map((tasks: IdeaTask[]) => taskActions.loadTaskSuccess({ tasks })),
          catchError((error: any) =>
            of(taskActions.loadTasksFailure({ error }))
          )
        )
      )
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.taskWasAdded),
      switchMap(({ task }) =>
        from(this.taskAPIService.addTask(task)).pipe(
          map((addedTask: IdeaTask | null) =>
            addedTask
              ? taskActions.taskWasAddedSuccessfully({ task: addedTask })
              : taskActions.taskAddFailed({ error: 'Failed to add task' })
          ),
          catchError(() =>
            of(taskActions.taskAddFailed({ error: 'Failed to add task' }))
          )
        )
      )
    )
  );

  updateTask$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(taskActions.taskWasUpdated),
        switchMap(({ task }) =>
          from(this.taskAPIService.editTask(task)).pipe(
            map((res: boolean) =>
              res
                ? taskActions.taskWasUpdatedSuccessfully({ task })
                : taskActions.taskUpdateFailed({
                    error: 'Failed to update task',
                  })
            ),
            catchError(() =>
              of(
                taskActions.taskUpdateFailed({
                  error: 'Failed to update task',
                })
              )
            )
          )
        )
      ),
    { dispatch: true }
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.taskWasDeleted),
      switchMap(({ taskId }) =>
        from(this.taskAPIService.deleteTask(taskId)).pipe(
          map((res: boolean) =>
            res
              ? taskActions.taskWasDeletedSuccessfully({ taskId })
              : taskActions.taskDeletionFailed({
                  error: 'Failed to delete task',
                })
          ),
          catchError(() =>
            of(
              taskActions.taskDeletionFailed({
                error: 'Failed to delete task',
              })
            )
          )
        )
      )
    )
  );

  updateTaskStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.taskStatusUpdated),
      concatMap(({ taskId, status }) =>
        from(this.taskAPIService.updateTaskStatus(taskId, status)).pipe(
          map((res: boolean) =>
            res
              ? taskActions.taskStatusUpdatedSuccessfully({ taskId, status })
              : taskActions.taskStatusUpdateFailed({
                  error: 'Failed to update task status',
                })
          ),
          catchError(() =>
            of(
              taskActions.taskStatusUpdateFailed({
                error: 'Failed to update task status',
              })
            )
          )
        )
      )
    )
  );

  updateTaskCompletionStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.taskCompletionStatusUpdated),
      concatMap(({ taskId, completionStatus }) =>
        from(this.taskAPIService.updateCompletionStatus(taskId, completionStatus)).pipe(
          map((res: boolean) =>
            res
              ? taskActions.taskCompletionStatusUpdatedSuccessfully({ taskId, completionStatus })
              : taskActions.taskCompletionStatusUpdateFailed({
                  error: 'Failed to update task completion status',
                })
          ),
          catchError(() =>
            of(
              taskActions.taskCompletionStatusUpdateFailed({
                error: 'Failed to update task completion status',
              })
            )
          )
        )
      )
    )
  );
}
