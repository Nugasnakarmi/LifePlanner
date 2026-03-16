import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable, map } from 'rxjs';
import { TaskService } from 'src/app/services/task/task.service';
import { TaskStatus } from 'src/app/enums/task-status.enum';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';

interface StatusCounts {
  [TaskStatus.Initiated]: number;
  [TaskStatus.WorkingOn]: number;
  [TaskStatus.Completed]: number;
  total: number;
}

interface TaskGroups {
  initiated: IdeaTask[];
  workingOn: IdeaTask[];
  completed: IdeaTask[];
}

@Component({
  selector: 'app-task-dashboard',
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, MatIconModule],
  templateUrl: './task-dashboard.component.html',
  styleUrl: './task-dashboard.component.scss',
})
export class TaskDashboardComponent implements OnInit {
  taskService = inject(TaskService);
  router = inject(Router);

  readonly TaskStatus = TaskStatus;

  statusCounts$: Observable<StatusCounts> = this.taskService.taskStatusCounts$;

  completionPercent$: Observable<number> = this.statusCounts$.pipe(
    map((counts) =>
      counts.total === 0
        ? 0
        : Math.round((counts[TaskStatus.Completed] / counts.total) * 100)
    )
  );

  inProgressPercent$: Observable<number> = this.statusCounts$.pipe(
    map((counts) =>
      counts.total === 0
        ? 0
        : Math.round((counts[TaskStatus.WorkingOn] / counts.total) * 100)
    )
  );

  taskGroups$: Observable<TaskGroups> = this.taskService.tasks$.pipe(
    map((tasks) => ({
      initiated: tasks.filter(
        (t) => !t.status || t.status === TaskStatus.Initiated
      ),
      workingOn: tasks.filter((t) => t.status === TaskStatus.WorkingOn),
      completed: tasks.filter((t) => t.status === TaskStatus.Completed),
    }))
  );

  totalTasks$: Observable<number> = this.taskService.tasks$.pipe(
    map((tasks) => tasks.length)
  );

  ngOnInit(): void {
    this.taskService.landingPageInitialized();
  }

  goToBoards(): void {
    this.router.navigate(['/boards']);
  }
}
