import { Component, inject, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncPipe } from '@angular/common';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskMode } from 'src/app/enums/task-mode.enum';
import { TaskStatus } from 'src/app/enums/task-status.enum';
import { TaskScopedActivity } from 'src/app/interfaces/activity.interface';
import { TaskService } from 'src/app/services/task/task.service';
import { ActivityService } from 'src/app/services/task/activity.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ActivityFormComponent, ActivityFormData } from '../activity-form/activity-form.component';

@Component({
  selector: 'app-task-detail',
  imports: [MatButtonModule, MatIconModule, MatProgressBarModule, MatTooltipModule, AsyncPipe],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
})
export class TaskDetailComponent implements OnInit, OnDestroy {
  taskService = inject(TaskService);
  activityService = inject(ActivityService);
  editDialog = inject(MatDialog);
  dialogRef = inject(MatDialogRef<TaskDetailComponent>);

  activities$: Observable<TaskScopedActivity[]> = this.activityService.activities$;
  progress$ = this.activityService.progress$;

  private destroy$ = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { task: IdeaTask; container: string }
  ) {}

  ngOnInit(): void {
    if (this.data.task.id) {
      this.activityService.loadActivities(this.data.task.id);
    }

    // Sync task completion_status and auto-complete when all activities done
    this.activityService.progress$
      .pipe(takeUntil(this.destroy$))
      .subscribe((progress) => {
        if (progress.total > 0) {
          // Keep completion_status in sync with activity progress
          this.taskService.taskCompletionStatusUpdated(this.data.task.id, progress.percentage);

          // Auto-complete task when all activities are completed
          if (progress.allCompleted && this.data.task.status !== TaskStatus.Completed) {
            this.taskService.taskStatusUpdated(this.data.task.id, TaskStatus.Completed);
            this.data.task = { ...this.data.task, status: TaskStatus.Completed };
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.activityService.clearActivities();
  }

  close(): void {
    this.dialogRef.close();
  }

  onEditTask(): void {
    this.dialogRef.close();
    this.editDialog.open(AddTaskComponent, {
      data: { taskType: null, mode: TaskMode.Edit, task: this.data.task },
    });
  }

  deleteTask(): void {
    this.taskService.taskDeletionInitiated(this.data.task.id);
    this.dialogRef.close();
  }

  openAddActivityDialog(): void {
    const dialogData: ActivityFormData = {
      taskId: this.data.task.id,
      mode: 'add',
    };
    const ref = this.editDialog.open(ActivityFormComponent, {
      data: dialogData,
      disableClose: false,
    });
    ref.afterClosed().pipe(takeUntil(this.destroy$)).subscribe((result) => {
      if (result?.activity) {
        this.activityService.activities$
          .pipe(takeUntil(this.destroy$))
          .subscribe((acts) => {
            this.activityService.addActivityToTask(
              this.data.task.id,
              result.activity,
              acts.length
            );
          })
          .unsubscribe();
      }
    });
  }

  openEditActivityDialog(activity: TaskScopedActivity): void {
    const dialogData: ActivityFormData = {
      taskId: this.data.task.id,
      activity,
      mode: 'edit',
    };
    const ref = this.editDialog.open(ActivityFormComponent, {
      data: dialogData,
      disableClose: false,
    });
    ref.afterClosed().subscribe((result) => {
      if (result?.activity) {
        this.activityService.updateActivity(result.activity);
      }
    });
  }

  removeActivity(activity: TaskScopedActivity): void {
    this.activityService.removeActivityFromTask(activity.task_activity_id, activity.id!);
  }

  toggleActivityComplete(activity: TaskScopedActivity): void {
    this.activityService.toggleActivityComplete(
      activity.task_activity_id,
      activity.id!,
      !activity.completed
    );
  }

  isVideo(url: string): boolean {
    return /\.(mp4|webm|ogg|mov)(\?|$)/i.test(url);
  }

  isGif(url: string): boolean {
    return /\.gif(\?|$)/i.test(url);
  }
}

