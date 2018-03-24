import { Component, OnInit } from '@angular/core';
import {DefaultService, Organization} from "../../swagger";
import {Router} from "@angular/router";

@Component({
  selector: 'app-org-list',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  orgs: Array<Organization>;

  constructor(private apiService: DefaultService,
              private router: Router) {

    localStorage.removeItem('organizationId');
    this.apiService.organizationsGet().subscribe(x => this.orgs = x);
  }

  ngOnInit() {
  }

  selectOrg(org: Organization) {
    localStorage.setItem('organizationId', org.organizationId);
    this.router.navigate(['']);
  }
}
