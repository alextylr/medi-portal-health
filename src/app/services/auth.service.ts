import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';


import { LoginRequest } from '../interfaces/login-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(payload: LoginRequest): Observable<any> {
    return of(true).pipe(delay(500));
  }

  checkAuth(): Observable<any> {
    return of(true);
  }

}
