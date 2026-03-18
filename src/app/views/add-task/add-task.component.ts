import { Component, DestroyRef, inject, Inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
import { debounceTime } from 'rxjs';
import { IdeaType } from 'src/app/enums/idea-type.enum';
import { TaskMode } from 'src/app/enums/task-mode.enum';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { DialogFormCacheService } from 'src/app/services/dialog-form-cache/dialog-form-cache.service';
import { TaskService } from 'src/app/services/task/task.service';

const CACHE_KEY = 'lifeplanner-dialog-add-task';

@Component({
  selector: 'add-task',
  imports: [MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent implements OnInit {
  taskService = inject(TaskService);
  private formCache = inject(DialogFormCacheService);
  private destroyRef = inject(DestroyRef);

  addTaskForm: UntypedFormGroup;
  addTaskDialogRef = inject(MatDialogRef<AddTaskComponent>);
  actionString = 'Add Task';
  readonly TaskMode = TaskMode;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { taskType: IdeaType; boardListId?: number; mode?: TaskMode; task?: IdeaTask; boardId?: number }
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
    } else {
      const cached = this.formCache.load<{ name: string; description: string }>(CACHE_KEY);
      if (cached) {
        this.addTaskForm.patchValue(cached);
      }
      this.addTaskForm.valueChanges
        .pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef))
        .subscribe((values) => this.formCache.save(CACHE_KEY, values));
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

  //TODO: move the actions to parent component
  addTask(): void {
    const task: IdeaTask = {
      name: this.addTaskForm.controls.name.value,
      description: this.addTaskForm.controls.description.value,
      type: this.data.taskType,
      completion_status: 0,
      user_id: null,
      board_id: this.data.boardId,
      boards_lists_id: this.data.boardListId,
    };
    this.taskService.taskWasAdded(task);
    this.formCache.clear(CACHE_KEY);
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
