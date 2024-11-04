import { Component, inject, Inject, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IdeaType } from 'src/app/enums/idea-type.enum';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'add-task',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent implements OnInit {
  taskService = inject(TaskService);
  addTaskForm: UntypedFormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { taskType: IdeaType }) {}
  ngOnInit(): void {
    this.addTaskForm = new UntypedFormGroup({
      name: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new UntypedFormControl(''),
    });
  }

  getValidationMessage() {
    if (this.addTaskForm.controls.name.hasError('required')) {
      return 'You must enter a name for the task';
    }

    return this.addTaskForm.controls.name.hasError('minLength')
      ? 'At least 3 characters long'
      : '';
  }

  async addTask(): Promise<void> {
    const task: IdeaTask = {
      name: this.addTaskForm.controls.name.value,
      description: this.addTaskForm.controls.description.value,
      type: this.data.taskType,
    };
    await this.taskService.addTask(task);
  }
}
