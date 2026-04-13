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
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, firstValueFrom, map, Observable, startWith, take } from 'rxjs';
import { Board } from 'src/app/interfaces/board.interface';
import { BoardList } from 'src/app/interfaces/board-list.interface';
import { BoardTemplate } from 'src/app/interfaces/board-template.interface';
import { BoardSortOption } from 'src/app/interfaces/user-preferences.interface';
import { BoardService } from 'src/app/services/board/board.service';
import { TaskService } from 'src/app/services/task/task.service';
import { BoardTemplateService } from 'src/app/services/board-template/board-template.service';
import { BoardListService } from 'src/app/services/board-list/board-list.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { CreateTemplateDialogComponent, TemplateDialogData } from './create-template-dialog/create-template-dialog.component';
import { BoardCollaborationDialogComponent, CollaborationDialogData } from './board-collaboration-dialog/board-collaboration-dialog.component';
import { BoardCollaborationApiService } from 'src/app/services/board/board-collaboration.api.service';
import { CollaboratorRole } from 'src/app/interfaces/board-collaborator.interface';
import { Actions, ofType } from '@ngrx/effects';
import * as boardActions from 'src/app/store/board/board.actions';

function sortBoards(boards: Board[], sort: BoardSortOption): Board[] {
  return [...boards].sort((a, b) => {
    if (sort === 'name') {
      return (a.name ?? '').localeCompare(b.name ?? '');
    } else if (sort === 'updated_at') {
      const aDate = a.updated_at ?? a.created_at ?? '';
      const bDate = b.updated_at ?? b.created_at ?? '';
      return bDate.localeCompare(aDate);
    } else {
      return (b.created_at ?? '').localeCompare(a.created_at ?? '');
    }
  });
}

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
    MatSelectModule,
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
  userProfileService = inject(UserProfileService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  dialog = inject(MatDialog);
  private destroyRef = inject(DestroyRef);
  private collabApi = inject(BoardCollaborationApiService);
  private actions$ = inject(Actions);

  sortedOwnBoards$: Observable<Board[]>;
  sortedCollaboratedBoards$: Observable<Board[]>;
  boardTemplates$: Observable<BoardTemplate[]>;
  systemTemplates$: Observable<BoardTemplate[]>;
  myTemplates$: Observable<BoardTemplate[]>;
  /** True when any background operation (task load, template load/save) is in progress. */
  anyLoading$: Observable<boolean>;

  showNewBoardForm = false;
  showTemplates = false;
  editingBoardId: number | null = null;
  boardListsMap: Record<number, BoardList[]> = {};

  sortControl = new UntypedFormControl('created_at');

  newBoardNameControl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  editBoardNameControl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  editBoardDescriptionControl = new UntypedFormControl('');

  newBoardInviteEmailControl = new UntypedFormControl('', [Validators.email]);
  newBoardInviteRoleControl = new UntypedFormControl('editor');

  ngOnInit(): void {
    this.taskService.landingPageInitialized();

    // Sync the sort control from the stored profile preference whenever the profile changes
    // (covers initial load and successful saves from this or any other session).
    this.userProfileService.profile$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((profile) => {
        const sort: BoardSortOption = profile?.board_sort ?? 'created_at';
        if (this.sortControl.value !== sort) {
          this.sortControl.setValue(sort, { emitEvent: false });
        }
      });

    // Sort own and collaborated boards by the sort control's current value.
    // Driving from sortControl.valueChanges (+ startWith) keeps the displayed list
    // always consistent with what the dropdown shows, even if a profile save fails.
    this.sortedOwnBoards$ = combineLatest([
      this.boardService.ownBoards$,
      this.sortControl.valueChanges.pipe(startWith(this.sortControl.value as BoardSortOption)),
    ]).pipe(
      map(([boards, sort]) => sortBoards(boards, sort as BoardSortOption))
    );

    this.sortedCollaboratedBoards$ = combineLatest([
      this.boardService.collaboratedBoards$,
      this.sortControl.valueChanges.pipe(startWith(this.sortControl.value as BoardSortOption)),
    ]).pipe(
      map(([boards, sort]) => sortBoards(boards, sort as BoardSortOption))
    );

    this.boardTemplates$ = this.boardTemplateService.templates$;
    this.systemTemplates$ = this.boardTemplates$.pipe(map((ts) => ts.filter((t) => t.isSystem)));
    this.myTemplates$ = this.boardTemplates$.pipe(map((ts) => ts.filter((t) => !t.isSystem)));
    this.anyLoading$ = combineLatest([
      this.taskService.loading$,
      this.boardTemplateService.loading$,
      this.boardTemplateService.saving$,
    ]).pipe(map(([taskLoading, tplLoading, tplSaving]) => taskLoading || tplLoading || tplSaving));
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

  onSortChange(sort: BoardSortOption): void {
    this.userProfileService.saveProfile({ board_sort: sort }, true);
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

      const inviteEmail = this.newBoardInviteEmailControl.value?.trim();
      const role = (this.newBoardInviteRoleControl.value ?? 'editor') as CollaboratorRole;

      if (inviteEmail && this.newBoardInviteEmailControl.valid) {
        // Listen for the addBoardSuccess action to get the created board's ID
        this.actions$.pipe(
          ofType(boardActions.addBoardSuccess),
          take(1),
          takeUntilDestroyed(this.destroyRef),
        ).subscribe(({ board: createdBoard }) => {
          if (createdBoard.id) {
            this.collabApi.sendInvitation(createdBoard.id, inviteEmail, role);
          }
        });
      }

      this.boardService.createBoard(board);
      this.newBoardNameControl.reset();
      this.newBoardInviteEmailControl.reset();
      this.newBoardInviteRoleControl.reset('editor');
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
    const ref = this.dialog.open(CreateTemplateDialogComponent, {
      panelClass: 'create-template-panel',
      disableClose: false,
      data,
    });
    ref.afterClosed().subscribe((saved) => {
      if (saved) {
        this.boardTemplateService.loadTemplates();
      }
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

  openShareDialog(board: Board, event: Event): void {
    event.stopPropagation();
    const data: CollaborationDialogData = { board };
    this.dialog.open(BoardCollaborationDialogComponent, {
      panelClass: 'board-collaboration-panel',
      data,
      width: '520px',
      maxWidth: '95vw',
    });
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

