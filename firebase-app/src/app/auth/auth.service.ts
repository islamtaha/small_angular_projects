import { Injectable } from '@angular/core';

import { Router } from  "@angular/router";
import * as firebase from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private tokenService: TokenService) { }
  
  login(email: string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout(){
    this.afAuth.auth.signOut();
    this.tokenService.removeToken();
    this.router.navigate(['login']);
  }

  getToken(){
    firebase.auth().currentUser.getIdToken()
    .then(
        (token: string) => {
          this.tokenService.addToken(token);
        }
    );
    return this.tokenService.getToken();
  }

  isAuthenticated(){
    return this.tokenService.getToken() != null;
  }

}
