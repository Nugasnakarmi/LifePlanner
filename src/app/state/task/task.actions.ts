import { createAction, createActionGroup, props } from '@ngrx/store';

import { IdeaTask } from 'src/app/interfaces/idea-task.interface';

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
