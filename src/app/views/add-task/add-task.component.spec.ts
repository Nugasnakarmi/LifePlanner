import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
      .overrideComponent(AddTaskComponent, {
        set: { schemas: [CUSTOM_ELEMENTS_SCHEMA] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleEmojiPicker', () => {
    it('should show name picker and hide description picker when toggling name', () => {
      component.toggleEmojiPicker('name');
      expect(component.showEmojiPickerForName).toBeTrue();
      expect(component.showEmojiPickerForDesc).toBeFalse();
    });

    it('should show description picker and hide name picker when toggling description', () => {
      component.toggleEmojiPicker('name');
      component.toggleEmojiPicker('description');
      expect(component.showEmojiPickerForDesc).toBeTrue();
      expect(component.showEmojiPickerForName).toBeFalse();
    });

    it('should hide name picker when toggled twice', () => {
      component.toggleEmojiPicker('name');
      component.toggleEmojiPicker('name');
      expect(component.showEmojiPickerForName).toBeFalse();
    });
  });

  describe('onEmojiSelected', () => {
    it('should append emoji to name field and close picker', () => {
      component.addTaskForm.controls['name'].setValue('Task');
      component.showEmojiPickerForName = true;
      component.onEmojiSelected({ detail: { unicode: '🎯' } }, 'name');
      expect(component.addTaskForm.controls['name'].value).toBe('Task🎯');
      expect(component.showEmojiPickerForName).toBeFalse();
    });

    it('should append emoji to description field and close picker', () => {
      component.addTaskForm.controls['description'].setValue('Desc');
      component.showEmojiPickerForDesc = true;
      component.onEmojiSelected({ detail: { unicode: '✅' } }, 'description');
      expect(component.addTaskForm.controls['description'].value).toBe('Desc✅');
      expect(component.showEmojiPickerForDesc).toBeFalse();
    });

    it('should not modify field when emoji is empty', () => {
      component.addTaskForm.controls['name'].setValue('Task');
      component.onEmojiSelected({ detail: { unicode: '' } }, 'name');
      expect(component.addTaskForm.controls['name'].value).toBe('Task');
    });
  });
});
