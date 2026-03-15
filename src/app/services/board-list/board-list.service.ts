import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BoardList } from 'src/app/interfaces/board-list.interface';
import { BoardListApiService } from './board-list.api.service';

@Injectable({
  providedIn: 'root',
})
export class BoardListService {
  private boardListApiService = inject(BoardListApiService);

  private listsSubject = new BehaviorSubject<BoardList[]>([]);
  lists$: Observable<BoardList[]> = this.listsSubject.asObservable();

  async loadLists(boardId: number): Promise<void> {
    const lists = await this.boardListApiService.getListsByBoardId(boardId);
    this.listsSubject.next(lists);
  }

  async addList(boardId: number, name: string): Promise<void> {
    const currentLists = this.listsSubject.getValue();
    const nextPosition = currentLists.length > 0
      ? Math.max(...currentLists.map((l) => l.position)) + 1
      : 0;

    const newList = await this.boardListApiService.addList(boardId, name, nextPosition);
    if (newList) {
      this.listsSubject.next([...currentLists, newList]);
    }
  }

  async editListName(listId: number, name: string): Promise<void> {
    const updated = await this.boardListApiService.updateListName(listId, name);
    if (updated) {
      const currentLists = this.listsSubject.getValue();
      this.listsSubject.next(
        currentLists.map((l) => (l.id === listId ? { ...l, name: updated.name } : l))
      );
    }
  }

  async deleteList(listId: number): Promise<void> {
    const success = await this.boardListApiService.deleteList(listId);
    if (success) {
      const currentLists = this.listsSubject.getValue();
      this.listsSubject.next(currentLists.filter((l) => l.id !== listId));
    }
  }

  clearLists(): void {
    this.listsSubject.next([]);
  }
}
