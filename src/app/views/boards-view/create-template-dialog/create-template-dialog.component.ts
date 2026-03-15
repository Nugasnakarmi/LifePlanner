import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
import { BoardTemplate, BoardTemplateTask } from 'src/app/interfaces/board-template.interface';
import { IdeaType } from 'src/app/enums/idea-type.enum';
import { BoardTemplateService } from 'src/app/services/board-template/board-template.service';


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
export class CreateTemplateDialogComponent implements OnInit {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<CreateTemplateDialogComponent>);
  private boardTemplateService = inject(BoardTemplateService);

  saving = false;
  showAddTaskForm = false;
  tasks: BoardTemplateTask[] = [];

  infoForm!: FormGroup;
  addTaskForm!: FormGroup;

  categories = [
    { key: 'health', label: 'Health', icon: 'favorite', color: '#48c78e' },
    { key: 'productivity', label: 'Productivity', icon: 'rocket_launch', color: '#4895ef' },
    { key: 'finance', label: 'Finance', icon: 'savings', color: '#F9D07A' },
    { key: 'custom', label: 'Custom', icon: 'star', color: '#b07fff' },
  ];

  columnTypes: ColumnType[] = [
    { value: IdeaType.goals, label: 'Goals', icon: 'flag' },
    { value: IdeaType.objectives, label: 'Objectives', icon: 'track_changes' },
    { value: IdeaType.ideas, label: 'Ideas', icon: 'lightbulb' },
    { value: IdeaType.achievements, label: 'Achievements', icon: 'emoji_events' },
    { value: IdeaType.symptoms, label: 'Symptoms / Notes', icon: 'sticky_note_2' },
  ];

  iconOptions = [
    'healing', 'self_improvement', 'fitness_center', 'medical_services',
    'account_balance_wallet', 'work', 'school', 'checklist',
    'star', 'favorite', 'home', 'psychology',
    'eco', 'spa', 'restaurant', 'directions_run',
    'business_center', 'trending_up', 'savings', 'volunteer_activism',
    'book', 'science', 'travel_explore', 'lightbulb',
    'rocket_launch', 'workspace_premium', 'diversity_3', 'sports_gymnastics',
    'palette', 'music_note', 'language', 'wb_sunny',
  ];

  get selectedCategoryColor(): string {
    const cat = this.infoForm?.get('category')?.value;
    return this.categories.find((c) => c.key === cat)?.color ?? '#F9D07A';
  }

  get selectedCategoryLabel(): string {
    const cat = this.infoForm?.get('category')?.value;
    return this.categories.find((c) => c.key === cat)?.label ?? '';
  }

  get taskColumnSummary() {
    return this.columnTypes.map((col) => ({
      ...col,
      count: this.tasks.filter((t) => t.type === col.value).length,
    }));
  }

  ngOnInit(): void {
    this.infoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      icon: ['star', Validators.required],
      category: ['custom', Validators.required],
    });

    this.addTaskForm = this.fb.group({
      taskName: ['', Validators.required],
      taskDescription: [''],
      taskType: [IdeaType.goals, Validators.required],
    });
  }

  getTypeIcon(type: IdeaType): string {
    return this.columnTypes.find((c) => c.value === type)?.icon ?? 'task';
  }

  getTypeName(type: IdeaType): string {
    return IdeaType[type] ?? 'custom';
  }

  getTypeLabel(type: IdeaType): string {
    return this.columnTypes.find((c) => c.value === type)?.label ?? 'Task';
  }

  getTasksForType(type: IdeaType): BoardTemplateTask[] {
    return this.tasks.filter((t) => t.type === type);
  }

  submitTask(): void {
    if (this.addTaskForm.invalid) return;
    const v = this.addTaskForm.value;
    this.tasks.push({
      name: v.taskName.trim(),
      description: v.taskDescription?.trim() ?? '',
      type: v.taskType,
    });
    this.addTaskForm.reset({ taskType: IdeaType.goals });
    this.showAddTaskForm = false;
  }

  cancelAddTask(): void {
    this.addTaskForm.reset({ taskType: IdeaType.goals });
    this.showAddTaskForm = false;
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  async save(): Promise<void> {
    if (this.infoForm.invalid || this.saving) return;
    this.saving = true;

    const v = this.infoForm.value;
    const template: BoardTemplate = {
      id: '',
      name: v.name.trim(),
      description: v.description?.trim() ?? '',
      icon: v.icon,
      category: v.category,
      tasks: [...this.tasks],
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
