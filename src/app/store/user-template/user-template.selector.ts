import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserTemplateState } from './user-template.state.interface';

export const selectUserTemplateFeature =
  createFeatureSelector<UserTemplateState>('user-template');

export const selectUserTemplates = createSelector(
  selectUserTemplateFeature,
  (state) => state.templates
);

export const selectUserTemplatesLoading = createSelector(
  selectUserTemplateFeature,
  (state) => state.loading
);

export const selectUserTemplatesSaving = createSelector(
  selectUserTemplateFeature,
  (state) => state.saving
);
