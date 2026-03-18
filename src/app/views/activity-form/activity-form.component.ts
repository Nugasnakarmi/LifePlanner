import { Component, inject, Inject, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
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
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Activity, ActivityDataField, ActivityMedia } from 'src/app/interfaces/activity.interface';
import { StorageService } from 'src/app/services/storage/storage.service';
import { SupabaseService } from 'src/app/services/supabase/supabase.service';

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
    MatProgressBarModule,
  ],
  templateUrl: './activity-form.component.html',
  styleUrl: './activity-form.component.scss',
})
export class ActivityFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  storageService = inject(StorageService);
  private supabaseService = inject(SupabaseService);
  dialogRef = inject(MatDialogRef<ActivityFormComponent>);

  form: FormGroup;
  uploading = false;
  dragOver = false;
  readonly mediaTypes: Array<{ value: ActivityMedia['type']; label: string; icon: string }> = [
    { value: 'image', label: 'Image', icon: 'image' },
    { value: 'gif', label: 'GIF', icon: 'gif' },
    { value: 'video', label: 'Video', icon: 'videocam' },
  ];

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

  /** Handle file input change */
  async onFilesSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    await this.uploadFiles(Array.from(input.files));
    input.value = '';
  }

  /** Handle drag-over */
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver = true;
  }

  /** Handle drag-leave */
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver = false;
  }

  /** Handle drop */
  async onDrop(event: DragEvent): Promise<void> {
    event.preventDefault();
    event.stopPropagation();
    this.dragOver = false;
    const files = event.dataTransfer?.files;
    if (!files?.length) return;
    await this.uploadFiles(Array.from(files));
  }

  /** Upload one or more files and add them as media items */
  private async uploadFiles(files: File[]): Promise<void> {
    this.uploading = true;
    try {
      const user = await this.supabaseService.getUser();
      for (const file of files) {
        const url = await this.storageService.uploadFile(file, user.id);
        if (url) {
          const mediaType = this.storageService.getMediaType(file.type);
          this.addMediaItem({ type: mediaType, url, name: file.name });
        }
      }
    } finally {
      this.uploading = false;
    }
  }

  /** Check whether a media url points to an image or gif */
  isPreviewable(url: string): boolean {
    if (!url) return false;
    const lower = url.toLowerCase();
    return (
      lower.includes('image') ||
      lower.endsWith('.png') ||
      lower.endsWith('.jpg') ||
      lower.endsWith('.jpeg') ||
      lower.endsWith('.gif') ||
      lower.endsWith('.webp') ||
      lower.includes('/activity-media/')
    );
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

    this.dialogRef.close({ activity, mode: this.data.mode });
  }

  cancel(): void {
    this.dialogRef.close(null);
  }
}
