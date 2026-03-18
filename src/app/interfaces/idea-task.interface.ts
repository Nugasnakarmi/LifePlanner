import { IdeaType } from '../enums/idea-type.enum';
import { TaskStatus } from '../enums/task-status.enum';
import { TaskScopedActivity } from './activity.interface';

//This is the DTO interface
export interface IdeaTask {
  id?: number;
  name?: string;
  description?: string;
  type?: IdeaType;
  completion_status?: number;
  status?: TaskStatus;
  user_id?: string;
  board_id?: number;
  boards_lists_id?: number;
  created_at?: Date;
  last_edited?: Date;
  activities?: TaskScopedActivity[];
}
