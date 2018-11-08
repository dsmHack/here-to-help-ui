import { Component, OnInit } from '@angular/core';
import {OrganizationControllerService, Organization} from '../../swagger';
import {Router} from '@angular/router';

@Component({
  selector: 'app-org-list',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  orgs: Array<Organization>;

  constructor(private organizationService: OrganizationControllerService,
              private router: Router) {

    localStorage.removeItem('organizationId');
    this.organizationService.getAllOrganizationsUsingGET().subscribe(x => this.orgs = x);
  }

  ngOnInit() {
  }

  selectOrg(org: Organization) {
    localStorage.setItem('organizationId', org.orgGuid);
    this.router.navigate(['']);
  }
}
