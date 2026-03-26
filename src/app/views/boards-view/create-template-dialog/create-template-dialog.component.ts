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

    if (this.isEditMode && this.editTemplate) {
      // Pre-populate form with the existing template data (no caching in edit mode)
      this.infoForm.patchValue({
        name: this.editTemplate.name,
        description: this.editTemplate.description,
      });
      this.lists = (this.editTemplate.lists ?? []).map((l) => ({ ...l, showAddTask: false }));
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
    if (!this.isEditMode) this.persistCache();
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
    if (!this.isEditMode) this.persistCache();
  }

  removeTask(listIndex: number, taskIndex: number): void {
    this.lists[listIndex].tasks.splice(taskIndex, 1);
    if (!this.isEditMode) this.persistCache();
  }

  // ── Save ──────────────────────────────────────────────────────────────────

  /** Maximum time (ms) to wait for a save result before treating it as a failure. */
  private static readonly SAVE_TIMEOUT_MS = 30_000;

  async save(): Promise<void> {
    if (this.infoForm.invalid || this.saving) return;
    this.saving = true;
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
        tasks: l.tasks,
      })),
      isBoardTemplate: true,
    };

    let saved: boolean;

    if (this.isEditMode) {
      this.boardTemplateService.editTemplate(template);

      const editDbId = this.editTemplate!.dbId!;
      saved = await firstValueFrom(
        race(
          this.actions$.pipe(
            ofType(boardTemplateActions.editBoardTemplateSuccess),
            filter((a) => a.template.dbId === editDbId),
            map(() => true)
          ),
          this.actions$.pipe(
            ofType(boardTemplateActions.editBoardTemplateFailure),
            filter((a) => a.dbId === editDbId),
            map(() => false)
          ),
          timer(CreateTemplateDialogComponent.SAVE_TIMEOUT_MS).pipe(map(() => false))
        )
      );
    } else {
      this.boardTemplateService.saveTemplate(template);

      saved = await firstValueFrom(
        race(
          this.actions$.pipe(
            ofType(boardTemplateActions.saveBoardTemplateSuccess),
            map(() => true)
          ),
          this.actions$.pipe(
            ofType(boardTemplateActions.saveBoardTemplateFailure),
            map(() => false)
          ),
          timer(CreateTemplateDialogComponent.SAVE_TIMEOUT_MS).pipe(map(() => false))
        )
      );
    }

    this.saving = false;

    if (saved) {
      // Keep `submitting = true` so that ngOnDestroy does not re-persist the
      // form cache; the clearTemplateDraft$ effect will clear it after success.
      this.dialogRef.close(true);
    } else {
      // Keep the dialog open so the user can retry; re-enable close so the
      // user can also dismiss manually if desired.
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

