import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component, inject, input, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskStatus } from 'src/app/enums/task-status.enum';
import { TaskAPIService } from 'src/app/services/task/task.api.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskMode } from 'src/app/enums/task-mode.enum';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task',
  imports: [DragDropModule, MatIconModule, MatTooltipModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  taskService = inject(TaskService);
  taskAPIService = inject(TaskAPIService);
  task = input<IdeaTask>();
  container = input<string>();
  index = input<number>(0);
  dragEnabled = input<boolean>(true);
  taskUpdated = output<void>();
  readonly addTaskDialog = inject(MatDialog);

  readonly TaskStatus = TaskStatus;

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
    this.taskService.taskStatusUpdated(task.id, status);
  }

  getNextStatus(current: TaskStatus | undefined): TaskStatus | null {
    if (!current || current === TaskStatus.Initiated) return TaskStatus.WorkingOn;
    if (current === TaskStatus.WorkingOn) return TaskStatus.Completed;
    return null;
  }

  getStatusIcon(status: TaskStatus | undefined): string {
    switch (status) {
      case TaskStatus.WorkingOn: return 'autorenew';
      case TaskStatus.Completed: return 'check_circle';
      default: return 'radio_button_unchecked';
    }
  }
}
