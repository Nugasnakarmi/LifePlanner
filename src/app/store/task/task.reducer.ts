import { createReducer, on } from '@ngrx/store';
import { IdeaTaskState } from 'src/app/store/task/task.state.interface';
import * as taskActions from './task.actions';
import * as activityActions from './activity.actions';
import * as boardActions from 'src/app/store/board/board.actions';
import * as boardListActions from 'src/app/store/board-list/board-list.actions';
import { TaskScopedActivity } from 'src/app/interfaces/activity.interface';

export const initialState: IdeaTaskState = {
  tasks: [],
  loading: false,
};

export const tasksReducer = createReducer(
  initialState,
  on(taskActions.landingPageInitialized, (state) => ({
    ...state,
    loading: true,
  })),
  on(taskActions.taskWasAdded, (state) => ({
    ...state,
    loading: true,
  })),
  on(taskActions.taskWasAddedSuccessfully, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
    loading: false,
  })),
  on(taskActions.taskWasUpdatedSuccessfully, (state, { task }) => {
    console.log('Current state:', state);
    console.log('Task received:', task);

    return {
      ...state,
      tasks: state.tasks.map((existingTask) =>
        existingTask.id === task.id
          ? { ...existingTask, ...task }
          : existingTask
      ),
      loading: false,
    };
  }),
  on(taskActions.loadTaskSuccess, (state, { tasks }) => {
    console.log('Current state:', state);
    console.log('Tasks received:', tasks);
    return {
      ...state,
      tasks,
      loading: false,
    };
  }),
  on(taskActions.taskWasDeletedSuccessfully, (state, { taskId }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== taskId),
    loading: false,
  })),
  on(boardActions.deleteBoardSuccess, (state, { boardId }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.board_id !== boardId),
  })),
  on(boardListActions.deleteBoardListSuccess, (state, { listId }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.boards_lists_id !== listId),
  })),
  on(taskActions.taskStatusUpdatedSuccessfully, (state, { taskId, status }) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === taskId ? { ...task, status } : task
    ),
  })),
  on(taskActions.taskCompletionStatusUpdatedSuccessfully, (state, { taskId, completionStatus }) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === taskId ? { ...task, completion_status: completionStatus } : task
    ),
  })),
  on(taskActions.taskOrderPersisted, (state, { orderedTaskIds, boardListId }) => {
    const positionById = new Map(orderedTaskIds.map((taskId, index) => [taskId, index]));

    const tasks = state.tasks
      .map((task) => {
        if (task.id === undefined || !positionById.has(task.id)) {
          return task;
        }

        return {
          ...task,
          boards_lists_id: boardListId,
          position: positionById.get(task.id),
        };
      })
      .sort((a, b) => {
        const listA = a.boards_lists_id ?? Number.MAX_SAFE_INTEGER;
        const listB = b.boards_lists_id ?? Number.MAX_SAFE_INTEGER;
        if (listA !== listB) {
          return listA - listB;
        }

        const positionA = a.position ?? Number.MAX_SAFE_INTEGER;
        const positionB = b.position ?? Number.MAX_SAFE_INTEGER;
        if (positionA !== positionB) {
          return positionA - positionB;
        }

        return (a.id ?? 0) - (b.id ?? 0);
      });

    return {
      ...state,
      tasks,
    };
  }),
  on(activityActions.addActivityToTaskSuccess, (state, { activity, taskActivity }) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === taskActivity.task_id
        ? {
            ...task,
            activities: [
              ...(task.activities ?? []),
              {
                ...activity,
                task_activity_id: taskActivity.id!,
                position: taskActivity.position ?? 0,
                completed: taskActivity.completed ?? false,
              } as TaskScopedActivity,
            ],
          }
        : task
    ),
  })),
  on(activityActions.updateActivitySuccess, (state, { activity }) => ({
    ...state,
    tasks: state.tasks.map((task) => {
      if (!(task.activities ?? []).some((a) => a.id === activity.id)) {
        return task;
      }
      return {
        ...task,
        activities: (task.activities ?? []).map((a) =>
          a.id === activity.id ? { ...a, ...activity } : a
        ),
      };
    }),
  })),
  on(activityActions.removeActivityFromTaskSuccess, activityActions.deleteActivitySuccess, (state, { activityId }) => ({
    ...state,
    tasks: state.tasks.map((task) => {
      if (!(task.activities ?? []).some((a) => a.id === activityId)) {
        return task;
      }
      return {
        ...task,
        activities: (task.activities ?? []).filter((a) => a.id !== activityId),
      };
    }),
  })),
  on(activityActions.toggleActivityCompleteSuccess, (state, { activityId, completed }) => ({
    ...state,
    tasks: state.tasks.map((task) => {
      if (!(task.activities ?? []).some((a) => a.id === activityId)) {
        return task;
      }
      return {
        ...task,
        activities: (task.activities ?? []).map((a) =>
          a.id === activityId ? { ...a, completed } : a
        ),
      };
    }),
  }))
);
