import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BoardTemplate } from 'src/app/interfaces/board-template.interface';
import * as actions from 'src/app/store/board-template/board-template.actions';
import {
  selectBoardTemplates,
  selectBoardTemplatesLoading,
  selectBoardTemplatesSaving,
} from 'src/app/store/board-template/board-template.selector';

@Injectable({ providedIn: 'root' })
export class BoardTemplateService {
  private store = inject(Store);

  templates$: Observable<BoardTemplate[]> = this.store.select(selectBoardTemplates);
  loading$: Observable<boolean> = this.store.select(selectBoardTemplatesLoading);
  saving$: Observable<boolean> = this.store.select(selectBoardTemplatesSaving);

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
}
