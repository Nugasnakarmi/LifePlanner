import { createReducer, on } from '@ngrx/store';
import { BoardCollaborationState } from './board-collaboration.state.interface';
import * as collabActions from './board-collaboration.actions';

export const initialCollaborationState: BoardCollaborationState = {
  collaborators: [],
  invitations: [],
  pendingInvitations: [],
  loading: false,
  error: null,
};

export const boardCollaborationReducer = createReducer(
  initialCollaborationState,

  // ── Load collaborators ────────────────────────────────────
  on(collabActions.loadCollaborators, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(collabActions.loadCollaboratorsSuccess, (state, { collaborators }) => ({
    ...state,
    collaborators,
    loading: false,
  })),
  on(collabActions.loadCollaboratorsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // ── Add collaborator ──────────────────────────────────────
  on(collabActions.addCollaboratorSuccess, (state, { collaborator }) => ({
    ...state,
    collaborators: [...state.collaborators, collaborator],
  })),
  on(collabActions.addCollaboratorFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  // ── Update collaborator role ──────────────────────────────
  on(collabActions.updateCollaboratorRoleSuccess, (state, { collaboratorId, role }) => ({
    ...state,
    collaborators: state.collaborators.map((c) =>
      c.id === collaboratorId ? { ...c, role } : c
    ),
  })),

  // ── Remove collaborator ───────────────────────────────────
  on(collabActions.removeCollaboratorSuccess, (state, { collaboratorId }) => ({
    ...state,
    collaborators: state.collaborators.filter((c) => c.id !== collaboratorId),
  })),

  // ── Respond to invitation ─────────────────────────────────
  on(collabActions.respondToInvitationSuccess, (state, { collaboratorId, accepted }) => ({
    ...state,
    pendingInvitations: state.pendingInvitations.filter((i) => i.id !== collaboratorId),
  })),

  // ── Load pending invitations ──────────────────────────────
  on(collabActions.loadPendingInvitations, (state) => ({
    ...state,
    loading: true,
  })),
  on(collabActions.loadPendingInvitationsSuccess, (state, { pendingInvitations }) => ({
    ...state,
    pendingInvitations,
    loading: false,
  })),
  on(collabActions.loadPendingInvitationsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // ── Email invitations ─────────────────────────────────────
  on(collabActions.sendInvitationSuccess, (state, { invitation }) => ({
    ...state,
    invitations: [...state.invitations, invitation],
  })),

  on(collabActions.loadInvitationsSuccess, (state, { invitations }) => ({
    ...state,
    invitations,
  })),

  on(collabActions.revokeInvitationSuccess, (state, { invitationId }) => ({
    ...state,
    invitations: state.invitations.filter((i) => i.id !== invitationId),
  })),

  // ── Clear ─────────────────────────────────────────────────
  on(collabActions.clearCollaboration, () => initialCollaborationState),
);
