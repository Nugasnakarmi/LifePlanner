import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { Board } from 'src/app/interfaces/board.interface';
import { BoardTemplate } from 'src/app/interfaces/board-template.interface';
import { BOARD_TEMPLATES } from 'src/app/data/board-templates';
import { BoardService } from 'src/app/services/board/board.service';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-boards-view',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './boards-view.component.html',
  styleUrls: ['./boards-view.component.scss'],
})
export class BoardsViewComponent implements OnInit {
  boardService = inject(BoardService);
  taskService = inject(TaskService);
  router = inject(Router);

  boards$: Observable<Board[]>;
  showNewBoardForm = false;
  showTemplates = false;
  editingBoardId: number | null = null;
  templates: BoardTemplate[] = BOARD_TEMPLATES;

  newBoardNameControl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  editBoardNameControl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  ngOnInit(): void {
    this.taskService.landingPageInitialized();
    this.boards$ = this.boardService.boards$;
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

  startEditBoard(board: Board, event: Event): void {
    event.stopPropagation();
    this.editingBoardId = board.id ?? null;
    this.editBoardNameControl.setValue(board.name);
  }

  saveEditBoard(board: Board, event: Event): void {
    event.stopPropagation();
    const name = this.editBoardNameControl.value?.trim();
    if (name && this.editBoardNameControl.valid) {
      this.boardService.nameEditFinished({ ...board, name });
    }
    this.editingBoardId = null;
  }

  cancelEditBoard(event: Event): void {
    event.stopPropagation();
    this.editingBoardId = null;
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

