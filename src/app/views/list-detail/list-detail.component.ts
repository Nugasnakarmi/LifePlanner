import { Component, inject, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskMode } from 'src/app/enums/task-mode.enum';
import { TaskService } from 'src/app/services/task/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector: 'app-list-detail',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, AsyncPipe],
  templateUrl: './list-detail.component.html',
  styleUrl: './list-detail.component.scss',
})
export class ListDetailComponent implements OnInit {
  taskService = inject(TaskService);
  dialog = inject(MatDialog);
  dialogRef = inject(MatDialogRef<ListDetailComponent>);

  tasks$: Observable<IdeaTask[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { position: number; boardListId?: number; displayName: string; boardId?: number }
  ) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.tasks$.pipe(
      map((tasks) => {
        const filtered = this.data.boardId
          ? tasks.filter((t) => t.board_id === this.data.boardId)
          : tasks;
        if (this.data.boardListId !== undefined) {
          return filtered.filter((t) => t.boards_lists_id === this.data.boardListId);
        }
        return filtered.filter((t) => t.type === this.data.position);
      })
    );
  }

  close(): void {
    this.dialogRef.close();
  }

  openAddTask(): void {
    this.dialog.open(AddTaskComponent, {
      data: {
        taskType: this.data.position,
        boardListId: this.data.boardListId,
        boardId: this.data.boardId,
      },
    });
  }

  onExpandTask(task: IdeaTask): void {
    this.dialog.open(TaskDetailComponent, {
      data: { task, container: this.data.displayName },
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'task-detail-fullscreen-dialog',
    });
  }

  onEditTask(task: IdeaTask): void {
    this.dialog.open(AddTaskComponent, {
      data: { taskType: null, mode: TaskMode.Edit, task },
    });
  }

  deleteTask(taskId: number): void {
    this.taskService.taskDeletionInitiated(taskId);
  }
}
