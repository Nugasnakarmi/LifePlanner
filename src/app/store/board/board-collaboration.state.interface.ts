import { BoardCollaborator, BoardInvitation, PendingInvitationWithBoard } from 'src/app/interfaces/board-collaborator.interface';

export interface BoardCollaborationState {
  collaborators: BoardCollaborator[];
  invitations: BoardInvitation[];
  pendingInvitations: PendingInvitationWithBoard[];
  loading: boolean;
  error: string | null;
}
