import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = { username: '', password: '' };
  msg = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  registerUser(): void {
    this.authService.registerUser(this.user).subscribe(
      (status) => {
        this.msg = 'Successfully Registered!';
        this.user.username = '';
        this.user.password = '';
      },
      (err) => {
        this.msg = `Error: ${err.error.msg}`;
      }
    );
  }
}
