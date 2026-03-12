import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

import { ListDetailComponent } from './list-detail.component';
import { TaskService } from 'src/app/services/task/task.service';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';
import { IdeaType } from 'src/app/enums/idea-type.enum';

describe('ListDetailComponent', () => {
  let component: ListDetailComponent;
  let fixture: ComponentFixture<ListDetailComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<ListDetailComponent>>;
  let taskServiceSpy: jasmine.SpyObj<TaskService>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  const mockTasks: IdeaTask[] = [
    { id: 1, name: 'Task One', description: 'Desc one', type: IdeaType.ideas, board_id: 10 },
    { id: 2, name: 'Task Two', description: '', type: IdeaType.ideas, board_id: 10 },
  ];

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
    taskServiceSpy = jasmine.createSpyObj('TaskService', ['taskDeletionInitiated'], {
      tasks$: of(mockTasks),
    });
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [ListDetailComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { container: 'ideas', boardId: 10 },
        },
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: TaskService, useValue: taskServiceSpy },
        { provide: MatDialog, useValue: dialogSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display container label', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.list-container-label')?.textContent?.toLowerCase()).toContain('ideas');
  });

  it('should close dialog on close()', () => {
    component.close();
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });

  it('should call taskDeletionInitiated on deleteTask()', () => {
    component.deleteTask(1);
    expect(taskServiceSpy.taskDeletionInitiated).toHaveBeenCalledWith(1);
  });

  it('should open AddTaskComponent on openAddTask()', () => {
    component.openAddTask();
    expect(dialogSpy.open).toHaveBeenCalled();
  });

  it('should open TaskDetailComponent fullscreen on onExpandTask()', () => {
    component.onExpandTask(mockTasks[0]);
    expect(dialogSpy.open).toHaveBeenCalledWith(
      jasmine.any(Function),
      jasmine.objectContaining({
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        panelClass: 'task-detail-fullscreen-dialog',
      })
    );
  });

  it('should open AddTaskComponent on onEditTask()', () => {
    component.onEditTask(mockTasks[0]);
    expect(dialogSpy.open).toHaveBeenCalled();
  });
});
