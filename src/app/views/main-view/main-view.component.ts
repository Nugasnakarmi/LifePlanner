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
import { AddTaskComponent } from '../add-task/add-task.component';
import { IdeaType } from 'src/app/enums/idea-type.enum';
import { TaskAPIService } from 'src/app/services/task/task.api.service';
import { UtilityService } from 'src/app/utility/utility.service';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskComponent } from '../task/task.component';
import { TaskService } from 'src/app/services/task/task.service';
import { AsyncPipe } from '@angular/common';
import { BoardComponent } from '../board/board.component';
import { BoardService } from 'src/app/services/board/board.service';
import { Board } from 'src/app/interfaces/board.interface';

@Component({
  imports: [
    DragDropModule,
    MatIconModule,
    TaskComponent,
    AsyncPipe,
    BoardComponent,
  ],
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  standalone: true,
  providers: [AsyncPipe],
})
export class MainViewComponent implements OnInit, OnDestroy {
  containers = ['ideas', 'goals', 'objectives', 'achievements'];

  ideas: IdeaTask[] = [];
  goals: IdeaTask[] = [];
  objectives: IdeaTask[] = [];
  achievements: IdeaTask[] = [];

  containerRefs = {
    ideas: this.ideas,
    goals: this.goals,
    objectives: this.objectives,
    achievements: this.achievements,
  };

  router = inject(Router);
  taskService = inject(TaskService);
  taskAPIService = inject(TaskAPIService);
  boardService = inject(BoardService);

  tasks$: Observable<IdeaTask[]>;
  boards$: Observable<Board[]>;
  selectedBoard: Board | null = null;

  private selectedBoardSub: Subscription | undefined;

  readonly addTaskDialog = inject(MatDialog);

  ngOnInit(): void {
    this.getUserBoards();
    this.getTasks();
    this.selectedBoardSub = this.boardService.selectedBoard$.subscribe(
      (board) => {
        this.selectedBoard = board;
        this.getTasks();
      }
    );
  }

  ngOnDestroy(): void {
    this.selectedBoardSub?.unsubscribe();
  }

  //get my boards
  getUserBoards(): void {
    this.taskService.landingPageInitialized();
    this.boards$ = this.boardService.boards$;
  }

  getTasks(): void {
    this.tasks$ = this.taskService.tasks$.pipe(
      tap((tasks) => {
        this.resetContainerData();
        const filteredTasks = this.selectedBoard
          ? tasks.filter((t) => t.board_id === this.selectedBoard.id)
          : tasks;
        filteredTasks.forEach((element) => {
          if (element) {
            const containerName = UtilityService.getEnumKeyByValue(
              IdeaType,
              element.type
            );
            if (containerName) this.containerRefs[containerName].push(element);
          }
        });
      })
    );
  }

  resetContainerData(): void {
    this.containerRefs = {
      ideas: [],
      goals: [],
      objectives: [],
      achievements: [],
    };
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
      this.taskAPIService
        .updateTaskContainer({
          id: data.id,
          type: parseInt(event.container.id.substring(14)),
        } as IdeaTask)
        .then((updated) => {});
    }
  }

  updateUserDetails(userDetails: any) {}

  openAddTask(type: string): void {
    const dialogRef = this.addTaskDialog.open(AddTaskComponent, {
      data: { taskType: IdeaType[type], boardId: this.selectedBoard?.id },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getTasks();
    });
  }
}
