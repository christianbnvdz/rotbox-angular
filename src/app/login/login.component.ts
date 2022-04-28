import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = { username: '', password: '' };
  err = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  logInUser(): void {
    this.authService.logInUser(this.user).subscribe(
      (data) => {
        environment.setUserToken(data.token.substring(7));
        environment.setUserId(data.userid);
        this.authService.isLoggedIn = true;
        this.router.navigate(['/files']);
      },
      (err) => {
        this.err = `Error: ${err.error.msg}`;
      }
    );
  }
}
