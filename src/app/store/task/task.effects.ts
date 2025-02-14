import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as taskActions from './task.actions';
import { inject, Injectable } from '@angular/core';
import { TaskAPIService } from 'src/app/services/task/task.api.service';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { EMPTY, from, Observable, of } from 'rxjs';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { AddTaskComponent } from 'src/app/views/add-task/add-task.component';

@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private taskAPIService: TaskAPIService,
    private addTaskDialogRef: MatDialogRef<AddTaskComponent>
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

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.taskWasUpdated),
      switchMap(({ task }) =>
        from(this.taskAPIService.editTask(task)).pipe(
          map((res: boolean) =>
            res
              ? taskActions.taskWasUpdatedSuccessfully()
              : taskActions.taskUpdateFailed({ error: 'Failed to update task' })
          ),
          catchError(() =>
            of(taskActions.taskUpdateFailed({ error: 'Failed to update task' }))
          )
        )
      )
    )
  );

  updateTaskSuccessful$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(taskActions.taskWasUpdatedSuccessfully),
        tap(() => {
          this.addTaskDialogRef.close();
        })
      ),
    { dispatch: false }
  );
}
