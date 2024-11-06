import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input() task: any;
  @Input() container: any;
  @Input() index: number;
}
