import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${environment.getUserToken()}`
    })
  }

  authenticateToken() {
    return this.http.get<any>(environment.authenticateTokenUrl, this.httpOptions);
  }

  registerUser(user: any) {
    return this.http.post<any>(environment.registerUrl, user);
  }

  logInUser(user: any) {
    return this.http.post<any>(environment.loginUrl, user);
  }
}
