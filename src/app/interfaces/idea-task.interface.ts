import { IdeaType } from '../enums/idea-type.enum';

//This is the DTO interface
export interface IdeaTask {
  id?: number;
  name?: string;
  description?: string;
  type?: IdeaType;
  completion_status?: number;
  user_id?: string;
  board_id?: number;
  created_at?: Date;
  last_edited?: Date;
}
