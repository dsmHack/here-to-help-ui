import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';
import {DataService} from "../data.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showNav: boolean;

  constructor(private router: Router,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.router.events.subscribe(x => {
      if (x instanceof RoutesRecognized) {
        const path = x.url;
        switch (path) {
          case '/login':
            this.showNav = false;
            break;
          case '/login-confirm':
            this.showNav = false;
            break;
          default:
            this.showNav = true;
        }
      }
    });
  }

  logout() {
    this.dataService.removeUserData();
    this.router.navigate(['login']);
  }

}
