import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LifePlanner';
  userName = 'Login';

  router = inject(Router);
  openLogin() {
    // let loginRef = this.loginDialog.open(LoginComponent);
    // loginRef.afterClosed().subscribe((data) => {
    //   if (data) {
    //     console.log(data);
    //     if (data.userDetails.hasOwnProperty('_profile')) {
    //       var userName = data.userDetails._profile.data.email;
    //       this.userName = userName;
    //       console.log(userName);
    //     }
    //   }
    // });
    this.router.navigate(['/login']);
  }
  navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
