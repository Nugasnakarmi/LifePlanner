import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Board } from 'src/app/interfaces/board.interface';
import {
  BoardCollaborator,
  BoardInvitation,
  CollaboratorRole,
} from 'src/app/interfaces/board-collaborator.interface';
import * as collabActions from 'src/app/store/board/board-collaboration.actions';
import {
  selectCollaborators,
  selectInvitations,
  selectCollaborationLoading,
} from 'src/app/store/board/board-collaboration.selector';

export interface CollaborationDialogData {
  board: Board;
}

@Component({
  selector: 'app-board-collaboration-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  styles: [`
    :host {
      display: block;
      padding: 28px 32px;
      color: #fff;
      font-family: 'Montserrat', sans-serif;
      max-width: 520px;
    }

    .dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
    }

    .dialog-header h2 {
      font-size: 22px;
      font-weight: 800;
      margin: 0;
      letter-spacing: -0.3px;
    }

    .dialog-header .close-btn {
      color: rgba(255, 255, 255, 0.5);
    }

    .dialog-header .close-btn:hover {
      color: #fff;
    }

    .board-name {
      font-size: 13px;
      color: rgba(249, 208, 122, 0.7);
      margin-top: -16px;
      margin-bottom: 20px;
    }

    .invite-section {
      display: flex;
      gap: 8px;
      align-items: flex-start;
      margin-bottom: 28px;
    }

    .invite-section mat-form-field {
      flex: 1;
    }

    .invite-section .role-select {
      width: 110px;
    }

    .invite-section .send-btn {
      margin-top: 4px;
    }

    .section-label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.3);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .section-label mat-icon {
      font-size: 14px;
      width: 14px;
      height: 14px;
      color: rgba(249, 208, 122, 0.5);
    }

    .person-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }

    .person-row:last-child {
      border-bottom: none;
    }

    .avatar-placeholder {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: rgba(249, 208, 122, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .avatar-placeholder mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: rgba(249, 208, 122, 0.6);
    }

    .avatar-img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
    }

    .person-info {
      flex: 1;
      min-width: 0;
    }

    .person-name {
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .person-status {
      font-size: 11px;
      color: rgba(255, 255, 255, 0.4);
    }

    .role-badge {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 12px;
      white-space: nowrap;
    }

    .role-badge--editor {
      background: rgba(72, 149, 239, 0.15);
      color: #4895ef;
      border: 1px solid rgba(72, 149, 239, 0.3);
    }

    .role-badge--viewer {
      background: rgba(72, 199, 142, 0.15);
      color: #48c78e;
      border: 1px solid rgba(72, 199, 142, 0.3);
    }

    .role-badge--pending {
      background: rgba(249, 208, 122, 0.12);
      color: rgba(249, 208, 122, 0.7);
      border: 1px solid rgba(249, 208, 122, 0.25);
    }

    .action-btn {
      color: rgba(255, 255, 255, 0.25);
      width: 28px;
      height: 28px;
      line-height: 28px;
    }

    .action-btn mat-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
    }

    .action-btn:hover {
      color: #ff7878;
    }

    .empty-message {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.3);
      text-align: center;
      padding: 16px 0;
    }

    .loading-container {
      display: flex;
      justify-content: center;
      padding: 24px 0;
    }

    .collaborator-list, .invitation-list {
      margin-bottom: 20px;
    }

    @media (max-width: 600px) {
      :host {
        padding: 20px 16px;
      }

      .invite-section {
        flex-wrap: wrap;
      }

      .invite-section mat-form-field {
        width: 100%;
      }

      .invite-section .role-select {
        width: 100%;
      }
    }
  `],
  template: `
    <div class="dialog-header">
      <h2>Share Board</h2>
      <button mat-icon-button class="close-btn" (click)="close()" aria-label="Close">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <div class="board-name">{{ data.board.name }}</div>

    <div class="invite-section">
      <mat-form-field appearance="outline">
        <mat-label>Email address</mat-label>
        <input matInput [formControl]="emailControl" placeholder="colleague@example.com" (keydown.enter)="sendInvitation()" />
        @if (emailControl.hasError('email') && !emailControl.hasError('required')) {
          <mat-error>Please enter a valid email</mat-error>
        }
      </mat-form-field>
      <mat-form-field appearance="outline" class="role-select">
        <mat-label>Role</mat-label>
        <mat-select [formControl]="roleControl">
          <mat-option value="editor">Editor</mat-option>
          <mat-option value="viewer">Viewer</mat-option>
        </mat-select>
      </mat-form-field>
      <button mat-raised-button color="primary" class="send-btn"
              (click)="sendInvitation()"
              [disabled]="emailControl.invalid"
              matTooltip="Send invitation">
        <mat-icon>send</mat-icon>
      </button>
    </div>

    @if (loading$ | async) {
      <div class="loading-container">
        <mat-spinner diameter="32"></mat-spinner>
      </div>
    } @else {
      <!-- Collaborators -->
      @if (collaborators$ | async; as collaborators) {
        @if (collaborators.length > 0) {
          <div class="collaborator-list">
            <div class="section-label">
              <mat-icon>group</mat-icon>
              Collaborators
            </div>
            @for (collab of collaborators; track collab.id) {
              <div class="person-row">
                @if (collab.avatar_url) {
                  <img class="avatar-img" [src]="collab.avatar_url" alt="" />
                } @else {
                  <div class="avatar-placeholder">
                    <mat-icon>person</mat-icon>
                  </div>
                }
                <div class="person-info">
                  <div class="person-name">{{ collab.display_name || 'User' }}</div>
                  <div class="person-status">{{ collab.status }}</div>
                </div>
                <span class="role-badge"
                      [class.role-badge--editor]="collab.role === 'editor'"
                      [class.role-badge--viewer]="collab.role === 'viewer'"
                      [class.role-badge--pending]="collab.status === 'pending'">
                  {{ collab.role }}
                </span>
                <button mat-icon-button class="action-btn"
                        (click)="removeCollaborator(collab.id)"
                        matTooltip="Remove collaborator"
                        [attr.aria-label]="'Remove ' + (collab.display_name || 'collaborator')">
                  <mat-icon>close</mat-icon>
                </button>
              </div>
            }
          </div>
        }
      }

      <!-- Pending email invitations -->
      @if (invitations$ | async; as invitations) {
        @if (invitations.length > 0) {
          <div class="invitation-list">
            <div class="section-label">
              <mat-icon>mail_outline</mat-icon>
              Pending Invitations
            </div>
            @for (inv of invitations; track inv.id) {
              <div class="person-row">
                <div class="avatar-placeholder">
                  <mat-icon>mail</mat-icon>
                </div>
                <div class="person-info">
                  <div class="person-name">{{ inv.email }}</div>
                  <div class="person-status">Sent {{ inv.created_at | date:'shortDate' }} · Expires {{ inv.expires_at | date:'shortDate' }}</div>
                </div>
                <span class="role-badge role-badge--pending">{{ inv.role }}</span>
                <button mat-icon-button class="action-btn"
                        (click)="revokeInvitation(inv.id)"
                        matTooltip="Revoke invitation"
                        [attr.aria-label]="'Revoke invitation to ' + inv.email">
                  <mat-icon>close</mat-icon>
                </button>
              </div>
            }
          </div>
        }
      }

      @if ((collaborators$ | async)?.length === 0 && (invitations$ | async)?.length === 0) {
        <p class="empty-message">No collaborators yet. Invite someone by email above.</p>
      }
    }
  `,
})
export class BoardCollaborationDialogComponent implements OnInit {
  private store = inject(Store);
  private dialogRef = inject(MatDialogRef<BoardCollaborationDialogComponent>);
  data: CollaborationDialogData = inject(MAT_DIALOG_DATA);

  collaborators$: Observable<BoardCollaborator[]> = this.store.select(selectCollaborators);
  invitations$: Observable<BoardInvitation[]> = this.store.select(selectInvitations);
  loading$: Observable<boolean> = this.store.select(selectCollaborationLoading);

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  roleControl = new FormControl<CollaboratorRole>('editor');

  ngOnInit(): void {
    const boardId = this.data.board.id;
    if (boardId) {
      this.store.dispatch(collabActions.loadCollaborators({ boardId }));
      this.store.dispatch(collabActions.loadInvitations({ boardId }));
    }
  }

  sendInvitation(): void {
    const email = this.emailControl.value?.trim();
    const role = this.roleControl.value ?? 'editor';
    const boardId = this.data.board.id;
    if (email && boardId && this.emailControl.valid) {
      this.store.dispatch(collabActions.sendInvitation({ boardId, email, role }));
      this.emailControl.reset();
    }
  }

  removeCollaborator(collaboratorId: number): void {
    this.store.dispatch(collabActions.removeCollaborator({ collaboratorId }));
  }

  revokeInvitation(invitationId: number): void {
    this.store.dispatch(collabActions.revokeInvitation({ invitationId }));
  }

  close(): void {
    this.store.dispatch(collabActions.clearCollaboration());
    this.dialogRef.close();
  }
}
