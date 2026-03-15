import { createAction, props } from '@ngrx/store';
import { BoardTemplate } from 'src/app/interfaces/board-template.interface';

export const loadBoardTemplates = createAction('[Board Templates] Load');

export const loadBoardTemplatesSuccess = createAction(
  '[Board Templates] Load Success',
  props<{ templates: BoardTemplate[] }>()
);

export const loadBoardTemplatesFailure = createAction(
  '[Board Templates] Load Failure',
  props<{ error: any }>()
);

export const saveBoardTemplate = createAction(
  '[Board Templates] Save',
  props<{ template: BoardTemplate }>()
);

export const saveBoardTemplateSuccess = createAction(
  '[Board Templates] Save Success',
  props<{ template: BoardTemplate }>()
);

export const saveBoardTemplateFailure = createAction(
  '[Board Templates] Save Failure',
  props<{ error: any }>()
);

export const deleteBoardTemplate = createAction(
  '[Board Templates] Delete',
  props<{ dbId: number }>()
);

export const deleteBoardTemplateSuccess = createAction(
  '[Board Templates] Delete Success',
  props<{ dbId: number }>()
);

export const deleteBoardTemplateFailure = createAction(
  '[Board Templates] Delete Failure',
  props<{ error: any }>()
);
