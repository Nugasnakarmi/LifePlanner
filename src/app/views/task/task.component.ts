import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskAPIService } from 'src/app/services/task/task.api.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskMode } from 'src/app/enums/task-mode.enum';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task',
  imports: [DragDropModule, MatIconModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  taskService = inject(TaskService);
  taskAPIService = inject(TaskAPIService);
  @Input() task: any;
  @Input() container: any;
  @Input() index: number;
  @Output() taskDeleted = new EventEmitter<number>();
  @Output() taskUpdated = new EventEmitter<void>();
  readonly addTaskDialog = inject(MatDialog);

  deleteTask(taskId: number): void {
    this.taskAPIService.deleteTask(taskId).then((result) => {
      if (result) {
        this.taskDeleted.emit(taskId);
      }
    });
  }

  onEditTask(task: IdeaTask): void {
    const dialogRef = this.addTaskDialog.open(AddTaskComponent, {
      data: { taskType: null, mode: TaskMode.Edit, task: task },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.taskUpdated.emit();
    });
  }
}
