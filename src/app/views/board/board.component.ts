import { AsyncPipe } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { map, Observable } from 'rxjs';
import { Board } from 'src/app/interfaces/board.interface';
import { BoardService } from 'src/app/services/board/board.service';

@Component({
  imports: [MatButtonModule, AsyncPipe, MatInputModule, ReactiveFormsModule],
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() drop: any;
  @Input() boardName: string = 'Board';
  editingName = false;
  boardService = inject(BoardService);
  boards$: Observable<Board[]>;
  boardNameControl: UntypedFormControl;
  currentBoard: Board | null = null;
  currentBoardName: string = '';
  ngOnInit() {
    // Initialize any necessary data or subscriptions here
    this.boardNameControl = new UntypedFormControl(this.boardName, [
      Validators.required,
      Validators.minLength(3),
    ]);

    this.boards$ = this.boardService.boards$.pipe(
      map((boards: Board[]) => {
        // Process the boards if needed
        console.log('Boards loaded:', boards);
        if (boards.length > 0) {
          this.currentBoard = boards[0]; // Set the first board's name as default
          this.boardNameControl.setValue(this.currentBoard.name);
        }
        return boards;
      })
    );
  }

  startEditName() {
    this.editingName = true;
  }

  finishEditName() {
    this.editingName = false;
    const currentBoardName = this.boardNameControl.value;

    if (currentBoardName.trim() !== '') {
      const newBoard: Board = {
        ...this.currentBoard,
        name: currentBoardName,
      }; // Assuming user_id and id are part of the board
      this.boardService.nameEditFinished(newBoard);
    }
  }

  handleNameKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.finishEditName();
    }
  }

  onNewBoardClick() {
    // Logic to handle new board creation
    console.log('New board button clicked');
    // You can implement the logic to open a dialog or navigate to a new board creation page
  }
}
