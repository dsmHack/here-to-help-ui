import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Organization} from '../../swagger';
import {DefaultService} from '../../swagger';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css'],
  providers: [DefaultService]
})
export class OrganizationProfileComponent implements OnInit {
  organizationId: string;
  org: Organization

  constructor(private route: ActivatedRoute,
              private apiService: DefaultService,
              private router: Router) {
    const orgId = localStorage.getItem('organizationId');
    if (orgId) {
      this.organizationId = orgId;
      this.apiService.organizationsOrganizationIdGet(this.organizationId).subscribe(x => this.org = x);
    } else {
      router.navigate(['orgs']);
    }
  }

  ngOnInit() {
  }

}
