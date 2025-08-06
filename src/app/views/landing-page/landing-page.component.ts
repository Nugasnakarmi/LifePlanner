import { Component } from '@angular/core';
import { LoginComponent } from '../email/login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [LoginComponent],
  standalone: true,
})
export class LandingPageComponent {}
