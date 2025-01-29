import { Injectable } from '@angular/core';
import { TaskActions } from 'src/app/state/task/task.actions';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public getTasks(): void {
    // TaskActions.retrievedTaskList();
  }
}
