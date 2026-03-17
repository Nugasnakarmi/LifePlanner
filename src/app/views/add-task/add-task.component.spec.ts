import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { AddTaskComponent } from './add-task.component';
import { TaskService } from 'src/app/services/task/task.service';
import { TaskMode } from 'src/app/enums/task-mode.enum';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  const taskServiceSpy = jasmine.createSpyObj('TaskService', ['taskWasAdded', 'taskWasUpdated']);
  const dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { taskType: 0, mode: TaskMode.Add } },
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: TaskService, useValue: taskServiceSpy },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render task name and description fields', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('input[formcontrolname="name"]')).toBeTruthy();
    expect(compiled.querySelector('textarea[formcontrolname="description"]')).toBeTruthy();
  });

  it('should have no emoji toggle buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.emoji-toggle-button').length).toBe(0);
  });
});
