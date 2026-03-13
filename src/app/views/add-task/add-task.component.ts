import { Component, inject, Inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IdeaType } from 'src/app/enums/idea-type.enum';
import { TaskMode } from 'src/app/enums/task-mode.enum';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { TaskService } from 'src/app/services/task/task.service';
import 'emoji-picker-element';

@Component({
  selector: 'add-task',
  imports: [MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent implements OnInit {
  taskService = inject(TaskService);

  addTaskForm: UntypedFormGroup;
  addTaskDialogRef = inject(MatDialogRef<AddTaskComponent>);
  actionString = 'Add Task';
  readonly TaskMode = TaskMode;

  showEmojiPickerForName = false;
  showEmojiPickerForDesc = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { taskType: IdeaType; mode?: TaskMode; task?: IdeaTask; boardId?: number }
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

    return this.addTaskForm.controls.name.hasError('minlength')
      ? 'At least 3 characters long'
      : '';
  }

  toggleEmojiPicker(field: 'name' | 'description'): void {
    if (field === 'name') {
      this.showEmojiPickerForName = !this.showEmojiPickerForName;
      this.showEmojiPickerForDesc = false;
    } else {
      this.showEmojiPickerForDesc = !this.showEmojiPickerForDesc;
      this.showEmojiPickerForName = false;
    }
  }

  onEmojiSelected(event: { detail: { unicode: string } }, field: 'name' | 'description'): void {
    const emoji: string = event.detail?.unicode ?? '';
    if (!emoji) return;
    const control = this.addTaskForm.controls[field];
    const currentValue: string = control.value ?? '';
    control.setValue(currentValue + emoji);
    if (field === 'name') {
      this.showEmojiPickerForName = false;
    } else {
      this.showEmojiPickerForDesc = false;
    }
  }

  //TODO: move the actions to parent component
  addTask(): void {
    const task: IdeaTask = {
      name: this.addTaskForm.controls.name.value,
      description: this.addTaskForm.controls.description.value,
      type: this.data.taskType,
      completion_status: 0,
      user_id: null,
      board_id: this.data.boardId,
    };
    this.taskService.taskWasAdded(task);
    this.addTaskDialogRef.close();
  }

  editTask(): void {
    const task: IdeaTask = {
      id: this.data.task.id,
      name: this.addTaskForm.controls.name.value,
      description: this.addTaskForm.controls.description.value,
    };

    this.taskService.taskWasUpdated(task, this.addTaskDialogRef);
  }
}
