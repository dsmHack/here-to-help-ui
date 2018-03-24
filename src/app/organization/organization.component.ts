import { Component, OnInit } from '@angular/core';
import {DefaultService, Organization} from "../../swagger";
import {Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-org-list',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  orgs: Array<Organization>;

  constructor(private apiService: DefaultService,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.removeOrganizationId()
    this.apiService.organizationsGet().subscribe(x => this.orgs = x);
  }

  selectOrg(org: Organization) {
    this.dataService.setOrganizatizationId(org.organizationId);
    this.router.navigate(['']);
  }
}
