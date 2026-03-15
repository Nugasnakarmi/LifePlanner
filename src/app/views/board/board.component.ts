import { AsyncPipe } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { Board } from 'src/app/interfaces/board.interface';
import { BoardService } from 'src/app/services/board/board.service';
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { LifeplannerTitleMenuComponent } from './new-board/new-board.component';
import { SupabaseService } from 'src/app/services/supabase/supabase.service';
import { CdkDragPlaceholder } from '@angular/cdk/drag-drop';

@Component({
  imports: [
    MatButtonModule,
    AsyncPipe,
    MatInputModule,
    ReactiveFormsModule,
    LifeplannerTitleMenuComponent,
    CdkDragPlaceholder,
  ],
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  drop = input<any>();
  boardName = input<string>('Board');
  editingName = false;
  boardService = inject(BoardService);
  dialogService = inject(DialogService);
  supabaseService = inject(SupabaseService);

  boards$: Observable<Board[]>;
  selectedBoard$: Observable<Board | null>;
  boardNameControl: UntypedFormControl;
  currentBoard: Board | null = null;
  currentBoardName: string = '';
  showNewBoardMenu = false;
  newBoardNameControl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  ngOnInit() {
    this.boardNameControl = new UntypedFormControl(this.boardName(), [
      Validators.required,
      Validators.minLength(3),
    ]);

    this.boards$ = this.boardService.boards$;
    this.selectedBoard$ = this.boardService.selectedBoard$;
  }

  switchBoard(board: Board) {
    this.boardService.selectBoard(board);
  }

  startEditName() {
    this.editingName = true;
  }

  startEditBoardName(board: Board) {
    this.boardNameControl.setValue(board.name);
    this.editingName = true;
  }

  finishEditName(board: Board) {
    this.editingName = false;
    const currentBoardName = this.boardNameControl.value;

    if (currentBoardName.trim() !== '') {
      const updatedBoard: Board = {
        ...board,
        name: currentBoardName,
      };
      this.boardService.nameEditFinished(updatedBoard);
    }
  }

  handleNameKey(event: KeyboardEvent, board: Board) {
    if (event.key === 'Enter') {
      this.finishEditName(board);
    }
  }

  onNewBoardMenuToggle() {
    this.showNewBoardMenu = !this.showNewBoardMenu;
  }

  async createNewBoard() {
    const name = this.newBoardNameControl.value?.trim();
    let board: Board = {
      name: name,
      description: '',
    };
    if (name) {
      this.boardService.createBoard(board);
      this.newBoardNameControl.reset();
      this.showNewBoardMenu = false;
    }
  }
}
