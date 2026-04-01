import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { Actions, ofType } from '@ngrx/effects';
import { debounceTime, filter, firstValueFrom, map, race, timer } from 'rxjs';
import {
  BoardTemplate,
  BoardTemplateList,
  BoardTemplateTask,
  TemplateActivity,
} from 'src/app/interfaces/board-template.interface';
import { IdeaType } from 'src/app/enums/idea-type.enum';
import { BoardTemplateService } from 'src/app/services/board-template/board-template.service';
import { DIALOG_CACHE_KEYS, DialogFormCacheService } from 'src/app/services/dialog-form-cache/dialog-form-cache.service';
import * as boardTemplateActions from 'src/app/store/board-template/board-template.actions';

interface CreateTemplateCache {
  infoForm: { name: string; description: string };
  lists: Array<{ name: string; listType: IdeaType; position: number; tasks: BoardTemplateTask[] }>;
}

export interface TemplateDialogData {
  /** When provided the dialog opens in edit mode pre-populated with this template. */
  template?: BoardTemplate;
}

export interface ColumnType {
  value: IdeaType;
  label: string;
  icon: string;
}

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
  private actions$ = inject(Actions);
  private dialogData: TemplateDialogData | null = inject(MAT_DIALOG_DATA, { optional: true });

  /** True when the dialog was opened with an existing template to edit. */
  get isEditMode(): boolean {
    return !!this.dialogData?.template;
  }

  private get editTemplate(): BoardTemplate | undefined {
    return this.dialogData?.template;
  }

  saving = false;
  /** User-visible error message shown inside the dialog when a save attempt fails. */
  saveError: string | null = null;
  private submitting = false;

  /** Lists accumulate as the user adds them in step 2. */
  lists: Array<BoardTemplateList & { showAddTask: boolean }> = [];
  showAddListForm = false;
  /** Index of the list currently expanded to show/add tasks. */
  expandedListIndex: number | null = null;
  /** Which task is expanded to show its activities. */
  expandedTask: { listIndex: number; taskIndex: number } | null = null;
  /** Which task has the add-activity inline form open. */
  addActivityTarget: { listIndex: number; taskIndex: number } | null = null;

  infoForm!: FormGroup;
  addListForm!: FormGroup;
  addTaskForm!: FormGroup;
  addActivityForm!: FormGroup;

  get addActivityDataFields(): FormArray {
    return this.addActivityForm.get('dataFields') as FormArray;
  }

  /** Rejects controls whose value is empty or contains only whitespace. */
  private static noWhitespace(control: AbstractControl): ValidationErrors | null {
    return (control.value ?? '').trim().length === 0 ? { whitespace: true } : null;
  }

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

  get totalActivityCount(): number {
    return this.lists.reduce(
      (sum, l) =>
        sum + l.tasks.reduce((tSum, t) => tSum + (t.activities?.length ?? 0), 0),
      0
    );
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

    this.addActivityForm = this.fb.group({
      activityName: new UntypedFormControl('', [Validators.required, Validators.minLength(2)]),
      dataFields: this.fb.array([]),
    });

    if (this.isEditMode && this.editTemplate) {
      // Pre-populate form with the existing template data (no caching in edit mode)
      this.infoForm.patchValue({
        name: this.editTemplate.name,
        description: this.editTemplate.description,
      });
      // Deep-copy lists so that tasks and activities are mutable local objects.
      // NgRx deeply freezes all state in development mode, so a shallow spread of
      // the template's lists would leave `tasks` and their `activities` as frozen
      // store references — causing TypeError when submitActivity / removeActivity /
      // submitTask / removeTask try to mutate them.
      this.lists = (this.editTemplate.lists ?? []).map((l) => ({
        ...l,
        showAddTask: false,
        tasks: (l.tasks ?? []).map((t) => ({
          ...t,
          activities: (t.activities ?? []).map((a) => ({ ...a })),
        })),
      }));
    } else {
      const cached = this.formCache.load<CreateTemplateCache>(DIALOG_CACHE_KEYS.CREATE_TEMPLATE);
      if (cached) {
        this.infoForm.patchValue(cached.infoForm ?? {});
        this.lists = (cached.lists ?? []).map((l) => ({ ...l, showAddTask: false }));
      }

      this.infoForm.valueChanges
        .pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef))
        .subscribe(() => this.persistCache());
    }
  }

  ngOnDestroy(): void {
    if (!this.isEditMode && !this.submitting) {
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
    if (!this.isEditMode) this.persistCache();
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
    this.expandedTask = null;
    this.cancelAddActivity();
    if (!this.isEditMode) this.persistCache();
  }

  toggleList(index: number): void {
    this.expandedListIndex = this.expandedListIndex === index ? null : index;
    this.expandedTask = null;
    this.cancelAddActivity();
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
    if (!this.isEditMode) this.persistCache();
  }

  removeTask(listIndex: number, taskIndex: number): void {
    this.lists[listIndex].tasks.splice(taskIndex, 1);
    // Update or clear expandedTask.
    if (this.expandedTask?.listIndex === listIndex) {
      if (this.expandedTask.taskIndex === taskIndex) {
        this.expandedTask = null;
        this.cancelAddActivity();
      } else if (this.expandedTask.taskIndex > taskIndex) {
        this.expandedTask = { listIndex, taskIndex: this.expandedTask.taskIndex - 1 };
      }
    }
    // Update or clear addActivityTarget independently of expandedTask.
    if (this.addActivityTarget?.listIndex === listIndex) {
      if (this.addActivityTarget.taskIndex === taskIndex) {
        this.cancelAddActivity();
      } else if (this.addActivityTarget.taskIndex > taskIndex) {
        this.addActivityTarget = { listIndex, taskIndex: this.addActivityTarget.taskIndex - 1 };
      }
    }
    if (!this.isEditMode) this.persistCache();
  }

  // ── Activity management ───────────────────────────────────────────────────

  isTaskExpanded(listIndex: number, taskIndex: number): boolean {
    return (
      this.expandedTask?.listIndex === listIndex &&
      this.expandedTask?.taskIndex === taskIndex
    );
  }

  toggleTask(listIndex: number, taskIndex: number): void {
    if (this.isTaskExpanded(listIndex, taskIndex)) {
      this.expandedTask = null;
      this.cancelAddActivity();
    } else {
      this.expandedTask = { listIndex, taskIndex };
      this.cancelAddActivity();
    }
  }

  showActivityForm(listIndex: number, taskIndex: number): void {
    this.addActivityTarget = { listIndex, taskIndex };
    this.addActivityForm.reset({ activityName: '' });
    while (this.addActivityDataFields.length > 0) {
      this.addActivityDataFields.removeAt(0);
    }
  }

  cancelAddActivity(): void {
    this.addActivityTarget = null;
    this.addActivityForm.reset();
    while (this.addActivityDataFields.length > 0) {
      this.addActivityDataFields.removeAt(0);
    }
  }

  addActivityDataField(): void {
    this.addActivityDataFields.push(
      this.fb.group({
        key: new UntypedFormControl('', [Validators.required, CreateTemplateDialogComponent.noWhitespace]),
        value: new UntypedFormControl(''),
      })
    );
  }

  removeActivityDataField(index: number): void {
    this.addActivityDataFields.removeAt(index);
  }

  submitActivity(listIndex: number, taskIndex: number): void {
    if (this.addActivityForm.invalid) return;
    const v = this.addActivityForm.value;
    const trimmedName = v.activityName?.trim();
    if (!trimmedName) {
      this.addActivityForm.get('activityName')?.setErrors({ whitespace: true });
      return;
    }
    const task = this.lists[listIndex].tasks[taskIndex];
    if (!task.activities) task.activities = [];
    const activity: TemplateActivity = {
      name: trimmedName,
      data: (v.dataFields ?? []).map((f: any) => ({
        key: (f.key ?? '').trim(),
        value: (f.value ?? '').trim(),
      })),
      position: task.activities.length,
    };
    task.activities.push(activity);
    this.cancelAddActivity();
    if (!this.isEditMode) this.persistCache();
  }

  removeActivity(listIndex: number, taskIndex: number, activityIndex: number): void {
    const task = this.lists[listIndex].tasks[taskIndex];
    task.activities?.splice(activityIndex, 1);
    // Re-index positions so they stay contiguous.
    task.activities?.forEach((a, i) => { a.position = i; });
    if (!this.isEditMode) this.persistCache();
  }

  get preloadedCountText(): string {
    const t = this.totalTaskCount;
    const a = this.totalActivityCount;
    const taskPart = `${t} task${t !== 1 ? 's' : ''}`;
    const actPart = a > 0 ? `, ${a} activit${a !== 1 ? 'ies' : 'y'}` : '';
    return `${taskPart}${actPart} pre-loaded`;
  }

  // ── Save ──────────────────────────────────────────────────────────────────

  /** Maximum time (ms) to wait for a save result before treating it as a failure. */
  private static readonly SAVE_TIMEOUT_MS = 30_000;

  async save(): Promise<void> {
    if (this.infoForm.invalid || this.saving) return;
    this.saving = true;
    this.saveError = null;
    this.submitting = true;

    // Prevent dismissal via ESC / backdrop / X button while the API call is in flight.
    this.dialogRef.disableClose = true;

    const v = this.infoForm.value;
    const template: BoardTemplate = {
      id: this.editTemplate?.id ?? '',
      dbId: this.editTemplate?.dbId,
      name: v.name.trim(),
      description: v.description?.trim() ?? '',
      lists: this.lists.map((l, i) => ({
        name: l.name,
        listType: l.listType,
        position: i,
        tasks: l.tasks.map((t, j) => ({
          ...t,
          position: j,
          activities: (t.activities ?? []).map((a, k) => ({ ...a, position: k })),
        })),
      })),
      isBoardTemplate: true,
    };

    let result: { saved: boolean; error?: string };

    if (this.isEditMode) {
      this.boardTemplateService.editTemplate(template);

      const editDbId = this.editTemplate!.dbId!;
      result = await firstValueFrom(
        race(
          this.actions$.pipe(
            ofType(boardTemplateActions.editBoardTemplateSuccess),
            filter((a) => a.template.dbId === editDbId),
            map(() => ({ saved: true }) as { saved: boolean; error?: string })
          ),
          this.actions$.pipe(
            ofType(boardTemplateActions.editBoardTemplateFailure),
            filter((a) => a.dbId === editDbId),
            map((a) => ({ saved: false, error: a.error?.message ?? a.error }))
          ),
          timer(CreateTemplateDialogComponent.SAVE_TIMEOUT_MS).pipe(
            map(() => ({ saved: false, error: 'Save timed out. Please try again.' }))
          )
        )
      );
    } else {
      this.boardTemplateService.saveTemplate(template);

      result = await firstValueFrom(
        race(
          this.actions$.pipe(
            ofType(boardTemplateActions.saveBoardTemplateSuccess),
            map(() => ({ saved: true }) as { saved: boolean; error?: string })
          ),
          this.actions$.pipe(
            ofType(boardTemplateActions.saveBoardTemplateFailure),
            map((a) => ({ saved: false, error: a.error?.message ?? a.error }))
          ),
          timer(CreateTemplateDialogComponent.SAVE_TIMEOUT_MS).pipe(
            map(() => ({ saved: false, error: 'Save timed out. Please try again.' }))
          )
        )
      );
    }

    this.saving = false;

    if (result.saved) {
      // Keep `submitting = true` so that ngOnDestroy does not re-persist the
      // form cache; the clearTemplateDraft$ effect will clear it after success.
      this.dialogRef.close(true);
    } else {
      // Keep the dialog open so the user can retry; re-enable close so the
      // user can also dismiss manually if desired.
      this.saveError = result.error
        ? `Failed to save template: ${result.error}`
        : 'Failed to save template. Please check your connection and try again.';
      this.dialogRef.disableClose = false;
      this.submitting = false;
    }
  }

  close(): void {
    // Do not allow manual close while a save is in flight.
    if (this.saving) return;
    this.dialogRef.close(false);
  }
}

