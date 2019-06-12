import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isAuthenticated = false;
  isSignUp = true;
  user = {
    email: '',
    name: '',
    password: '',
  };

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.setAuthState();
    console.log('Auth?', this.isAuthenticated);
  }

  changeAuthType() {
    this.isSignUp = !this.isSignUp;
  }

  async logOut() {
    await this.auth.signOut();
    this.setAuthState();
  }

  signUp() {
    const {email, name, password} = this.user;
    this.auth.signUp(email, password, name)
      .then(console.log);
    this.setAuthState();
  }

  logIn() {
    const {email, password} = this.user;
    this.auth.signIn(email, password)
      .then(console.log);
    this.setAuthState();
  }

  setAuthState() {
    this.isAuthenticated = !!this.auth.user;
  }

}
