import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BoardTemplate, PendingTemplateInvitation, TemplateInvitation } from 'src/app/interfaces/board-template.interface';
import * as actions from 'src/app/store/board-template/board-template.actions';
import {
  selectBoardTemplates,
  selectBoardTemplatesLoading,
  selectBoardTemplatesSaving,
  selectPendingTemplateInvitations,
  selectTemplateInvitations,
  selectTemplateInvitationsLoading,
} from 'src/app/store/board-template/board-template.selector';

@Injectable({ providedIn: 'root' })
export class BoardTemplateService {
  private store = inject(Store);

  templates$: Observable<BoardTemplate[]> = this.store.select(selectBoardTemplates);
  loading$: Observable<boolean> = this.store.select(selectBoardTemplatesLoading);
  saving$: Observable<boolean> = this.store.select(selectBoardTemplatesSaving);
  invitations$: Observable<TemplateInvitation[]> = this.store.select(selectTemplateInvitations);
  invitationsLoading$: Observable<boolean> = this.store.select(selectTemplateInvitationsLoading);
  pendingTemplateInvitations$: Observable<PendingTemplateInvitation[]> = this.store.select(selectPendingTemplateInvitations);

  loadTemplates(): void {
    this.store.dispatch(actions.loadBoardTemplates());
  }

  saveTemplate(template: BoardTemplate): void {
    this.store.dispatch(actions.saveBoardTemplate({ template }));
  }

  deleteTemplate(dbId: number): void {
    this.store.dispatch(actions.deleteBoardTemplate({ dbId }));
  }

  editTemplate(template: BoardTemplate): void {
    this.store.dispatch(actions.editBoardTemplate({ template }));
  }

  setTemplateShareable(dbId: number, isShareable: boolean): void {
    this.store.dispatch(actions.setTemplateShareable({ dbId, isShareable }));
  }

  cloneTemplate(templateId: number): void {
    this.store.dispatch(actions.cloneTemplate({ templateId }));
  }

  // ── Template invitations ──────────────────────────────────

  loadTemplateInvitations(templateId: number): void {
    this.store.dispatch(actions.loadTemplateInvitations({ templateId }));
  }

  sendTemplateInvitation(templateId: number, email: string): void {
    this.store.dispatch(actions.sendTemplateInvitation({ templateId, email }));
  }

  revokeTemplateInvitation(invitationId: number): void {
    this.store.dispatch(actions.revokeTemplateInvitation({ invitationId }));
  }

  clearTemplateInvitations(): void {
    this.store.dispatch(actions.clearTemplateInvitations());
  }

  loadPendingTemplateInvitations(): void {
    this.store.dispatch(actions.loadPendingTemplateInvitations());
  }

  respondToTemplateInvitation(invitationId: number, accept: boolean): void {
    this.store.dispatch(actions.respondToTemplateInvitation({ invitationId, accept }));
  }
}
