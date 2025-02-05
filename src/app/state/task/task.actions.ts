import { createAction, createActionGroup, props } from '@ngrx/store';
import exp from 'constants';
import { IdeaTask } from 'src/app/interfaces/idea-task.interface';

export const loadTasks = createAction('[Tasks] Load Tasks');
export const loadTaskSuccess = createAction(
  '[Tasks] Load Tasks Success',
  props<{ tasks: IdeaTask[] }>()
);
export const loadTasksFailure = createAction(
  '[Tasks] Load Tasks Failure',
  props<{ error: any }>()
);
export const TaskActions = createActionGroup({
  source: 'Task API',
  events: {
    'Retrieved Task List': props<{ tasks: IdeaTask[] }>(),
  },
});
