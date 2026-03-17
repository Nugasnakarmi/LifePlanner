import { TaskScopedActivity } from 'src/app/interfaces/activity.interface';

export interface ActivityState {
  activities: TaskScopedActivity[];
  loading: boolean;
}
