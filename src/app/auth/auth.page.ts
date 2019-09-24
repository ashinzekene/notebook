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

  constructor(
    private auth: AuthService,
    private settings: SettingsService,
    public actionSheetController: ActionSheetController
  ) { }
  isAuthenticated = false;
  isSignUp = true;
  loading = false;
  message: string;
  user = {
    email: '',
    name: '',
    password: '',
  };

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
    this.handleRequest('signup', this.user);
  }

  logIn() {
    this.handleRequest('login', this.user);
  }

  setAuthState() {
    this.isAuthenticated = !!this.auth.user;
  }

  async handleRequest(
    type: 'signup' | 'login',
    { name, email, password }: { name ?: string, email: string, password: string }
  ) {
    this.loading = true;
    this.message = '';
    try {
      if (type === 'login') {
        await this.auth.signIn(email, password);
      } else {
        await this.auth.signUp(email, password, name);
      }
    } catch (err) {
      this.message = err.message;
    }
    this.loading = true;
    this.setAuthState();
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
