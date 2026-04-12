import { BoardCollaborator, BoardInvitation } from 'src/app/interfaces/board-collaborator.interface';

export interface BoardCollaborationState {
  collaborators: BoardCollaborator[];
  invitations: BoardInvitation[];
  pendingInvitations: BoardCollaborator[];
  loading: boolean;
  error: string | null;
}
