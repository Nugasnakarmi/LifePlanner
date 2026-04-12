export type CollaboratorRole = 'owner' | 'editor' | 'viewer';
export type InvitationStatus = 'pending' | 'accepted' | 'declined';

export interface BoardCollaborator {
  id: number;
  board_id: number;
  user_id: string;
  role: CollaboratorRole;
  invited_by?: string;
  status: InvitationStatus;
  created_at: string;
  accepted_at?: string;
  /** Joined from user_preferences for display */
  display_name?: string;
  avatar_url?: string;
}

export interface BoardInvitation {
  id: number;
  board_id: number;
  email: string;
  role: CollaboratorRole;
  invited_by: string;
  token: string;
  created_at: string;
  expires_at: string;
}
