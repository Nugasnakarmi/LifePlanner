import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';

import { TaskDetailComponent } from './task-detail.component';
import { TaskService } from 'src/app/services/task/task.service';

describe('TaskDetailComponent', () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<TaskDetailComponent>>;
  let taskServiceSpy: jasmine.SpyObj<TaskService>;
  let editDialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
    taskServiceSpy = jasmine.createSpyObj('TaskService', ['taskDeletionInitiated']);
    editDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [TaskDetailComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { task: { id: 1, name: 'Test Task', description: 'Test desc' }, container: 'ideas' },
        },
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: TaskService, useValue: taskServiceSpy },
        { provide: MatDialog, useValue: editDialogSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display task name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.task-name')?.textContent).toContain('Test Task');
  });

  it('should close dialog on close()', () => {
    component.close();
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });

  it('should call taskDeletionInitiated and close dialog on deleteTask()', () => {
    component.deleteTask();
    expect(taskServiceSpy.taskDeletionInitiated).toHaveBeenCalledWith(1);
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });

  it('should close dialog and open edit dialog on onEditTask()', () => {
    component.onEditTask();
    expect(dialogRefSpy.close).toHaveBeenCalled();
    expect(editDialogSpy.open).toHaveBeenCalled();
  });
});
