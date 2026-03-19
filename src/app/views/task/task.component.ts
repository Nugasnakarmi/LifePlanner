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
  readonly MAX_THUMBS = 3;

  /** Returns true for media types that can be shown as an image thumbnail */
  isPreviewableMedia(m: ActivityMedia): boolean {
    return m.type === 'image' || m.type === 'gif';
  }

  /** Collect the first few previewable media items from all activities */
  mediaThumbnails = computed<ActivityMedia[]>(() => {
    const activities = this.task()?.activities ?? [];
    const thumbs: ActivityMedia[] = [];
    for (const act of activities) {
      for (const m of act.media ?? []) {
        if (this.isPreviewableMedia(m)) {
          thumbs.push(m);
          if (thumbs.length >= this.MAX_THUMBS) return thumbs;
        }
      }
    }
    return thumbs;
  });

  /** Total count of all previewable images/GIFs across all activities */
  totalMediaCount = computed<number>(() => {
    const activities = this.task()?.activities ?? [];
    let count = 0;
    for (const act of activities) {
      for (const m of act.media ?? []) {
        if (this.isPreviewableMedia(m)) count++;
      }
    }
    return count;
  });

  /** Number of images beyond the MAX_THUMBS shown in the strip */
  extraMediaCount = computed<number>(() =>
    Math.max(0, this.totalMediaCount() - this.MAX_THUMBS)
  );

  /** Replace a broken thumbnail with a generic placeholder so the wrapper stays visible */
  onThumbError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
      const placeholder = document.createElement('span');
      placeholder.className = 'task-media-thumb-placeholder';
      placeholder.setAttribute('aria-hidden', 'true');
      img.parentElement?.appendChild(placeholder);
    }
  }

  /** Prevent page scroll on Space keydown for keyboard-activated thumbnails */
  onThumbKeydownSpace(event: KeyboardEvent): void {
    event.preventDefault();
  }

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

