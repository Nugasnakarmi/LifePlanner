import { Component, inject, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { IdeaType } from 'src/app/enums/idea-type.enum';
import { TaskMode } from 'src/app/enums/task-mode.enum';
import { TaskService } from 'src/app/services/task/task.service';
import { UtilityService } from 'src/app/utility/utility.service';
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
    public data: { container: string; displayName: string; boardId?: number }
  ) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.tasks$.pipe(
      map((tasks) => {
        const filtered = this.data.boardId
          ? tasks.filter((t) => t.board_id === this.data.boardId)
          : tasks;
        return filtered.filter((t) => {
          const containerName = UtilityService.getEnumKeyByValue(IdeaType, t.type);
          return containerName === this.data.container;
        });
      })
    );
  }

  close(): void {
    this.dialogRef.close();
  }

  openAddTask(): void {
    this.dialog.open(AddTaskComponent, {
      data: {
        taskType: IdeaType[this.data.container as keyof typeof IdeaType],
        boardId: this.data.boardId,
      },
    });
  }

  onExpandTask(task: IdeaTask): void {
    this.dialog.open(TaskDetailComponent, {
      data: { task, container: this.data.container },
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
