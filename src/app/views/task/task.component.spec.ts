import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { TaskComponent } from './task.component';
import { TaskService } from 'src/app/services/task/task.service';
import { TaskDetailComponent } from '../task-detail/task-detail.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let taskServiceSpy: jasmine.SpyObj<TaskService>;

  beforeEach(async () => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    dialogSpy.open.and.returnValue({ afterClosed: () => ({ subscribe: () => {} }) } as MatDialogRef<any>);
    taskServiceSpy = jasmine.createSpyObj('TaskService', ['taskDeletionInitiated']);

    await TestBed.configureTestingModule({
      imports: [TaskComponent],
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: TaskService, useValue: taskServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('task', { id: 1, name: 'Test Task', description: 'Test desc', type: 0 });
    fixture.componentRef.setInput('container', 'ideas');
    fixture.componentRef.setInput('index', 0);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open TaskDetailComponent fullscreen dialog on onExpandTask()', () => {
    component.onExpandTask(component.task());
    expect(dialogSpy.open).toHaveBeenCalledWith(
      TaskDetailComponent,
      jasmine.objectContaining({
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        panelClass: 'task-detail-fullscreen-dialog',
        data: { task: component.task(), container: 'ideas' },
      })
    );
  });
});
