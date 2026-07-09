import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BoardTemplate, TemplateInvitation } from 'src/app/interfaces/board-template.interface';
import { BoardTemplateService } from 'src/app/services/board-template/board-template.service';
import {
  selectTemplateInvitations,
  selectTemplateInvitationsLoading,
} from 'src/app/store/board-template/board-template.selector';

export interface ShareTemplateDialogData {
  template: BoardTemplate;
}

@Component({
  selector: 'app-share-template-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  templateUrl: './share-template-dialog.component.html',
  styleUrls: ['./share-template-dialog.component.scss'],
})
export class ShareTemplateDialogComponent implements OnInit, OnDestroy {
  data: ShareTemplateDialogData = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<ShareTemplateDialogComponent>);
  private boardTemplateService = inject(BoardTemplateService);
  private store = inject(Store);

  invitations$: Observable<TemplateInvitation[]> = this.store.select(selectTemplateInvitations);
  loading$: Observable<boolean> = this.store.select(selectTemplateInvitationsLoading);

  emailControl = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
    if (this.data.template.dbId) {
      this.boardTemplateService.loadTemplateInvitations(this.data.template.dbId);
    }
  }

  ngOnDestroy(): void {
    this.boardTemplateService.clearTemplateInvitations();
  }

  sendInvitation(): void {
    const email = this.emailControl.value?.trim();
    const templateId = this.data.template.dbId;
    if (email && templateId && this.emailControl.valid) {
      this.boardTemplateService.sendTemplateInvitation(templateId, email);
      this.emailControl.reset();
    }
  }

  revokeInvitation(invitationId: number): void {
    this.boardTemplateService.revokeTemplateInvitation(invitationId);
  }

  close(): void {
    this.dialogRef.close();
  }
}

