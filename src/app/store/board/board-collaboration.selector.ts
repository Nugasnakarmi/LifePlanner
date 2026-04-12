import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BoardCollaborationState } from './board-collaboration.state.interface';

export const selectBoardCollaborationFeature =
  createFeatureSelector<BoardCollaborationState>('board-collaboration');

export const selectCollaborators = createSelector(
  selectBoardCollaborationFeature,
  (state) => state.collaborators
);

export const selectInvitations = createSelector(
  selectBoardCollaborationFeature,
  (state) => state.invitations
);

export const selectPendingInvitations = createSelector(
  selectBoardCollaborationFeature,
  (state) => state.pendingInvitations
);

export const selectCollaborationLoading = createSelector(
  selectBoardCollaborationFeature,
  (state) => state.loading
);

export const selectCollaborationError = createSelector(
  selectBoardCollaborationFeature,
  (state) => state.error
);

/** Accepted collaborators only (excludes pending/declined). */
export const selectAcceptedCollaborators = createSelector(
  selectCollaborators,
  (collaborators) => collaborators.filter((c) => c.status === 'accepted')
);
