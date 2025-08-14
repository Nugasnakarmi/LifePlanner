import { Board } from 'src/app/interfaces/board.interface';

export interface BoardState {
  boards: Board[];
  loading: boolean;
}
