import { Component } from '@angular/core';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component'; // Ensure this path is correct

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [FacebookLoginComponent] // Import your FacebookLoginComponent
})
export class AppComponent {}