import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Organization} from '../../swagger';
import {DefaultService} from '../../swagger';
import {DataService} from "../data.service";

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
              private router: Router,
              private dataService: DataService) {
    const orgId = dataService.getOrganizationId();
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
