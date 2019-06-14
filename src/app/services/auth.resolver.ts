import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import firebse from 'firebase/app';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthResolver implements Resolve<Promise<firebse.User>> {
  constructor(private auth: AuthService) {}

  resolve(): Promise<firebase.User> {
    return this.auth.initializeAuth();
  }
}
