import { BoardTemplate } from 'src/app/interfaces/board-template.interface';

export interface UserTemplateState {
  templates: BoardTemplate[];
  loading: boolean;
  saving: boolean;
  error: string | null;
}
