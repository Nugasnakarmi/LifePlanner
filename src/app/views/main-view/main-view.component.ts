import { Component, inject, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { LoginService } from 'src/app/services/login/login.service';
import { LoginComponent } from '../email/login/login.component';
import { map, Observable, Subscription } from 'rxjs';
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

@Component({
  imports: [DragDropModule, MatIconModule, TaskComponent, AsyncPipe],
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
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
  tasks$: Observable<IdeaTask[]> = this.taskService.tasks$;
  subscriptions: Subscription;
  readonly addTaskDialog = inject(MatDialog);
  ngOnInit(): void {
    this.subscriptions = new Subscription();
    this.getTasks();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getTasks(): void {
    this.resetContainerData();

    this.taskService.landingPageInitialized();
    this.subscriptions.add(
      this.tasks$
        .pipe(
          map((tasks) => {
            console.log(tasks);
            tasks.forEach((element) => {
              if (element) {
                const containerName = UtilityService.getEnumKeyByValue(
                  IdeaType,
                  element.type
                );
                if (containerName)
                  this.containerRefs[containerName].push(element);
              }
            });
          })
        )
        .subscribe()
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
        .then((updated) => {
          //Don't need to do this
          // if (updated) {
          //   this.getTasks();
          // }
        });
    }
  }

  updateUserDetails(userDetails: any) {}

  openAddTask(type: string): void {
    console.log(IdeaType[type]);
    const dialogRef = this.addTaskDialog.open(AddTaskComponent, {
      data: { taskType: IdeaType[type] },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getTasks();
    });
  }

  // onTaskDeleted(taskId: number): void {
  //  TODO
  // }

  // onTaskUpdated(): void {
  //   TODO
  // }
}
