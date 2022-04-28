import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(private router: Router, private authService: AuthService) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  ngOnInit() {
    if (environment.getUserToken()) {
      this.authService.authenticateToken().subscribe(
        (status) => {
          // room for improvement to check jwt status
          if (status.msg === 'valid jwt') this.authService.isLoggedIn = true;
          this.router.navigate(['/files']);
        },
        (err) => {
          this.router.navigate(['/login']);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    environment.deleteUserToken();
    this.authService.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
