import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { AddTaskComponent } from 'src/app/views/add-task/add-task.component';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor() {}

  closeAddTaskDialog(dialogRef: MatDialogRef<AddTaskComponent>) {
    dialogRef.close();
  }
}
