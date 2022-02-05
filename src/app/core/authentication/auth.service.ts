import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from '../models/login.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private baseURL = environment.api

  user = of(
    { name: "admin", token: "anpaosng", code: 200 }
  )

  error = of({
    description: "Unauthorized", code: 401
  })

  constructor() { }

  auth_login(login: Login): Observable<any> {
    if (login.password === 'admin') return this.user; else return this.error
  }

  /*login(login: Login): Observable<any> {
    return this.requestService.post(this.baseUrl + 'signin', login);
  }

  logout(): Observable<any> {
    return this.requestService.post(this.baseUrl + 'signout');
  }*/
}
