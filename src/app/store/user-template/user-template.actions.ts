import { createAction, props } from '@ngrx/store';
import { BoardTemplate } from 'src/app/interfaces/board-template.interface';

export const loadUserTemplates = createAction('[User Templates] Load');

export const loadUserTemplatesSuccess = createAction(
  '[User Templates] Load Success',
  props<{ templates: BoardTemplate[] }>()
);

export const loadUserTemplatesFailure = createAction(
  '[User Templates] Load Failure',
  props<{ error: any }>()
);

export const saveUserTemplate = createAction(
  '[User Templates] Save',
  props<{ template: BoardTemplate }>()
);

export const saveUserTemplateSuccess = createAction(
  '[User Templates] Save Success',
  props<{ template: BoardTemplate }>()
);

export const saveUserTemplateFailure = createAction(
  '[User Templates] Save Failure',
  props<{ error: any }>()
);

export const deleteUserTemplate = createAction(
  '[User Templates] Delete',
  props<{ dbId: number }>()
);

export const deleteUserTemplateSuccess = createAction(
  '[User Templates] Delete Success',
  props<{ dbId: number }>()
);

export const deleteUserTemplateFailure = createAction(
  '[User Templates] Delete Failure',
  props<{ error: any }>()
);
