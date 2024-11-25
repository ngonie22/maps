import { Component } from '@angular/core';

@Component({
  selector: 'app-social-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.css'],
  standalone: true // Use standalone component
})
export class FacebookLoginComponent {
  loginResponse: string | null = null;

  loginWithFacebook(): void {
    this.loginResponse = 'Logged in with Facebook';
  }

  loginWithPassword(): void {
    this.loginResponse = 'Logged in with Password';
  }
}