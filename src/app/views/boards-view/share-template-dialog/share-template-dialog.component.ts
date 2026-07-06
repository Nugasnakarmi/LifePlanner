import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule, Clipboard } from '@angular/cdk/clipboard';
import { BoardTemplate } from 'src/app/interfaces/board-template.interface';
import { BoardTemplateService } from 'src/app/services/board-template/board-template.service';
import { Actions, ofType } from '@ngrx/effects';
import * as templateActions from 'src/app/store/board-template/board-template.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

export interface ShareTemplateDialogData {
  template: BoardTemplate;
}

@Component({
  selector: 'app-share-template-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTooltipModule,
    ClipboardModule,
  ],
  templateUrl: './share-template-dialog.component.html',
  styleUrls: ['./share-template-dialog.component.scss'],
})
export class ShareTemplateDialogComponent implements OnInit {
  data: ShareTemplateDialogData = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<ShareTemplateDialogComponent>);
  private boardTemplateService = inject(BoardTemplateService);
  private clipboard = inject(Clipboard);
  private actions$ = inject(Actions);

  isShareable = false;
  linkCopied = false;
  saving = false;

  private destroy$ = new Subject<void>();

  get shareUrl(): string {
    return `${window.location.origin}/boards?addTemplate=${this.data.template.dbId}`;
  }

  ngOnInit(): void {
    this.isShareable = this.data.template.isShareable ?? false;

    this.actions$
      .pipe(
        ofType(templateActions.setTemplateShareableSuccess, templateActions.setTemplateShareableFailure),
        takeUntil(this.destroy$)
      )
      .subscribe((action) => {
        this.saving = false;
        if (action.type === templateActions.setTemplateShareableSuccess.type) {
          this.isShareable = action.isShareable;
        } else {
          // Revert optimistic UI on failure
          this.isShareable = !this.isShareable;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSharing(enabled: boolean): void {
    if (!this.data.template.dbId) return;
    this.saving = true;
    this.isShareable = enabled;
    this.boardTemplateService.setTemplateShareable(this.data.template.dbId, enabled);
  }

  copyLink(): void {
    this.clipboard.copy(this.shareUrl);
    this.linkCopied = true;
    setTimeout(() => { this.linkCopied = false; }, 2000);
  }

  close(): void {
    this.dialogRef.close();
  }
}
