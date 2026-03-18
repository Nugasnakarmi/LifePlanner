import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component, computed, inject, input, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskStatus } from 'src/app/enums/task-status.enum';
import { TaskAPIService } from 'src/app/services/task/task.api.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskMode } from 'src/app/enums/task-mode.enum';
import { TaskService } from 'src/app/services/task/task.service';
import { ToastrService } from 'ngx-toastr';
import { ActivityMedia } from 'src/app/interfaces/activity.interface';

@Component({
  selector: 'app-task',
  imports: [DragDropModule, MatIconModule, MatTooltipModule, MatProgressBarModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  taskService = inject(TaskService);
  taskAPIService = inject(TaskAPIService);
  toastr = inject(ToastrService);
  task = input<IdeaTask>();
  container = input<string>();
  index = input<number>(0);
  dragEnabled = input<boolean>(true);
  taskUpdated = output<void>();
  readonly addTaskDialog = inject(MatDialog);

  readonly TaskStatus = TaskStatus;

  /** Collect the first few previewable media items from all activities */
  mediaThumbnails = computed<ActivityMedia[]>(() => {
    const activities = this.task()?.activities ?? [];
    const thumbs: ActivityMedia[] = [];
    for (const act of activities) {
      for (const m of act.media ?? []) {
        if (m.type === 'image' || m.type === 'gif') {
          thumbs.push(m);
          if (thumbs.length >= 3) return thumbs;
        }
      }
    }
    return thumbs;
  });

  hasActivitiesInProgress(task: IdeaTask): boolean {
    const cs = task.completion_status ?? 0;
    return cs > 0 && cs < 100;
  }

  deleteTask(taskId: number): void {
    this.taskService.taskDeletionInitiated(taskId);
  }

  onEditTask(task: IdeaTask): void {
    const dialogRef = this.addTaskDialog.open(AddTaskComponent, {
      data: { taskType: null, mode: TaskMode.Edit, task: task },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.taskUpdated.emit();
    });
  }

  onExpandTask(task: IdeaTask): void {
    this.addTaskDialog.open(TaskDetailComponent, {
      data: { task: task, container: this.container() },
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'task-detail-fullscreen-dialog',
    });
  }

  onUpdateStatus(task: IdeaTask, status: TaskStatus): void {
    if (status === TaskStatus.Completed && this.hasActivitiesInProgress(task)) {
      this.toastr.warning('Complete all activities first to finish this task.');
      return;
    }
    this.taskService.taskStatusUpdated(task.id, status);
  }

  getStatusIcon(status: TaskStatus | undefined): string {
    switch (status) {
      case TaskStatus.WorkingOn: return 'autorenew';
      case TaskStatus.Completed: return 'check_circle';
      default: return 'radio_button_unchecked';
    }
  }
}

