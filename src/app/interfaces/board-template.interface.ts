import { IdeaType } from '../enums/idea-type.enum';

export interface BoardTemplateTask {
  name: string;
  description: string;
  type: IdeaType;
}

export interface BoardTemplate {
  id: string;
  name: string;
  description: string;
  tasks: BoardTemplateTask[];
}
