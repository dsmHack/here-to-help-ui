import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Organization, OrganizationControllerService } from '../../swagger';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css']
})
export class OrganizationProfileComponent implements OnInit {
  organizationId: string;
  org: Organization;

  constructor(private route: ActivatedRoute,
              private organizationService: OrganizationControllerService,
              private router: Router) {
    const orgId = localStorage.getItem('organizationId');
    if (orgId) {
      this.organizationId = orgId;
      this.organizationService.getOrganizationByUsingGET(this.organizationId).subscribe(x => this.org = x);
    } else {
      router.navigate(['orgs']);
    }
  }

  ngOnInit() {
  }

}
