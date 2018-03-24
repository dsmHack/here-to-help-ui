import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DefaultService} from "../../swagger";
import {DataService} from "../data.service";

@Component({
  selector: 'app-login-confirm',
  templateUrl: './login-confirm.component.html',
  styleUrls: ['./login-confirm.component.css']
})
export class LoginConfirmComponent implements OnInit {

  loginStatus = 0;
  token: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: DefaultService,
              private dataService: DataService) {
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
    this.apiService.loginVerifyCodePost(this.token).subscribe(x => {
      this.dataService.setUserData(x);
      this.loginStatus = 2;
      this.goToOrgSelect();
    });
  }

  goToOrgSelect() {
    setTimeout(() => {
      this.router.navigate(['orgs']);
    }, 2000);
  }

}
