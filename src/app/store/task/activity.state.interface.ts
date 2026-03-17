import { Activity } from 'src/app/interfaces/activity.interface';

export interface ActivityState {
  activities: Activity[];
  loading: boolean;
}
