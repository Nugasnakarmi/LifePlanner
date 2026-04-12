import { inject, Injectable } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from '../supabase/supabase.service';
import { ToastrService } from 'ngx-toastr';
import { InputSanitizerService } from '../sanitizer/input-sanitizer.service';
import {
  BoardCollaborator,
  BoardInvitation,
  CollaboratorRole,
  PendingInvitationWithBoard,
} from 'src/app/interfaces/board-collaborator.interface';

@Injectable({
  providedIn: 'root',
})
export class BoardCollaborationApiService {
  private supabaseService = inject(SupabaseService);
  private toastr = inject(ToastrService);
  private sanitizer = inject(InputSanitizerService);

  // ── Collaborators ──────────────────────────────────────────

  /** Fetch all collaborators for a board (including profile info). */
  async getCollaborators(boardId: number): Promise<BoardCollaborator[]> {
    try {
      const { data, error } = await this.supabaseService.supabase
        .from('board_collaborators')
        .select('*')
        .eq('board_id', boardId)
        .order('created_at', { ascending: true });

      if (error) throw error;

      const collaborators = data ?? [];
      const userIds = [...new Set(collaborators.map((row: any) => row.user_id).filter(Boolean))];

      let profileMap = new Map<string, { display_name: string | null; avatar_url: string | null }>();

      if (userIds.length > 0) {
        const { data: profiles, error: profilesError } = await this.supabaseService.supabase
          .from('user_preferences')
          .select('user_id, display_name, avatar_url')
          .in('user_id', userIds);

        if (profilesError) throw profilesError;

        profileMap = new Map(
          (profiles ?? []).map((profile: any) => [
            profile.user_id,
            {
              display_name: profile.display_name ?? null,
              avatar_url: profile.avatar_url ?? null,
            },
          ])
        );
      }

      return collaborators.map((row: any) => {
        const profile = profileMap.get(row.user_id);
        return {
          ...row,
          display_name: profile?.display_name ?? null,
          avatar_url: profile?.avatar_url ?? null,
        };
      });
    } catch (error: any) {
      this.toastr.error(`Failed to load collaborators: ${error?.message ?? error}`);
      return [];
    }
  }

  /** Add a collaborator directly (when user_id is known). */
  async addCollaborator(
    boardId: number,
    userId: string,
    role: CollaboratorRole
  ): Promise<BoardCollaborator | null> {
    try {
      const user: User = await this.supabaseService.getUser();

      const { data, error } = await this.supabaseService.supabase
        .from('board_collaborators')
        .insert({
          board_id: boardId,
          user_id: userId,
          role,
          invited_by: user.id,
          status: 'pending',
        })
        .select()
        .single();

      if (error) throw error;

      this.toastr.success('Collaborator added');
      return data as BoardCollaborator;
    } catch (error: any) {
      this.toastr.error(`Failed to add collaborator: ${error?.message ?? error}`);
      return null;
    }
  }

  /** Update a collaborator's role. */
  async updateCollaboratorRole(
    collaboratorId: number,
    role: CollaboratorRole
  ): Promise<boolean> {
    try {
      const { error } = await this.supabaseService.supabase
        .from('board_collaborators')
        .update({ role })
        .eq('id', collaboratorId);

      if (error) throw error;

      this.toastr.success('Collaborator role updated');
      return true;
    } catch (error: any) {
      this.toastr.error(`Failed to update role: ${error?.message ?? error}`);
      return false;
    }
  }

  /** Remove a collaborator from a board. */
  async removeCollaborator(collaboratorId: number): Promise<boolean> {
    try {
      const { error } = await this.supabaseService.supabase
        .from('board_collaborators')
        .delete()
        .eq('id', collaboratorId);

      if (error) throw error;

      this.toastr.success('Collaborator removed');
      return true;
    } catch (error: any) {
      this.toastr.error(`Failed to remove collaborator: ${error?.message ?? error}`);
      return false;
    }
  }

