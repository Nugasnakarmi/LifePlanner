import { Component, inject, Inject, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IdeaType } from 'src/app/enums/idea-type.enum';
import { TaskMode } from 'src/app/enums/task-mode.enum';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskAPIService } from 'src/app/services/task/task.api.service';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'add-task',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent implements OnInit {
  taskAPIService = inject(TaskAPIService);
  taskService = inject(TaskService);

  addTaskForm: UntypedFormGroup;
  addTaskDialogRef = inject(MatDialogRef<AddTaskComponent>);
  actionString = 'Add Task';
  readonly TaskMode = TaskMode;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { taskType: IdeaType; mode?: TaskMode; task?: IdeaTask }
  ) {}

  ngOnInit(): void {
    this.addTaskForm = new UntypedFormGroup({
      name: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new UntypedFormControl(''),
    });
    if (this.data.mode === TaskMode.Edit) {
      this.actionString = 'Edit Task';
      this.addTaskForm.patchValue(this.data.task);
    }
  }

  getValidationMessage() {
    if (this.addTaskForm.controls.name.hasError('required')) {
      return 'You must enter a name for the task';
    }

    return this.addTaskForm.controls.name.hasError('minLength')
      ? 'At least 3 characters long'
      : '';
  }
  //TODO: move the actions to parent component
  async addTask(): Promise<void> {
    const task: IdeaTask = {
      name: this.addTaskForm.controls.name.value,
      description: this.addTaskForm.controls.description.value,
      type: this.data.taskType,
      completion_status: 0,
      user_id: null,
    };
    const didAdd = await this.taskAPIService.addTask(task);

    if (didAdd) {
      //close dialog
      this.addTaskDialogRef.close();
    }
  }

  editTask(): void {
    const task: IdeaTask = {
      id: this.data.task.id,
      name: this.addTaskForm.controls.name.value,
      description: this.addTaskForm.controls.description.value,
    };

    this.taskService.taskWasUpdated(task, this.addTaskDialogRef);

    // const updated = await this.taskAPIService.editTask(task);
    // if (updated) {
    //   //close dialog
    //   this.addTaskDialogRef.close();
    //   return updated;
    // }
  }
}
