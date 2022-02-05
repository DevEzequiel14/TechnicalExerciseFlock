import { Injectable } from '@angular/core';
import { UserStore } from '../models/user-store';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  static TOKEN_NAME: string = "store";

  public getToken(): UserStore {
    const token: UserStore = this.get();
    return (token) ? token : null!; //ojo con el !
  }

  public storeToken(store: UserStore, rememberMe?: boolean): void {
    if (!rememberMe) {
      localStorage.setItem(TokenService.TOKEN_NAME, JSON.stringify(store));
    } else {
      sessionStorage.setItem(TokenService.TOKEN_NAME, JSON.stringify(store));
    }
  }

  public clearToken(): void {
    localStorage.removeItem(TokenService.TOKEN_NAME);
    sessionStorage.removeItem(TokenService.TOKEN_NAME);
  }

  public get(): UserStore {
    return JSON.parse(localStorage.getItem(TokenService.TOKEN_NAME) || sessionStorage.getItem(TokenService.TOKEN_NAME)!)//ojo con el !
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  constructor() { }
}