import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  signInWithGoogle() {
    console.log('Sign in with google');
    return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
  }

  private oauthSignIn(provider: AuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
