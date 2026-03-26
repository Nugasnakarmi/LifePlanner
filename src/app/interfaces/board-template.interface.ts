import { IdeaType } from '../enums/idea-type.enum';
import { ActivityDataField } from './activity.interface';

/**
 * A lightweight activity definition stored inside a template task.
 * Unlike runtime activities it has no media (uploads don't belong in templates).
 */
export interface TemplateActivity {
  name: string;
  data?: ActivityDataField[];
  position: number;
}

export interface BoardTemplateTask {
  name: string;
  description: string;
  position: number;
  activities?: TemplateActivity[];
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
