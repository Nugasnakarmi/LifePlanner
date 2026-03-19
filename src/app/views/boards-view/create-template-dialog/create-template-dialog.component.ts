import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { debounceTime } from 'rxjs';
import {
  BoardTemplate,
  BoardTemplateList,
  BoardTemplateTask,
} from 'src/app/interfaces/board-template.interface';
import { IdeaType } from 'src/app/enums/idea-type.enum';
import { BoardTemplateService } from 'src/app/services/board-template/board-template.service';
import { DIALOG_CACHE_KEYS, DialogFormCacheService } from 'src/app/services/dialog-form-cache/dialog-form-cache.service';

interface CreateTemplateCache {
  infoForm: { name: string; description: string };
  lists: Array<{ name: string; listType: IdeaType; position: number; tasks: BoardTemplateTask[] }>;
}

export interface ColumnType {
  value: IdeaType;
  label: string;
  icon: string;
}

/** Delay (ms) after dispatching save so the success toast appears before the dialog closes. */
const CLOSE_AFTER_SAVE_DELAY_MS = 600;

@Component({
  selector: 'app-create-template-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
  ],
  templateUrl: './create-template-dialog.component.html',
  styleUrls: ['./create-template-dialog.component.scss'],
})
export class CreateTemplateDialogComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<CreateTemplateDialogComponent>);
  private boardTemplateService = inject(BoardTemplateService);
  private formCache = inject(DialogFormCacheService);
  private destroyRef = inject(DestroyRef);

  saving = false;
  private submitting = false;

  /** Lists accumulate as the user adds them in step 2. */
  lists: Array<BoardTemplateList & { showAddTask: boolean }> = [];
  showAddListForm = false;
  /** Index of the list currently expanded to show/add tasks. */
  expandedListIndex: number | null = null;

  infoForm!: FormGroup;
  addListForm!: FormGroup;
  addTaskForm!: FormGroup;

  columnTypes: ColumnType[] = [
    { value: IdeaType.goals, label: 'Goals', icon: 'flag' },
    { value: IdeaType.objectives, label: 'Objectives', icon: 'track_changes' },
    { value: IdeaType.ideas, label: 'Ideas', icon: 'lightbulb' },
    { value: IdeaType.achievements, label: 'Achievements', icon: 'emoji_events' },
    { value: IdeaType.symptoms, label: 'Symptoms / Notes', icon: 'sticky_note_2' },
  ];

  get totalTaskCount(): number {
    return this.lists.reduce((sum, l) => sum + l.tasks.length, 0);
  }

  ngOnInit(): void {
    this.infoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
    });

    this.addListForm = this.fb.group({
      listName: ['', [Validators.required, Validators.minLength(2)]],
      listType: [IdeaType.goals, Validators.required],
    });

    this.addTaskForm = this.fb.group({
      taskName: ['', Validators.required],
      taskDescription: [''],
    });

    const cached = this.formCache.load<CreateTemplateCache>(DIALOG_CACHE_KEYS.CREATE_TEMPLATE);
    if (cached) {
      this.infoForm.patchValue(cached.infoForm ?? {});
      this.lists = (cached.lists ?? []).map((l) => ({ ...l, showAddTask: false }));
    }

    this.infoForm.valueChanges
      .pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.persistCache());
  }

  ngOnDestroy(): void {
    if (!this.submitting) {
      // Flush the latest state immediately so no trailing keystrokes are lost
      // (the debounced subscription may not have fired yet when the dialog closes)
      this.persistCache();
    }
  }

  private persistCache(): void {
    const cache: CreateTemplateCache = {
      infoForm: this.infoForm.value,
      lists: this.lists.map(({ name, listType, position, tasks }) => ({
        name,
        listType,
        position,
        tasks,
      })),
    };
    this.formCache.save(DIALOG_CACHE_KEYS.CREATE_TEMPLATE, cache);
  }

  getColumnType(type: IdeaType): ColumnType {
    return this.columnTypes.find((c) => c.value === type) ?? this.columnTypes[0];
  }

  // ── List management ───────────────────────────────────────────────────────

  submitList(): void {
    if (this.addListForm.invalid) return;
    const v = this.addListForm.value;
    const trimmedName = v.listName?.trim();
    if (!trimmedName) {
      this.addListForm.get('listName')?.setErrors({ whitespace: true });
      return;
    }
    this.lists.push({
      name: trimmedName,
      listType: v.listType,
      position: this.lists.length,
      tasks: [],
      showAddTask: false,
    });
    this.addListForm.reset({ listType: IdeaType.goals });
    this.showAddListForm = false;
    this.expandedListIndex = this.lists.length - 1;
    this.persistCache();
  }

  cancelAddList(): void {
    this.addListForm.reset({ listType: IdeaType.goals });
    this.showAddListForm = false;
  }

  removeList(index: number): void {
    this.lists.splice(index, 1);
    if (this.expandedListIndex === index) {
      this.expandedListIndex = null;
    } else if (this.expandedListIndex !== null && this.expandedListIndex > index) {
      this.expandedListIndex--;
    }
    this.persistCache();
  }

  toggleList(index: number): void {
    this.expandedListIndex = this.expandedListIndex === index ? null : index;
  }

  // ── Task management ───────────────────────────────────────────────────────

  showTaskForm(listIndex: number): void {
    this.expandedListIndex = listIndex;
    this.lists[listIndex].showAddTask = true;
    this.addTaskForm.reset();
  }

  cancelAddTask(listIndex: number): void {
    this.lists[listIndex].showAddTask = false;
    this.addTaskForm.reset();
  }

  submitTask(listIndex: number): void {
    if (this.addTaskForm.invalid) return;
    const v = this.addTaskForm.value;
    const trimmedName = v.taskName?.trim();
    if (!trimmedName) {
      this.addTaskForm.get('taskName')?.setErrors({ whitespace: true });
      return;
    }
    const task: BoardTemplateTask = {
      name: trimmedName,
      description: v.taskDescription?.trim() ?? '',
      position: this.lists[listIndex].tasks.length,
    };
    this.lists[listIndex].tasks.push(task);
    this.lists[listIndex].showAddTask = false;
    this.addTaskForm.reset();
    this.persistCache();
  }

  removeTask(listIndex: number, taskIndex: number): void {
    this.lists[listIndex].tasks.splice(taskIndex, 1);
    this.persistCache();
  }

  // ── Save ──────────────────────────────────────────────────────────────────

  async save(): Promise<void> {
    if (this.infoForm.invalid || this.saving) return;
    this.saving = true;
    this.submitting = true;

    const v = this.infoForm.value;
    const template: BoardTemplate = {
      id: '',
      name: v.name.trim(),
      description: v.description?.trim() ?? '',
      lists: this.lists.map((l, i) => ({
        name: l.name,
        listType: l.listType,
        position: i,
        tasks: l.tasks,
      })),
      isBoardTemplate: true,
    };

    this.boardTemplateService.saveTemplate(template);

    // Wait briefly so the success toast fires, then close
    await new Promise((r) => setTimeout(r, CLOSE_AFTER_SAVE_DELAY_MS));
    this.saving = false;
    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close(false);
  }
}

