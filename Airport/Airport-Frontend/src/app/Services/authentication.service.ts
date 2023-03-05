import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../Interfaces/index'
import{Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  login(email: string, password: string): Observable<{ token: string, user: User }> {
    const body = { email, password };
    return this.http.post<{ token: string, user: User }>('http://localhost:4000/auth/login', body).pipe(
      tap(res => localStorage.setItem('token', res.token))
    );
  }

  register(name: string, email: string, password: string): Observable<{ token: string, user: User }> {
    const body = { name, email, password };
    return this.http.post<{ token: string, user: User }>('http://localhost:4000/auth/register', body).pipe(
      tap(res => localStorage.setItem('token', res.token))
    );
  }

}
