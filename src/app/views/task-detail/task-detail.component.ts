import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskMode } from 'src/app/enums/task-mode.enum';
import { TaskService } from 'src/app/services/task/task.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task-detail',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
})
export class TaskDetailComponent {
  taskService = inject(TaskService);
  editDialog = inject(MatDialog);
  dialogRef = inject(MatDialogRef<TaskDetailComponent>);

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { task: IdeaTask; container: string }
  ) {}

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
}
