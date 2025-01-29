import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as taskActions from "./task.actions";
import { Injectable } from "@angular/core";
import { TaskAPIService } from "src/app/services/task/task.api.service";
import { catchError, map, mergeMap } from "rxjs/operators";
import { from, Observable, of } from "rxjs";
import { IdeaTask } from "src/app/interfaces/idea-task.interface";

@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private taskAPIService: TaskAPIService
  ) {}

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.loadTasks),
      mergeMap(() => {
        const s$ = from(this.taskAPIService.getTasks());
        return s$.pipe(
          map((tasks: IdeaTask[]) => taskActions.loadTaskSuccess({ tasks })),
          catchError((error: any) => of(taskActions.loadTasksFailure({ error } as any)))
        )
      }
    )
  );
