import { IdeaType } from '../enums/idea-type.enum';

export interface IdeaTask {
  name: string;
  description: string;
  type: IdeaType;
  completion_status: number;
  user_id: string;
}
