import { Component, Input } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input() tasks$: any;
  @Input() containers: any;
  @Input() containerRefs: any;
  @Input() openAddTask: any;
  @Input() drop: any;
  @Input() boardName: string = 'Board';
  editingName = false;
  tempBoardName = this.boardName;

  startEditName() {
    this.tempBoardName = this.boardName;
    this.editingName = true;
  }

  finishEditName() {
    this.boardName = this.tempBoardName.trim() || this.boardName;
    this.editingName = false;
  }

  handleNameKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.finishEditName();
    }
  }
}
