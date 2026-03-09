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
import { Observable } from 'rxjs';
import { Board } from 'src/app/interfaces/board.interface';
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

  newBoardNameControl = new UntypedFormControl('', [
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
    }
  }

  createBoard(): void {
    const name = this.newBoardNameControl.value?.trim();
    if (name && this.newBoardNameControl.valid) {
      const board: Board = { name, description: '' };
      this.boardService.createBoard(board);
      this.newBoardNameControl.reset();
      this.showNewBoardForm = false;
    }
  }
}
