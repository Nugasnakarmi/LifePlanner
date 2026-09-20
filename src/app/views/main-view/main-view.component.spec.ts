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
  const tasks$ = new BehaviorSubject<any[]>([]);
  const lists$ = new BehaviorSubject<any[]>([]);
  const selectedBoard$ = new BehaviorSubject<any>(null);

  const taskServiceSpy = jasmine.createSpyObj('TaskService', ['landingPageInitialized', 'taskOrderPersisted'], {
    tasks$,
  });
  const taskAPIServiceSpy = jasmine.createSpyObj('TaskAPIService', ['updateTaskContainer', 'updateTaskOrder']);
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
    tasks$.next([]);
    lists$.next([]);
    selectedBoard$.next(null);
    taskServiceSpy.landingPageInitialized.calls.reset();
    taskAPIServiceSpy.updateTaskContainer.calls.reset();
    taskServiceSpy.taskOrderPersisted.calls.reset();
    boardListServiceSpy.loadLists.calls.reset();
    boardListServiceSpy.clearLists.calls.reset();

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

  it('persists task order after reordering within a list', async () => {
    const firstTask = { id: 1 } as any;
    const secondTask = { id: 2 } as any;
    const container = { id: '5', data: [firstTask, secondTask] } as any;
    taskAPIServiceSpy.updateTaskOrder.and.resolveTo(true);

    await component.drop({
      previousContainer: container,
      container,
      previousIndex: 0,
      currentIndex: 1,
    } as any);

    expect(taskAPIServiceSpy.updateTaskOrder).toHaveBeenCalledWith([2, 1]);
    expect(taskServiceSpy.taskOrderPersisted).toHaveBeenCalledWith([2, 1], 5);
  });

  it('syncs store order after moving a task across lists', async () => {
    const sourceContainer = { id: '3', data: [{ id: 1 }, { id: 2 }] } as any;
    const targetContainer = { id: '5', data: [{ id: 7 }] } as any;
    component.boardLists = [{ id: 5, position: 2 }] as any;

    taskAPIServiceSpy.updateTaskContainer.and.resolveTo(true);
    taskAPIServiceSpy.updateTaskOrder.and.resolveTo(true);

    await component.drop({
      previousContainer: sourceContainer,
      container: targetContainer,
      previousIndex: 0,
      currentIndex: 1,
    } as any);

    expect(taskAPIServiceSpy.updateTaskContainer).toHaveBeenCalledWith({
      id: 1,
      type: 2,
      boards_lists_id: 5,
    });
    expect(taskAPIServiceSpy.updateTaskOrder).toHaveBeenCalledWith([2]);
    expect(taskAPIServiceSpy.updateTaskOrder).toHaveBeenCalledWith([7, 1]);
    expect(taskServiceSpy.taskOrderPersisted).toHaveBeenCalledWith([2], 3);
    expect(taskServiceSpy.taskOrderPersisted).toHaveBeenCalledWith([7, 1], 5);
  });

  it('collapses only lists with completed tasks', () => {
    component.boardLists = [{ id: 1 }, { id: 2 }] as any;
    component.containerRefs = {
      1: [{ status: TaskStatus.Completed }, { status: TaskStatus.Completed }] as any,
      2: [{ status: TaskStatus.Initiated }] as any,
    };

    component.updateCollapsedLists();

    expect(component.isListCollapsed(1)).toBeTrue();
    expect(component.isListCollapsed(2)).toBeFalse();
  });

  it('treats legacy "Working On" status as completed when auto-collapsing', () => {
    component.boardLists = [{ id: 1 }] as any;
    component.containerRefs = {
      1: [{ status: 'Working On' }] as any,
    };

    component.updateCollapsedLists();

    expect(component.isListCollapsed(1)).toBeTrue();
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
      1: [{ status: TaskStatus.Initiated }] as any,
    };

    component.updateCollapsedLists();
    component.toggleListCollapsed(1);
    component.updateCollapsedLists();

    expect(component.isListCollapsed(1)).toBeTrue();
  });

  it('preserves a manual expansion across subsequent store emissions', () => {
    component.ngOnInit();
    selectedBoard$.next({ id: 7 });
    lists$.next([{ id: 1 }]);

    const subscription = component.tasks$.subscribe();

    tasks$.next([
      { board_id: 7, boards_lists_id: 1, status: TaskStatus.Completed },
    ] as any);
    expect(component.isListCollapsed(1)).toBeTrue();

    component.toggleListCollapsed(1);
    expect(component.isListCollapsed(1)).toBeFalse();

    tasks$.next([
      { board_id: 7, boards_lists_id: 1, status: TaskStatus.Completed },
    ] as any);

    expect(component.isListCollapsed(1)).toBeFalse();

    subscription.unsubscribe();
    component.ngOnDestroy();
  });
});
