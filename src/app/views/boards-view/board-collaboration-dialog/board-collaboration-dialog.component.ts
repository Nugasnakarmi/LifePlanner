import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
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
  templateUrl: './board-collaboration-dialog.component.html',
  styleUrls: ['./board-collaboration-dialog.component.scss'],
})
export class BoardCollaborationDialogComponent implements OnInit, OnDestroy {
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
      this.store.dispatch(collabActions.clearCollaboration());
      this.store.dispatch(collabActions.loadCollaborators({ boardId }));
      this.store.dispatch(collabActions.loadInvitations({ boardId }));
    }
  }

  ngOnDestroy(): void {
    this.store.dispatch(collabActions.clearCollaboration());
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
    this.dialogRef.close();
  }
}
