import { inject, Injectable } from '@angular/core';
import * as taskActions from 'src/app/store/task/task.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { selectTasks } from 'src/app/store/task/task.selector';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { AddTaskComponent } from 'src/app/views/add-task/add-task.component';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  store = inject(Store<TaskState>);

  tasks$: Observable<IdeaTask[]> = this.store.select(selectTasks);
  public landingPageInitialized(): void {
    this.store.dispatch(taskActions.landingPageInitialized());
  }

  public taskWasUpdated(
    task: IdeaTask,
    dialogRef: MatDialogRef<AddTaskComponent>
  ): void {
    const clonedDialogRef: MatDialogRef<AddTaskComponent> =
      _.cloneDeep(dialogRef);

    this.store.dispatch(
      taskActions.taskWasUpdated({ task, dialogRef: clonedDialogRef })
    );
  }
  public taskNeedsToUpdate(task: IdeaTask): void {
    this.store.dispatch(taskActions.taskNeedsToUpdate({ task }));
  }
}
