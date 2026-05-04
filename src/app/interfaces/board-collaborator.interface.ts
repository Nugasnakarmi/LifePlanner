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

/** Pending direct invitation visible to the invitee (returned by the RPC). */
export interface PendingInvitationWithBoard {
  id: number;
  board_id: number;
  role: CollaboratorRole;
  invited_by?: string;
  created_at: string;
  board_name: string;
  board_description?: string;
  inviter_display_name: string;
}

export interface BoardInvitation {
  id: number;
  board_id: number;
  email: string;
  role: CollaboratorRole;
  invited_by: string;
  token: string;
  status: InvitationStatus;
  created_at: string;
  expires_at: string;
}

/** Pending email invitation visible to the invitee (returned by the RPC). */
export interface PendingEmailInvitation {
  id: number;
  board_id: number;
  role: CollaboratorRole;
  created_at: string;
  expires_at: string;
  board_name: string;
  board_description?: string;
  inviter_display_name: string;
}
