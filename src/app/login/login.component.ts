import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginControllerService } from '../../swagger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private loginService: LoginControllerService) { }

  loginStatus: number;
  loginEmail: string;

  ngOnInit() {
    this.loginStatus = 0;
  }

  clickLogin() {
    this.loginStatus = 1;
  }

  sendMagicLink() {
    this.loginService.loginUsingPOST(this.loginEmail).subscribe(x => {
      this.loginStatus = 2;
      this.router.navigate(['/login-confirm']);
    });
  }
}
