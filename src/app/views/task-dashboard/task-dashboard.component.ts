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

interface DonutSegment {
  dasharray: string;
  dashoffset: number;
}

interface ChartSegments {
  hasData: boolean;
  initiated: DonutSegment;
  workingOn: DonutSegment;
  completed: DonutSegment;
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

  // SVG donut geometry — all template bindings derive from these constants
  readonly chartRadius = 60;
  readonly chartCircumference = 2 * Math.PI * this.chartRadius;
  readonly svgSize = 160;
  readonly svgCenter = this.svgSize / 2;
  readonly svgStrokeWidth = 20;
  readonly svgTextNumberY = this.svgCenter - 7;
  readonly svgTextLabelY = this.svgCenter + 13;

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

  chartSegments$: Observable<ChartSegments> = this.statusCounts$.pipe(
    map((counts) => {
      const c = this.chartCircumference;
      const total = counts.total || 1;
      const initiatedLen = (counts[TaskStatus.Initiated] / total) * c;
      const workingLen = (counts[TaskStatus.WorkingOn] / total) * c;
      const completedLen = (counts[TaskStatus.Completed] / total) * c;
      return {
        hasData: counts.total > 0,
        initiated: {
          dasharray: `${initiatedLen} ${c - initiatedLen}`,
          dashoffset: c / 4,
        },
        workingOn: {
          dasharray: `${workingLen} ${c - workingLen}`,
          dashoffset: c / 4 - initiatedLen,
        },
        completed: {
          dasharray: `${completedLen} ${c - completedLen}`,
          dashoffset: c / 4 - initiatedLen - workingLen,
        },
      };
    })
  );

  ngOnInit(): void {
    this.taskService.landingPageInitialized();
  }

  goToBoards(): void {
    this.router.navigate(['/boards']);
  }
}
