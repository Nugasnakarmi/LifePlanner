import { Component, inject, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { LoginService } from 'src/app/services/login/login.service';
import { LoginComponent } from '../email/login/login.component';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [DragDropModule],
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  ideas = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  research = [];
  done = [];
  todo = [];
  userName = 'Login';
  router = inject(Router);
  loginDialog = inject(MatDialog);

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  openLoginDialog() {
    let loginRef = this.loginDialog.open(LoginComponent);
    loginRef.afterClosed().subscribe((data) => {
      if (data) {
        console.log(data);
        if (data.userDetails.hasOwnProperty('_profile')) {
          var userName = data.userDetails._profile.data.email;
          this.userName = userName;
          console.log(userName);
        }
      }
    });
  }

  navigateToHome(): void {
    this.router.navigate(['/']);
  }

  updateUserDetails(userDetails: any) {}
}
