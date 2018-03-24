import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login-confirm',
  templateUrl: './login-confirm.component.html',
  styleUrls: ['./login-confirm.component.css']
})
export class LoginConfirmComponent implements OnInit {

  loginStatus = 0;
  token: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => {
      this.token = params['token'];

      if (this.token) {
        this.loginStatus = 1;
        this.verifyToken();
      }
    });
  }

  ngOnInit() {
  }

  verifyToken() {
    this.loginStatus = 1;
    setTimeout(() => {
      if (this.token === '12345') {
        this.loginStatus = 2;
        this.goToOrgSelect();
      } else {
        this.loginStatus = 3;
      }
    }, 2000);
  }

  goToOrgSelect() {
    setTimeout(() => {
      this.router.navigate(['orgs']);
    }, 2000);
  }

}
