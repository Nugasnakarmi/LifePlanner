import { IdeaType } from '../enums/idea-type.enum';

export interface BoardTemplateTask {
  name: string;
  description: string;
  position: number;
}

/** Mirrors the `board_template_lists` DB table. */
export interface BoardTemplateList {
  id?: number;
  name: string;
  /** Maps to `list_type` smallint in DB; corresponds to IdeaType enum. */
  listType: IdeaType;
  position: number;
  tasks: BoardTemplateTask[];
}

export interface BoardTemplate {
  id: string;
  dbId?: number;
  name: string;
  description: string;
  /** True for system-seeded templates visible to all users. */
  isSystem?: boolean;
  lists: BoardTemplateList[];
  /** True for user-created templates stored in Supabase. */
  isBoardTemplate?: boolean;
}
