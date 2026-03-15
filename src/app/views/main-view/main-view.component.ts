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
import { AddTaskComponent } from '../add-task/add-task.component';
import { IdeaType } from 'src/app/enums/idea-type.enum';
import { TaskAPIService } from 'src/app/services/task/task.api.service';
import { UtilityService } from 'src/app/utility/utility.service';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskComponent } from '../task/task.component';
import { TaskService } from 'src/app/services/task/task.service';
import { AsyncPipe } from '@angular/common';
import { BoardService } from 'src/app/services/board/board.service';
import { Board } from 'src/app/interfaces/board.interface';
import { ListDetailComponent } from '../list-detail/list-detail.component';
import { ListConfig } from 'src/app/interfaces/list-config.interface';
import { LIST_CONFIGS } from 'src/app/data/list-configs';

@Component({
  imports: [
    DragDropModule,
    MatIconModule,
    MatButtonModule,
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
  listConfigs: ListConfig[] = LIST_CONFIGS;

  ideas: IdeaTask[] = [];
  goals: IdeaTask[] = [];
  objectives: IdeaTask[] = [];
  achievements: IdeaTask[] = [];
  symptoms: IdeaTask[] = [];

  containerRefs = {
    symptoms: this.symptoms,
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
  selectedBoard: Board | null = null;
  listDragEnabled = false;

  private selectedBoardSub: Subscription | undefined;

  readonly addTaskDialog = inject(MatDialog);

  ngOnInit(): void {
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
      symptoms: [],
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
      const containerType = IdeaType[event.container.id as keyof typeof IdeaType];
      if (containerType === undefined) return;
      this.taskAPIService
        .updateTaskContainer({
          id: data.id,
          type: containerType,
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

  goToBoards(): void {
    this.router.navigate(['/boards']);
  }

  toggleListDrag(): void {
    this.listDragEnabled = !this.listDragEnabled;
  }

  openExpandList(container: string): void {
    this.addTaskDialog.open(ListDetailComponent, {
      data: { container, boardId: this.selectedBoard?.id },
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'task-detail-fullscreen-dialog',
    });
  }
}
