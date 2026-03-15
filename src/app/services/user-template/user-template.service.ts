import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BoardTemplate } from 'src/app/interfaces/board-template.interface';
import * as actions from 'src/app/store/user-template/user-template.actions';
import {
  selectUserTemplates,
  selectUserTemplatesLoading,
  selectUserTemplatesSaving,
} from 'src/app/store/user-template/user-template.selector';

@Injectable({ providedIn: 'root' })
export class UserTemplateService {
  private store = inject(Store);

  templates$: Observable<BoardTemplate[]> = this.store.select(selectUserTemplates);
  loading$: Observable<boolean> = this.store.select(selectUserTemplatesLoading);
  saving$: Observable<boolean> = this.store.select(selectUserTemplatesSaving);

  loadTemplates(): void {
    this.store.dispatch(actions.loadUserTemplates());
  }

  saveTemplate(template: BoardTemplate): void {
    this.store.dispatch(actions.saveUserTemplate({ template }));
  }

  deleteTemplate(dbId: number): void {
    this.store.dispatch(actions.deleteUserTemplate({ dbId }));
  }
}
