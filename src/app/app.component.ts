import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './core/services/authentication.service';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-weather-app';

  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}
