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
  icon: string;
  category: string;
  tasks: BoardTemplateTask[];
  /** Present only for board templates stored in Supabase. */
  dbId?: number;
  isBoardTemplate?: boolean;
}
