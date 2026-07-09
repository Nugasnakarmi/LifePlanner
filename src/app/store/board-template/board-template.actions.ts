import { createAction, props } from '@ngrx/store';
import { BoardTemplate, PendingTemplateInvitation, TemplateInvitation } from 'src/app/interfaces/board-template.interface';

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

export const editBoardTemplate = createAction(
  '[Board Templates] Edit',
  props<{ template: BoardTemplate }>()
);

export const editBoardTemplateSuccess = createAction(
  '[Board Templates] Edit Success',
  props<{ template: BoardTemplate }>()
);

export const editBoardTemplateFailure = createAction(
  '[Board Templates] Edit Failure',
  props<{ error: any; dbId: number }>()
);

export const setTemplateShareable = createAction(
  '[Board Templates] Set Shareable',
  props<{ dbId: number; isShareable: boolean }>()
);

export const setTemplateShareableSuccess = createAction(
  '[Board Templates] Set Shareable Success',
  props<{ dbId: number; isShareable: boolean }>()
);

export const setTemplateShareableFailure = createAction(
  '[Board Templates] Set Shareable Failure',
  props<{ error: any }>()
);

export const cloneTemplate = createAction(
  '[Board Templates] Clone',
  props<{ templateId: number }>()
);

export const cloneTemplateSuccess = createAction(
  '[Board Templates] Clone Success',
  props<{ template: BoardTemplate }>()
);

export const cloneTemplateFailure = createAction(
  '[Board Templates] Clone Failure',
  props<{ error: any }>()
);

// ── Template invitations (owner) ──────────────────────────

export const loadTemplateInvitations = createAction(
  '[Board Templates] Load Invitations',
  props<{ templateId: number }>()
);

export const loadTemplateInvitationsSuccess = createAction(
  '[Board Templates] Load Invitations Success',
  props<{ invitations: TemplateInvitation[] }>()
);

export const loadTemplateInvitationsFailure = createAction(
  '[Board Templates] Load Invitations Failure',
  props<{ error: any }>()
);

export const sendTemplateInvitation = createAction(
  '[Board Templates] Send Invitation',
  props<{ templateId: number; email: string }>()
);

export const sendTemplateInvitationSuccess = createAction(
  '[Board Templates] Send Invitation Success',
  props<{ invitation: TemplateInvitation }>()
);

export const sendTemplateInvitationFailure = createAction(
  '[Board Templates] Send Invitation Failure',
  props<{ error: any }>()
);

export const revokeTemplateInvitation = createAction(
  '[Board Templates] Revoke Invitation',
  props<{ invitationId: number }>()
);

export const revokeTemplateInvitationSuccess = createAction(
  '[Board Templates] Revoke Invitation Success',
  props<{ invitationId: number }>()
);

export const revokeTemplateInvitationFailure = createAction(
  '[Board Templates] Revoke Invitation Failure',
  props<{ error: any }>()
);

export const clearTemplateInvitations = createAction(
  '[Board Templates] Clear Invitations'
);

// ── Template invitations (recipient) ─────────────────────

export const loadPendingTemplateInvitations = createAction(
  '[Board Templates] Load Pending Invitations'
);

export const loadPendingTemplateInvitationsSuccess = createAction(
  '[Board Templates] Load Pending Invitations Success',
  props<{ invitations: PendingTemplateInvitation[] }>()
);

export const loadPendingTemplateInvitationsFailure = createAction(
  '[Board Templates] Load Pending Invitations Failure',
  props<{ error: any }>()
);

export const respondToTemplateInvitation = createAction(
  '[Board Templates] Respond To Invitation',
  props<{ invitationId: number; accept: boolean }>()
);

export const respondToTemplateInvitationSuccess = createAction(
  '[Board Templates] Respond To Invitation Success',
  props<{ invitationId: number; accepted: boolean; templateId?: number }>()
);

export const respondToTemplateInvitationFailure = createAction(
  '[Board Templates] Respond To Invitation Failure',
  props<{ error: any }>()
);
