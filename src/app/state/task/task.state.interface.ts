import { IdeaTask } from 'src/app/interfaces/idea-task.interface';

export interface IdeaTaskState {
  tasks: IdeaTask[];
  loading: boolean;
}
