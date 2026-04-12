import { createAction, props } from '@ngrx/store';
import {
  BoardCollaborator,
  BoardInvitation,
  CollaboratorRole,
  PendingInvitationWithBoard,
} from 'src/app/interfaces/board-collaborator.interface';

// ── Load collaborators for a board ────────────────────────
export const loadCollaborators = createAction(
  '[Board Collaboration] Load Collaborators',
  props<{ boardId: number }>()
);

export const loadCollaboratorsSuccess = createAction(
  '[Board Collaboration] Load Collaborators Success',
  props<{ collaborators: BoardCollaborator[] }>()
);

export const loadCollaboratorsFailure = createAction(
  '[Board Collaboration] Load Collaborators Failure',
  props<{ error: string }>()
);

// ── Add collaborator ──────────────────────────────────────
export const addCollaborator = createAction(
  '[Board Collaboration] Add Collaborator',
  props<{ boardId: number; userId: string; role: CollaboratorRole }>()
);

export const addCollaboratorSuccess = createAction(
  '[Board Collaboration] Add Collaborator Success',
  props<{ collaborator: BoardCollaborator }>()
);

export const addCollaboratorFailure = createAction(
  '[Board Collaboration] Add Collaborator Failure',
  props<{ error: string }>()
);

// ── Update collaborator role ──────────────────────────────
export const updateCollaboratorRole = createAction(
  '[Board Collaboration] Update Collaborator Role',
  props<{ collaboratorId: number; role: CollaboratorRole }>()
);

export const updateCollaboratorRoleSuccess = createAction(
  '[Board Collaboration] Update Collaborator Role Success',
  props<{ collaboratorId: number; role: CollaboratorRole }>()
);

export const updateCollaboratorRoleFailure = createAction(
  '[Board Collaboration] Update Collaborator Role Failure',
  props<{ error: string }>()
);

// ── Remove collaborator ──────────────────────────────────
export const removeCollaborator = createAction(
  '[Board Collaboration] Remove Collaborator',
  props<{ collaboratorId: number }>()
);

export const removeCollaboratorSuccess = createAction(
  '[Board Collaboration] Remove Collaborator Success',
  props<{ collaboratorId: number }>()
);

export const removeCollaboratorFailure = createAction(
  '[Board Collaboration] Remove Collaborator Failure',
  props<{ error: string }>()
);

// ── Respond to invitation (accept/decline) ────────────────
export const respondToInvitation = createAction(
  '[Board Collaboration] Respond To Invitation',
  props<{ collaboratorId: number; accept: boolean }>()
);

export const respondToInvitationSuccess = createAction(
  '[Board Collaboration] Respond To Invitation Success',
  props<{ collaboratorId: number; accepted: boolean }>()
);

export const respondToInvitationFailure = createAction(
  '[Board Collaboration] Respond To Invitation Failure',
  props<{ error: string }>()
);

// ── Load pending invitations for current user ─────────────
export const loadPendingInvitations = createAction(
  '[Board Collaboration] Load Pending Invitations'
);

export const loadPendingInvitationsSuccess = createAction(
  '[Board Collaboration] Load Pending Invitations Success',
  props<{ pendingInvitations: PendingInvitationWithBoard[] }>()
);

export const loadPendingInvitationsFailure = createAction(
  '[Board Collaboration] Load Pending Invitations Failure',
  props<{ error: string }>()
);

// ── Email invitations ─────────────────────────────────────
export const sendInvitation = createAction(
  '[Board Collaboration] Send Invitation',
  props<{ boardId: number; email: string; role: CollaboratorRole }>()
);

export const sendInvitationSuccess = createAction(
  '[Board Collaboration] Send Invitation Success',
  props<{ invitation: BoardInvitation }>()
);

export const sendInvitationFailure = createAction(
  '[Board Collaboration] Send Invitation Failure',
  props<{ error: string }>()
);

export const loadInvitations = createAction(
  '[Board Collaboration] Load Invitations',
  props<{ boardId: number }>()
);

export const loadInvitationsSuccess = createAction(
  '[Board Collaboration] Load Invitations Success',
  props<{ invitations: BoardInvitation[] }>()
);

export const loadInvitationsFailure = createAction(
  '[Board Collaboration] Load Invitations Failure',
  props<{ error: string }>()
);

export const revokeInvitation = createAction(
  '[Board Collaboration] Revoke Invitation',
  props<{ invitationId: number }>()
);

export const revokeInvitationSuccess = createAction(
  '[Board Collaboration] Revoke Invitation Success',
  props<{ invitationId: number }>()
);

export const revokeInvitationFailure = createAction(
  '[Board Collaboration] Revoke Invitation Failure',
  props<{ error: string }>()
);

// ── Clear collaboration state (e.g. when navigating away) ─
export const clearCollaboration = createAction(
  '[Board Collaboration] Clear'
);
