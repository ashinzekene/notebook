import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: firebase.User;
  authState: Promise<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.authState = this.afAuth.authState.toPromise();
  }

  initializeAuth(): Promise<firebase.User> {
    return new Promise((resolve) => {
      this.afAuth.authState.subscribe(user => {
        this.user = user;
        resolve(user);
      });
      this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    });
  }

  async signUp(email: string, password: string, name: string): Promise<firebase.User> {
    const u = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    console.log('User created', u);
    await this.createUser(u.user, name);
    console.log('User added to DB', u);
    this.user = u.user;
    return u.user;
  }

  async signIn(email: string, password: string): Promise<firebase.User> {
    const u = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    this.user = u.user;
    return u.user;
  }

  signOut() {
    this.user = null;
    return this.afAuth.auth.signOut();
  }

  updateUser(name: string) {
    return this.afs.doc(`users/${this.user.uid}`).update({
      name,
    });
  }

  private createUser(u: firebase.User, name: string) {
    return this.afs.doc(`users/${u.uid}`).set({
      email: u.email,
      id: u.uid,
      name,
    });
  }

}
