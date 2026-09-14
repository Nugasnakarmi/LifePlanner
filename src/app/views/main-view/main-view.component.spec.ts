import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { MainViewComponent } from './main-view.component';
import { TaskService } from 'src/app/services/task/task.service';
import { TaskAPIService } from 'src/app/services/task/task.api.service';
import { BoardService } from 'src/app/services/board/board.service';
import { BoardListService } from 'src/app/services/board-list/board-list.service';
import { TaskStatus } from 'src/app/enums/task-status.enum';

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  const tasks$ = new BehaviorSubject([]);
  const lists$ = new BehaviorSubject([]);
  const selectedBoard$ = new BehaviorSubject(null);

  const taskServiceSpy = jasmine.createSpyObj('TaskService', ['landingPageInitialized'], {
    tasks$,
  });
  const taskAPIServiceSpy = jasmine.createSpyObj('TaskAPIService', ['updateTaskContainer']);
  const boardServiceSpy = jasmine.createSpyObj('BoardService', [], {
    selectedBoard$,
  });
  const boardListServiceSpy = jasmine.createSpyObj(
    'BoardListService',
    ['loadLists', 'clearLists', 'editListName', 'addList', 'deleteList'],
    { lists$ }
  );
  const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TaskService, useValue: taskServiceSpy },
        { provide: TaskAPIService, useValue: taskAPIServiceSpy },
        { provide: BoardService, useValue: boardServiceSpy },
        { provide: BoardListService, useValue: boardListServiceSpy },
        { provide: MatDialog, useValue: dialogSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    component = TestBed.runInInjectionContext(() => new MainViewComponent());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('collapses only lists with completed tasks', () => {
    component.boardLists = [{ id: 1 }, { id: 2 }] as any;
    component.containerRefs = {
      1: [{ status: TaskStatus.Completed }, { status: TaskStatus.Completed }] as any,
      2: [{ status: TaskStatus.WorkingOn }] as any,
    };

    component.updateCollapsedLists();

    expect(component.isListCollapsed(1)).toBeTrue();
    expect(component.isListCollapsed(2)).toBeFalse();
  });

  it('preserves a manual expansion when defaults are recomputed', () => {
    component.boardLists = [{ id: 1 }] as any;
    component.containerRefs = {
      1: [{ status: TaskStatus.Completed }] as any,
    };

    component.updateCollapsedLists();
    component.toggleListCollapsed(1);
    component.updateCollapsedLists();

    expect(component.isListCollapsed(1)).toBeFalse();
  });

  it('preserves a manual collapse when defaults are recomputed', () => {
    component.boardLists = [{ id: 1 }] as any;
    component.containerRefs = {
      1: [{ status: TaskStatus.WorkingOn }] as any,
    };

    component.updateCollapsedLists();
    component.toggleListCollapsed(1);
    component.updateCollapsedLists();

    expect(component.isListCollapsed(1)).toBeTrue();
  });
});
