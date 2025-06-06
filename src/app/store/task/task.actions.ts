import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { createAction, createActionGroup, props } from '@ngrx/store';

import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { AddTaskComponent } from 'src/app/views/add-task/add-task.component';

export const landingPageInitialized = createAction(
  '[Tasks] Landing Page Initialized'
);
export const loadTaskSuccess = createAction(
  '[Tasks] Load Tasks Success',
  props<{ tasks: IdeaTask[] }>()
);
export const loadTasksFailure = createAction(
  '[Tasks] Load Tasks Failure',
  props<{ error: any }>()
);

export const taskWasUpdated = createAction(
  '[Tasks] Task Was Updated',
  props<{ task: IdeaTask }>()
);

export const taskWasUpdatedSuccessfully = createAction(
  '[Tasks] Task Was Updated Successfully',
  props<{ task: IdeaTask }>()
);

export const taskUpdateFailed = createAction(
  '[Tasks] Task Updating Has Failed',
  props<{ error: string }>()
);

export const taskWasDeleted = createAction(
  '[Tasks] Task Deletion Initiated',
  props<{ taskId: number }>()
);

export const taskWasDeletedSuccessfully = createAction(
  '[Tasks] Task Was Deleted Successfully',
  props<{ taskId: number }>()
);

export const taskDeletionFailed = createAction(
  '[Tasks] Task Deletion Has Failed',
  props<{ error: string }>()
);
