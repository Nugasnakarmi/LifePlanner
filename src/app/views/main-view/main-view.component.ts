import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { LoginService } from 'src/app/services/login/login.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../email/login/login.component';
import { Observable } from 'rxjs';




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
  userName = "Login";

  constructor( public loginDialog: MatDialog) { }

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
 

  openLoginDialog(){
    let loginRef = this.loginDialog.open(LoginComponent);
    loginRef.afterClosed().subscribe((userData)=>{
      if(userData){
        console.log(userData);
        this.userName = userData.userDetails._profile.data.email;

      }

    });
  }

  updateUserDetails(userDetails:any){

  }
}