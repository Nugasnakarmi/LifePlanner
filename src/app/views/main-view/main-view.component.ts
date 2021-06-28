import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { LoginService } from 'src/app/services/login/login.service';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})


export class MainViewComponent implements OnInit {
  ideas = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];
  research = [];
  done = [];
  todo = [];


  constructor( private loginService: LoginService) { }

  ngOnInit(): void {
  }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
 
  login(){
    this.loginService.login();
  }
}