import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { TaskComponent } from './task.component';
import { TaskService } from 'src/app/services/task/task.service';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';

function makeTask(mediaPerActivity: { type: 'image' | 'gif' | 'video'; url: string; name?: string }[][]): IdeaTask {
  return {
    id: 1,
    name: 'Test Task',
    description: 'Test desc',
    activities: mediaPerActivity.map((media, i) => ({
      id: i + 1,
      task_activity_id: i + 1,
      name: `Activity ${i + 1}`,
      position: i,
      completed: false,
      media,
    })),
  };
}

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

  describe('media thumbnail computed signals', () => {
    it('mediaThumbnails() returns empty array when task has no activities', () => {
      fixture.componentRef.setInput('task', { id: 1, name: 'T' });
      expect(component.mediaThumbnails()).toEqual([]);
    });

    it('mediaThumbnails() returns up to MAX_THUMBS images/GIFs', () => {
      const task = makeTask([
        [
          { type: 'image', url: 'http://a.com/1.jpg', name: 'A' },
          { type: 'gif',   url: 'http://a.com/2.gif' },
          { type: 'image', url: 'http://a.com/3.jpg' },
          { type: 'image', url: 'http://a.com/4.jpg' },
        ],
      ]);
      fixture.componentRef.setInput('task', task);
      expect(component.mediaThumbnails().length).toBe(component.MAX_THUMBS);
    });

    it('mediaThumbnails() excludes videos', () => {
      const task = makeTask([[
        { type: 'video', url: 'http://a.com/v.mp4' },
        { type: 'image', url: 'http://a.com/1.jpg' },
      ]]);
      fixture.componentRef.setInput('task', task);
      expect(component.mediaThumbnails().length).toBe(1);
      expect(component.mediaThumbnails()[0].type).toBe('image');
    });

    it('isPreviewableMedia() correctly identifies previewable media types', () => {
      expect(component.isPreviewableMedia({ type: 'image', url: '' })).toBeTrue();
      expect(component.isPreviewableMedia({ type: 'gif', url: '' })).toBeTrue();
      expect(component.isPreviewableMedia({ type: 'video', url: '' })).toBeFalse();
    });

    it('totalMediaCount() counts all images/GIFs across all activities', () => {
      const task = makeTask([
        [{ type: 'image', url: 'http://a.com/1.jpg' }, { type: 'gif', url: 'http://a.com/2.gif' }],
        [{ type: 'image', url: 'http://a.com/3.jpg' }, { type: 'video', url: 'http://a.com/v.mp4' }],
      ]);
      fixture.componentRef.setInput('task', task);
      expect(component.totalMediaCount()).toBe(3); // 2 + 1 image (video excluded)
    });

    it('extraMediaCount() returns 0 when total <= MAX_THUMBS', () => {
      const task = makeTask([[
        { type: 'image', url: 'http://a.com/1.jpg' },
        { type: 'image', url: 'http://a.com/2.jpg' },
      ]]);
      fixture.componentRef.setInput('task', task);
      expect(component.extraMediaCount()).toBe(0);
    });

    it('extraMediaCount() returns positive number when total > MAX_THUMBS', () => {
      const task = makeTask([[
        { type: 'image', url: 'http://a.com/1.jpg' },
        { type: 'image', url: 'http://a.com/2.jpg' },
        { type: 'image', url: 'http://a.com/3.jpg' },
        { type: 'image', url: 'http://a.com/4.jpg' },
        { type: 'image', url: 'http://a.com/5.jpg' },
      ]]);
      fixture.componentRef.setInput('task', task);
      expect(component.extraMediaCount()).toBe(2); // 5 total - 3 MAX_THUMBS
    });

    it('onThumbError() hides only the <img> and inserts a placeholder, wrapper stays visible', () => {
      const wrapper = document.createElement('div');
      const img = document.createElement('img');
      wrapper.appendChild(img);
      const mockEvent = { target: img } as unknown as Event;

      component.onThumbError(mockEvent);

      expect(img.style.display).toBe('none');
      expect(wrapper.style.display).not.toBe('none');
      expect(wrapper.querySelector('.task-media-thumb-placeholder')).toBeTruthy();
    });

    it('onThumbKeydownSpace() prevents default scroll', () => {
      const event = new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true });
      spyOn(event, 'preventDefault');

      component.onThumbKeydownSpace(event);

      expect(event.preventDefault).toHaveBeenCalled();
    });
  });
});
