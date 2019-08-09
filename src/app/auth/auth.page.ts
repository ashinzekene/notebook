import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SettingsService } from '../services/settings.service';
import { ActionSheetController } from '@ionic/angular';
import { themes, AppTheme } from '../models/settings';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
  isAuthenticated = false;
  isSignUp = true;
  message: string;
  user = {
    email: '',
    name: '',
    password: '',
  };

  constructor(
    private auth: AuthService,
    private settings: SettingsService,
    public actionSheetController: ActionSheetController
  ) { }

  async ionViewDidEnter() {
    await this.auth.initializeAuth();
    this.setAuthState();
  }

  changeAuthType() {
    this.isSignUp = !this.isSignUp;
  }

  async logOut() {
    await this.auth.signOut();
    this.setAuthState();
  }

  async signUp() {
    const {email, name, password} = this.user;
    await this.auth.signUp(email, password, name);
    this.setAuthState();
  }

  async logIn() {
    const {email, password} = this.user;
    try {
      await this.auth.signIn(email, password);
    } catch (err) {
      this.message = err.message;
    }
    this.setAuthState();
  }

  setAuthState() {
    this.isAuthenticated = !!this.auth.user;
  }

  async presentThemeSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Set theme',
      buttons: Object.keys(themes).map((theme: AppTheme) => ({
        text: themes[theme],
        handler: () => this.settings.changeTheme(theme)
      })),
    });
    await actionSheet.present();
  }

}