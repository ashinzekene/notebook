import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  user: firebase.User;

  constructor(private auth: AuthService) {
    this.initializeApp();
  }

  initializeApp() {
    this.auth.initializeAuth();
  }
}
