import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  user: firebase.User;

  constructor(private auth: AuthService, private settings: SettingsService) {
    this.initializeApp();
  }

  initializeApp() {
    this.auth.initializeAuth();
    this.settings.initalizeSettings();
  }

  ionViewWillLeave() {
    this.settings.saveConfig();
  }
}
