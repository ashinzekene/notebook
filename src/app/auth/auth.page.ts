import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  async signInGoogle() {
    const userCred = await this.auth.signInWithGoogle();
    console.log(userCred);
  }

}
