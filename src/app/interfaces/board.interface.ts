export interface Board {
  id?: number;
  name: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
  user_id?: string;
  /** True when the current user is a collaborator, not the owner. */
  isCollaborated?: boolean;
  /** Display name of the board owner; only set for collaborated boards. */
  ownerDisplayName?: string;
  /** True when the current user may edit (rename/modify) this board. Always true for owners. */
  canEdit?: boolean;
}
