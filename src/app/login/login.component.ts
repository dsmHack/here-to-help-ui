import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  loginStatus: number;
  loginEmail: string;

  ngOnInit() {
    this.loginStatus = 0;
  }

  clickLogin() {
    this.loginStatus = 1;
  }

  sendMagicLink() {
    this.loginStatus = 2;
    setTimeout(() => {
      this.router.navigate(['/login-confirm']);
    }, 2500);
  }
}
