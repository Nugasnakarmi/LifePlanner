import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { Observable, Subscription, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskAPIService } from 'src/app/services/task/task.api.service';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskComponent } from '../task/task.component';
import { TaskService } from 'src/app/services/task/task.service';
import { AsyncPipe } from '@angular/common';
import { BoardService } from 'src/app/services/board/board.service';
import { Board } from 'src/app/interfaces/board.interface';
import { ListDetailComponent } from '../list-detail/list-detail.component';
import { BoardList } from 'src/app/interfaces/board-list.interface';
import { BoardListService } from 'src/app/services/board-list/board-list.service';

@Component({
  imports: [
    DragDropModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    TaskComponent,
    AsyncPipe,
  ],
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  standalone: true,
  providers: [AsyncPipe],
})
export class MainViewComponent implements OnInit, OnDestroy {
  boardLists: BoardList[] = [];
  containerRefs: Record<number, IdeaTask[]> = {};

  router = inject(Router);
  taskService = inject(TaskService);
  taskAPIService = inject(TaskAPIService);
  boardService = inject(BoardService);
  boardListService = inject(BoardListService);

  tasks$: Observable<IdeaTask[]>;
  selectedBoard: Board | null = null;
  dragEnabled = false;

  editingListId: number | null = null;
  editListNameControl = new UntypedFormControl('', [Validators.required, Validators.minLength(1)]);

  showAddListForm = false;
  newListNameControl = new UntypedFormControl('', [Validators.required, Validators.minLength(1)]);

  private selectedBoardSub: Subscription | undefined;
  private listsSub: Subscription | undefined;

  readonly addTaskDialog = inject(MatDialog);

  ngOnInit(): void {
    this.listsSub = this.boardListService.lists$.subscribe((lists) => {
      this.boardLists = lists;
      this.resetContainerData();
      this.getTasks();
    });

    this.selectedBoardSub = this.boardService.selectedBoard$.subscribe(
      (board) => {
        this.selectedBoard = board;
        if (board?.id) {
          this.boardListService.loadLists(board.id);
        } else {
          this.boardListService.clearLists();
        }
      }
    );

    this.getTasks();
  }

  ngOnDestroy(): void {
    this.selectedBoardSub?.unsubscribe();
    this.listsSub?.unsubscribe();
  }

  getTasks(): void {
    this.tasks$ = this.taskService.tasks$.pipe(
      tap((tasks) => {
        this.resetContainerData();
        const filteredTasks = this.selectedBoard
          ? tasks.filter((t) => t.board_id === this.selectedBoard.id)
          : tasks;
        filteredTasks.forEach((element) => {
          if (!element) return;
          if (element.boards_lists_id !== undefined && this.containerRefs[element.boards_lists_id] !== undefined) {
            this.containerRefs[element.boards_lists_id].push(element);
          } else if (element.type !== undefined) {
            // Fallback for legacy tasks without boards_lists_id: match by position
            const legacyList = this.boardLists.find((l) => l.position === element.type);
            if (legacyList && this.containerRefs[legacyList.id] !== undefined) {
              this.containerRefs[legacyList.id].push(element);
            }
          }
        });
      })
    );
  }

  resetContainerData(): void {
    this.containerRefs = {};
    this.boardLists.forEach((list) => {
      this.containerRefs[list.id] = [];
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const data: IdeaTask = event.container.data[
        event.currentIndex
      ] as unknown as IdeaTask;
      const boardListId = Number(event.container.id);
      if (isNaN(boardListId)) return;
      const targetList = this.boardLists.find((l) => l.id === boardListId);
      if (!targetList) return;
      this.taskAPIService
        .updateTaskContainer({
          id: data.id,
          type: targetList.position,
          boards_lists_id: boardListId,
        });
    }
  }

  updateUserDetails(userDetails: any) {}

  openAddTask(list: BoardList): void {
    const dialogRef = this.addTaskDialog.open(AddTaskComponent, {
      data: { taskType: list.position, boardListId: list.id, boardId: this.selectedBoard?.id },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getTasks();
    });
  }

  goToBoards(): void {
    this.router.navigate(['/boards']);
  }

  toggleDrag(): void {
    this.dragEnabled = !this.dragEnabled;
  }

  openExpandList(list: BoardList): void {
    this.addTaskDialog.open(ListDetailComponent, {
      data: { position: list.position, boardListId: list.id, displayName: list.name, boardId: this.selectedBoard?.id },
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'task-detail-fullscreen-dialog',
    });
  }

  // --- Edit list name ---
  startEditListName(list: BoardList): void {
    this.editingListId = list.id;
    this.editListNameControl.setValue(list.name);
  }

  finishEditListName(list: BoardList): void {
    const newName = this.editListNameControl.value?.trim();
    this.editingListId = null;
    if (newName && newName !== list.name) {
      this.boardListService.editListName(list.id, newName);
    }
  }

  handleEditListNameKey(event: KeyboardEvent, list: BoardList): void {
    if (event.key === 'Enter') {
      this.finishEditListName(list);
    } else if (event.key === 'Escape') {
      this.editingListId = null;
    }
  }

  // --- Add new list ---
  toggleAddListForm(): void {
    this.showAddListForm = !this.showAddListForm;
    if (!this.showAddListForm) {
      this.newListNameControl.reset();
    }
  }

  addNewList(): void {
    const name = this.newListNameControl.value?.trim();
    if (name && this.selectedBoard?.id) {
      this.boardListService.addList(this.selectedBoard.id, name);
      this.newListNameControl.reset();
      this.showAddListForm = false;
    }
  }

  handleAddListKey(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.addNewList();
    } else if (event.key === 'Escape') {
      this.showAddListForm = false;
      this.newListNameControl.reset();
    }
  }
}
