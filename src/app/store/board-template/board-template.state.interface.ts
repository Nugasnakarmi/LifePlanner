import { BoardTemplate } from 'src/app/interfaces/board-template.interface';

export interface BoardTemplateState {
  templates: BoardTemplate[];
  loading: boolean;
  saving: boolean;
  error: string | null;
}
