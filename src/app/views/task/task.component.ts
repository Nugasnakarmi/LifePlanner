import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DragDropModule, MatIconModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  taskService = inject(TaskService);
  @Input() task: any;
  @Input() container: any;
  @Input() index: number;
  @Output() taskDeleted = new EventEmitter<number>();

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).then((result) => {
      if (result) {
        this.taskDeleted.emit(taskId);
      }
    });
  }

  editTask(task: IdeaTask): void {
    // this.taskService.updateTaskContainer(task).then((result) => {
    //   if (result) {
    //     this.taskDeleted.emit(task.id);
    //   }
    // });
  }
}
