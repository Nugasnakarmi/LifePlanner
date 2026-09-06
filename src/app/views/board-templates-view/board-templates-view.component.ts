import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BoardTemplate } from 'src/app/interfaces/board-template.interface';
import { BoardTemplateService } from 'src/app/services/board-template/board-template.service';
import { CreateTemplateDialogComponent, TemplateDialogData } from '../boards-view/create-template-dialog/create-template-dialog.component';

@Component({
  selector: 'app-board-templates-view',
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, MatDialogModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './board-templates-view.component.html',
  styleUrls: ['./board-templates-view.component.scss'],
})
export class BoardTemplatesViewComponent implements OnInit {
  readonly boardTemplateService = inject(BoardTemplateService);
  private readonly dialog = inject(MatDialog);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  templates$: Observable<BoardTemplate[]> = this.boardTemplateService.templates$;
  loading$: Observable<boolean> = this.boardTemplateService.loading$;

  ngOnInit(): void {
    this.boardTemplateService.loadTemplates();
  }

  createTemplate(): void {
    this.openTemplateDialog();
  }

  editTemplate(template: BoardTemplate, event: Event): void {
    event.stopPropagation();
    this.openTemplateDialog(template);
  }

  deleteTemplate(template: BoardTemplate, event: Event): void {
    event.stopPropagation();
    if (template.dbId == null || !window.confirm(`Delete the template "${template.name}"? This cannot be undone.`)) {
      return;
    }
    this.boardTemplateService.deleteTemplate(template.dbId);
  }

  useTemplate(template: BoardTemplate): void {
    this.router.navigate(['/boards'], { queryParams: { addTemplate: template.dbId } });
  }

  totalTaskCount(template: BoardTemplate): number {
    return (template.lists ?? []).reduce((total, list) => total + list.tasks.length, 0);
  }

  trackByTemplate(_index: number, template: BoardTemplate): string {
    return template.id;
  }

  private openTemplateDialog(template?: BoardTemplate): void {
    const data: TemplateDialogData | undefined = template ? { template } : undefined;
    const ref = this.dialog.open(CreateTemplateDialogComponent, {
      panelClass: 'create-template-panel',
      disableClose: false,
      data,
    });
    ref.afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((saved) => {
        if (saved) {
          this.boardTemplateService.loadTemplates();
        }
      });
  }
}
