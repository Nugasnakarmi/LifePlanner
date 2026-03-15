import {
  Component,
  effect,
  input,
  output,
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
export class LifeplannerTitleMenuComponent {
  showNewBoardMenu = input<boolean>(false);
  newBoardNameControl = input<UntypedFormControl>(
    new UntypedFormControl('', [Validators.required, Validators.minLength(3)])
  );
  newBoardMenuToggle = output<void>();
  createNewBoard = output<void>();

  constructor() {
    effect(() => {
      console.log('showNewBoardMenu changed:', this.showNewBoardMenu());
    });
  }
}
