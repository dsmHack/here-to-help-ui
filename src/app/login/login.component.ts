import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DefaultService} from "../../swagger";
import {DataService} from "../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private apiService: DefaultService,
              private dataService: DataService) { }

  loginStatus: number;
  loginEmail: string;

  ngOnInit() {
    this.loginStatus = 0;
  }

  clickLogin() {
    this.loginStatus = 1;
  }

  sendMagicLink() {
    this.apiService.loginSendCodePost(this.loginEmail).subscribe();
    this.loginStatus = 2;
    setTimeout(() => {
      this.router.navigate(['/login-confirm']);
    }, 2500);
  }
}
