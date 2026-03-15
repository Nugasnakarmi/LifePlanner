import { BoardList } from 'src/app/interfaces/board-list.interface';

export interface BoardListState {
  lists: BoardList[];
  loading: boolean;
}
