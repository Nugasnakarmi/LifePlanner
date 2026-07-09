import { BoardTemplate, PendingTemplateInvitation, TemplateInvitation } from 'src/app/interfaces/board-template.interface';

export interface BoardTemplateState {
  templates: BoardTemplate[];
  loading: boolean;
  saving: boolean;
  error: string | null;
  /** Outgoing invitations for the currently open share dialog (owner view). */
  invitations: TemplateInvitation[];
  invitationsLoading: boolean;
  /** Incoming pending template invitations for the current user (recipient view). */
  pendingTemplateInvitations: PendingTemplateInvitation[];
}
