import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  addToken(token: string){
    localStorage.setItem('Auth', token);
  }

  getToken(){
    return localStorage.getItem('Auth');
  }

  removeToken(){
    localStorage.removeItem('Auth');
  }

}
