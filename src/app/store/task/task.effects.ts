import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as taskActions from './task.actions';
import { inject, Injectable } from '@angular/core';
import { TaskAPIService } from 'src/app/services/task/task.api.service';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
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
}
