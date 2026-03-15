import { IdeaType } from '../enums/idea-type.enum';

export interface ListConfig {
  key: keyof typeof IdeaType;
  displayName: string;
}
