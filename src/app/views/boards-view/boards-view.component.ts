import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, map, Observable } from 'rxjs';
import { Board } from 'src/app/interfaces/board.interface';
import { BoardList } from 'src/app/interfaces/board-list.interface';
import { BoardTemplate } from 'src/app/interfaces/board-template.interface';
import { BoardService } from 'src/app/services/board/board.service';
import { TaskService } from 'src/app/services/task/task.service';
import { BoardTemplateService } from 'src/app/services/board-template/board-template.service';
import { BoardListService } from 'src/app/services/board-list/board-list.service';
import { CreateTemplateDialogComponent, TemplateDialogData } from './create-template-dialog/create-template-dialog.component';

@Component({
  selector: 'app-boards-view',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
  templateUrl: './boards-view.component.html',
  styleUrls: ['./boards-view.component.scss'],
})
export class BoardsViewComponent implements OnInit {
  boardService = inject(BoardService);
  taskService = inject(TaskService);
  boardTemplateService = inject(BoardTemplateService);
  boardListService = inject(BoardListService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  dialog = inject(MatDialog);
  private destroyRef = inject(DestroyRef);

  boards$: Observable<Board[]>;
  boardTemplates$: Observable<BoardTemplate[]>;
  systemTemplates$: Observable<BoardTemplate[]>;
  myTemplates$: Observable<BoardTemplate[]>;

  showNewBoardForm = false;
  showTemplates = false;
  editingBoardId: number | null = null;
  boardListsMap: Record<number, BoardList[]> = {};

  newBoardNameControl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  editBoardNameControl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  editBoardDescriptionControl = new UntypedFormControl('');

  ngOnInit(): void {
    this.taskService.landingPageInitialized();
    this.boards$ = this.boardService.boards$;
    this.boardTemplates$ = this.boardTemplateService.templates$;
    this.systemTemplates$ = this.boardTemplates$.pipe(map((ts) => ts.filter((t) => t.isSystem)));
    this.myTemplates$ = this.boardTemplates$.pipe(map((ts) => ts.filter((t) => !t.isSystem)));
    this.boardTemplateService.loadTemplates();
    this.boardListService.loadAllLists();
    this.boardListService.allListsGroupedByBoard$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((grouped) => { this.boardListsMap = grouped; });

    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        if (params['newBoard'] === 'true') {
          this.showNewBoardForm = true;
          this.router.navigate(['/boards'], { queryParams: {}, replaceUrl: true });
        }
      });
  }

  totalTaskCount(template: BoardTemplate): number {
    return (template.lists ?? []).reduce((sum, l) => sum + l.tasks.length, 0);
  }

  selectBoard(board: Board): void {
    this.boardService.selectBoard(board);
    this.router.navigate(['/main']);
  }

  toggleNewBoardForm(): void {
    this.showNewBoardForm = !this.showNewBoardForm;
    if (!this.showNewBoardForm) {
      this.newBoardNameControl.reset();
      this.showTemplates = false;
    }
  }

  toggleTemplates(): void {
    this.showTemplates = !this.showTemplates;
  }

  createBoard(): void {
    const name = this.newBoardNameControl.value?.trim();
    if (name && this.newBoardNameControl.valid) {
      const board: Board = { name, description: '' };
      this.boardService.createBoard(board);
      this.newBoardNameControl.reset();
      this.showNewBoardForm = false;
      this.showTemplates = false;
    }
  }

  createBoardFromTemplate(template: BoardTemplate): void {
    this.boardService.createBoardFromTemplate(template);
    this.showNewBoardForm = false;
    this.showTemplates = false;
  }

  openCreateTemplateDialog(): void {
    const ref = this.dialog.open(CreateTemplateDialogComponent, {
      panelClass: 'create-template-panel',
      disableClose: false,
    });
    ref.afterClosed().subscribe((saved) => {
      if (saved) {
        this.boardTemplateService.loadTemplates();
      }
    });
  }

  openEditTemplateDialog(template: BoardTemplate, event: Event): void {
    event.stopPropagation();
    const data: TemplateDialogData = { template };
    this.dialog.open(CreateTemplateDialogComponent, {
      panelClass: 'create-template-panel',
      disableClose: false,
      data,
    });
  }

  deleteBoardTemplate(template: BoardTemplate, event: Event): void {
    event.stopPropagation();
    if (!template.dbId) return;
    const confirmed = window.confirm(
      `Delete the template "${template.name}"? This cannot be undone.`
    );
    if (confirmed) {
      this.boardTemplateService.deleteTemplate(template.dbId);
    }
  }

  startEditBoard(board: Board, event: Event): void {
    event.stopPropagation();
    this.editingBoardId = board.id ?? null;
    this.editBoardNameControl.setValue(board.name);
    this.editBoardDescriptionControl.setValue(board.description ?? '');
  }

  saveEditBoard(board: Board, event: Event): void {
    event.stopPropagation();
    const name = this.editBoardNameControl.value?.trim();
    if (name && this.editBoardNameControl.valid) {
      const description = (this.editBoardDescriptionControl.value ?? '').trim();
      this.boardService.boardEditFinished({ ...board, name, description });
    }
    this.editingBoardId = null;
  }

  cancelEditBoard(event: Event): void {
    event.stopPropagation();
    this.editingBoardId = null;
  }

  /** Prevent page scroll when Space is pressed on a card acting as a button. */
  onCardKeydownSpace(event: KeyboardEvent): void {
    event.preventDefault();
  }

  /** Activate a board card via keyboard (Enter or Space keyup). Guards against
   *  events that bubbled up from nested child elements (e.g. edit/delete buttons). */
  activateBoardCard(board: Board, event: KeyboardEvent): void {
    if (event.target !== event.currentTarget) return;
    if (this.editingBoardId !== board.id) {
      this.selectBoard(board);
    }
  }

  /** Activate a template card via keyboard (Enter or Space keyup). Guards against
   *  events that bubbled up from nested child elements (e.g. delete button). */
  activateTemplateCard(template: BoardTemplate, event: KeyboardEvent): void {
    if (event.target !== event.currentTarget) return;
    this.createBoardFromTemplate(template);
  }

  async deleteBoard(board: Board, event: Event): Promise<void> {
    event.stopPropagation();
    if (!board.id) return;

    const tasks = await firstValueFrom(this.taskService.tasks$);
    const boardTasks = tasks.filter((t) => t.board_id === board.id);

    if (boardTasks.length > 0) {
      const confirmed = window.confirm(
        `"${board.name}" has ${boardTasks.length} task(s). Deleting this board will also delete all its tasks. Are you sure?`
      );
      if (!confirmed) return;
    }

    this.boardService.deleteBoard(board.id);
  }
}


