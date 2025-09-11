import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  inject,
  ChangeDetectorRef,
} from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'new-board',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.scss'],
})
export class LifeplannerTitleMenuComponent implements OnChanges {
  @Input() showNewBoardMenu = false;
  @Input() newBoardNameControl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  @Output() newBoardMenuToggle = new EventEmitter<void>();
  @Output() createNewBoard = new EventEmitter<void>();

  private changeDetectorRef = inject(ChangeDetectorRef);

  ngOnChanges() {
    console.log('showNewBoardMenu changed:', this.showNewBoardMenu);
    this.changeDetectorRef.detectChanges();
  }
}
