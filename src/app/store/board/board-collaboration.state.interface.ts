import { BoardCollaborator, BoardInvitation, PendingEmailInvitation, PendingInvitationWithBoard } from 'src/app/interfaces/board-collaborator.interface';

export interface BoardCollaborationState {
  collaborators: BoardCollaborator[];
  invitations: BoardInvitation[];
  pendingInvitations: PendingInvitationWithBoard[];
  pendingEmailInvitations: PendingEmailInvitation[];
  loading: boolean;
  error: string | null;
}
