import { inject, Injectable } from '@angular/core';
import * as taskActions from 'src/app/store/task/task.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskStatus } from 'src/app/enums/task-status.enum';
import { selectTaskStatusCounts, selectTasks } from 'src/app/store/task/task.selector';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { AddTaskComponent } from 'src/app/views/add-task/add-task.component';
import * as _ from 'lodash';
import { DialogService } from '../dialog/dialog.service';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  store = inject(Store<TaskState>);
  dialogService = inject(DialogService);

  tasks$: Observable<IdeaTask[]> = this.store.select(selectTasks);
  taskStatusCounts$ = this.store.select(selectTaskStatusCounts);

  public landingPageInitialized(): void {
    this.store.dispatch(taskActions.landingPageInitialized());
  }

  public taskWasAdded(task: IdeaTask): void {
    this.store.dispatch(taskActions.taskWasAdded({ task }));
  }

  public taskWasUpdated(
    task: IdeaTask,
    dialogRef: MatDialogRef<AddTaskComponent>
  ): void {
    this.store.dispatch(taskActions.taskWasUpdated({ task }));
    this.dialogService.closeAddTaskDialog(dialogRef);
  }

  public taskDeletionInitiated(taskId: number): void {
    this.store.dispatch(taskActions.taskWasDeleted({ taskId }));
  }

  public taskStatusUpdated(taskId: number, status: TaskStatus): void {
    this.store.dispatch(taskActions.taskStatusUpdated({ taskId, status }));
  }
}
