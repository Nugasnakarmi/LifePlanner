import { Component, DestroyRef, inject, Inject, OnDestroy, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { debounceTime } from 'rxjs';
import { Activity, ActivityDataField, ActivityMedia } from 'src/app/interfaces/activity.interface';
import { DIALOG_CACHE_KEYS, DialogFormCacheService } from 'src/app/services/dialog-form-cache/dialog-form-cache.service';

interface ActivityFormCache {
  name: string;
  dataFields: ActivityDataField[];
  mediaItems: ActivityMedia[];
}

export interface ActivityFormData {
  taskId: number;
  activity?: Activity;
  position?: number;
  mode: 'add' | 'edit';
}

@Component({
  selector: 'app-activity-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  templateUrl: './activity-form.component.html',
  styleUrl: './activity-form.component.scss',
})
export class ActivityFormComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private formCache = inject(DialogFormCacheService);
  private destroyRef = inject(DestroyRef);
  dialogRef = inject(MatDialogRef<ActivityFormComponent>);

  form: FormGroup;
  readonly mediaTypes: Array<{ value: ActivityMedia['type']; label: string; icon: string }> = [
    { value: 'image', label: 'Image', icon: 'image' },
    { value: 'gif', label: 'GIF', icon: 'gif' },
    { value: 'video', label: 'Video', icon: 'videocam' },
  ];

  private submitting = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ActivityFormData
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new UntypedFormControl('', [Validators.required, Validators.minLength(2)]),
      dataFields: this.fb.array([]),
      mediaItems: this.fb.array([]),
    });

    if (this.data.mode === 'edit' && this.data.activity) {
      this.form.patchValue({ name: this.data.activity.name });
      (this.data.activity.data ?? []).forEach((field) => this.addDataField(field));
      (this.data.activity.media ?? []).forEach((m) => this.addMediaItem(m));
    } else {
      const cached = this.formCache.load<ActivityFormCache>(DIALOG_CACHE_KEYS.ACTIVITY_FORM);
      if (cached) {
        this.form.patchValue({ name: cached.name });
        (cached.dataFields ?? []).forEach((field) => this.addDataField(field));
        (cached.mediaItems ?? []).forEach((m) => this.addMediaItem(m));
      }
      this.form.valueChanges
        .pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef))
        .subscribe((values) => this.formCache.save(DIALOG_CACHE_KEYS.ACTIVITY_FORM, values));
    }
  }

  ngOnDestroy(): void {
    if (this.data.mode === 'add' && !this.submitting) {
      // Flush the latest form state immediately so no trailing keystrokes are lost
      // (the debounced subscription may not have fired yet when the dialog closes)
      this.formCache.save(DIALOG_CACHE_KEYS.ACTIVITY_FORM, this.form.getRawValue());
    }
  }

  get dataFields(): FormArray {
    return this.form.get('dataFields') as FormArray;
  }

  get mediaItems(): FormArray {
    return this.form.get('mediaItems') as FormArray;
  }

  addDataField(existing?: ActivityDataField): void {
    this.dataFields.push(
      this.fb.group({
        key: new UntypedFormControl(existing?.key ?? '', [Validators.required]),
        value: new UntypedFormControl(existing?.value ?? ''),
      })
    );
  }

  removeDataField(index: number): void {
    this.dataFields.removeAt(index);
  }

  addMediaItem(existing?: ActivityMedia): void {
    this.mediaItems.push(
      this.fb.group({
        type: new UntypedFormControl(existing?.type ?? 'image', [Validators.required]),
        url: new UntypedFormControl(existing?.url ?? '', [Validators.required]),
        name: new UntypedFormControl(existing?.name ?? ''),
      })
    );
  }

  removeMediaItem(index: number): void {
    this.mediaItems.removeAt(index);
  }

  getNameError(): string {
    if (this.form.controls['name'].hasError('required')) return 'Activity name is required';
    if (this.form.controls['name'].hasError('minlength')) return 'At least 2 characters required';
    return '';
  }

  submit(): void {
    if (this.form.invalid) return;

    const activity: Activity = {
      ...(this.data.activity ?? {}),
      name: this.form.value.name,
      data: this.form.value.dataFields as ActivityDataField[],
      media: this.form.value.mediaItems as ActivityMedia[],
    };

    if (this.data.mode === 'add') {
      this.submitting = true;
    }
    this.dialogRef.close({ activity, mode: this.data.mode });
  }

  cancel(): void {
    this.dialogRef.close(null);
  }
}
