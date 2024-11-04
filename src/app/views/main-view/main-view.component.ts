import { Component, inject, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { LoginService } from 'src/app/services/login/login.service';
import { LoginComponent } from '../email/login/login.component';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AddTaskComponent } from '../add-task/add-task.component';
import { IdeaType } from 'src/app/enums/idea-type.enum';
import { TaskService } from 'src/app/services/task/task.service';
import { UtilityService } from 'src/app/utility/utility.service';

@Component({
  standalone: true,
  imports: [DragDropModule, MatIconModule],
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  containers = ['ideas', 'goals', 'objectives', 'achievements'];
  ideas = [];
  goals = [];
  objectives = [];
  achievements = [];
  containerRefs = {
    ideas: this.ideas,
    goals: this.goals,
    objectives: this.objectives,
    achievements: this.achievements,
  };

  router = inject(Router);
  taskService = inject(TaskService);

  readonly addTaskDialog = inject(MatDialog);
  ngOnInit(): void {
    this.taskService.getTasks().then((data) => {
      data.forEach((element) => {
        if (element) {
          const containerName = UtilityService.getEnumKeyByValue(
            IdeaType,
            element.type
          );
          this.containerRefs[containerName].push(element.name);
        }
      });
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
    }
  }

  updateUserDetails(userDetails: any) {}

  openAddTask(type: string): void {
    console.log(IdeaType[type]);
    const dialogRef = this.addTaskDialog.open(AddTaskComponent, {
      data: { taskType: IdeaType[type] },
    });
    dialogRef.afterClosed().subscribe((data) => {
      console.log(`Dialog result: ${data}`);
    });
  }
}
