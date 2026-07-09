import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BoardTemplateState } from './board-template.state.interface';

export const selectBoardTemplateFeature =
  createFeatureSelector<BoardTemplateState>('board-template');

export const selectBoardTemplates = createSelector(
  selectBoardTemplateFeature,
  (state) => state.templates
);

export const selectBoardTemplatesLoading = createSelector(
  selectBoardTemplateFeature,
  (state) => state.loading
);

export const selectBoardTemplatesSaving = createSelector(
  selectBoardTemplateFeature,
  (state) => state.saving
);

export const selectTemplateInvitations = createSelector(
  selectBoardTemplateFeature,
  (state) => state.invitations
);

export const selectTemplateInvitationsLoading = createSelector(
  selectBoardTemplateFeature,
  (state) => state.invitationsLoading
);

export const selectPendingTemplateInvitations = createSelector(
  selectBoardTemplateFeature,
  (state) => state.pendingTemplateInvitations
);
