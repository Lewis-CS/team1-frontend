import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
	<!-- header -->
    <app-header></app-header>
	
	<!-- test home page -->
	<app-home></app-home>
	
    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <app-footer></app-footer>
	`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team1-frontend';
  constructor(public auth: AuthService){
    auth.handleAuthentication();
  }
}