  /** Accept or decline a collaboration invitation. */
  async respondToInvitation(
    collaboratorId: number,
    accept: boolean
  ): Promise<boolean> {
    try {
      const { error } = await this.supabaseService.supabase
        .from('board_collaborators')
        .update({
          status: accept ? 'accepted' : 'declined',
          accepted_at: accept ? new Date().toISOString() : null,
        })
        .eq('id', collaboratorId);

      if (error) throw error;

      this.toastr.success(accept ? 'Invitation accepted' : 'Invitation declined');
      return true;
    } catch (error: any) {
      this.toastr.error(`Failed to respond to invitation: ${error?.message ?? error}`);
      return false;
    }
  }

  /** Get pending invitations for the current user, including basic board info. */
  async getPendingInvitations(): Promise<PendingInvitationWithBoard[]> {
    try {
      const user: User = await this.supabaseService.getUser();

      const { data, error } = await this.supabaseService.supabase
        .from('board_collaborators')
        .select('*, board:boards(id, name, description)')
        .eq('user_id', user.id)
        .eq('status', 'pending');

      if (error) throw error;

      return (data ?? []) as PendingInvitationWithBoard[];
    } catch (error: any) {
      this.toastr.error(`Failed to load invitations: ${error?.message ?? error}`);
      return [];
    }
  }

  // ── Email Invitations ──────────────────────────────────────

  /** Send an invitation by email. */
  async sendInvitation(
    boardId: number,
    email: string,
    role: CollaboratorRole
  ): Promise<BoardInvitation | null> {
    try {
      const user: User = await this.supabaseService.getUser();
      const sanitizedEmail = this.sanitizer.sanitize(email);

      const { data, error } = await this.supabaseService.supabase
        .from('board_invitations')
        .insert({
          board_id: boardId,
          email: sanitizedEmail,
          role,
          invited_by: user.id,
        })
        .select()
        .single();

      if (error) throw error;

      this.toastr.success(`Invitation sent to ${sanitizedEmail}`);
      return data as BoardInvitation;
    } catch (error: any) {
      this.toastr.error(`Failed to send invitation: ${error?.message ?? error}`);
      return null;
    }
  }

  /** Get all pending email invitations for a board. */
  async getInvitations(boardId: number): Promise<BoardInvitation[]> {
    try {
      const { data, error } = await this.supabaseService.supabase
        .from('board_invitations')
        .select('*')
        .eq('board_id', boardId)
        .order('created_at', { ascending: false });

      if (error) throw error;

      return (data ?? []) as BoardInvitation[];
    } catch (error: any) {
      this.toastr.error(`Failed to load invitations: ${error?.message ?? error}`);
      return [];
    }
  }

  /** Revoke / delete an email invitation. */
  async revokeInvitation(invitationId: number): Promise<boolean> {
    try {
      const { error } = await this.supabaseService.supabase
        .from('board_invitations')
        .delete()
        .eq('id', invitationId);

      if (error) throw error;

      this.toastr.success('Invitation revoked');
      return true;
    } catch (error: any) {
      this.toastr.error(`Failed to revoke invitation: ${error?.message ?? error}`);
      return false;
    }
  }

  /** Accept an email invitation via token (RPC). */
  async acceptInvitationByToken(
    token: string
  ): Promise<{ success: boolean; board_id?: number; error?: string }> {
    try {
      const { data, error } = await this.supabaseService.supabase
        .rpc('accept_board_invitation', { p_token: token });

      if (error) throw error;

      const result = data as { success: boolean; board_id?: number; error?: string };
      if (result.success) {
        this.toastr.success('Invitation accepted!');
      } else {
        this.toastr.error(result.error ?? 'Failed to accept invitation');
      }
      return result;
    } catch (error: any) {
      this.toastr.error(`Failed to accept invitation: ${error?.message ?? error}`);
      return { success: false, error: error?.message ?? String(error) };
    }
  }
}

