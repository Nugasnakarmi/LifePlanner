import { inject, Injectable } from '@angular/core';
import * as taskActions from 'src/app/state/task/task.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { selectTasks } from 'src/app/state/task/task.selector';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  store = inject(Store<TaskState>);

  tasks$: Observable<IdeaTask[]> = this.store.select(selectTasks);
  public landingPageInitialized(): void {
    this.store.dispatch(taskActions.landingPageInitialized());
  }
}
