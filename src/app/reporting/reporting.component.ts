import { Component, OnInit } from '@angular/core';
import {DefaultService, Organization, ReportOrganization} from "../../swagger";
import {Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

  organizationId: string;
  organization: Organization;
  reportData: any;

  constructor(private apiService: DefaultService,
              private router: Router,
              private dataService: DataService) { }

  ngOnInit() {
    const orgId = this.dataService.getOrganizationId();
    if (orgId) {
      this.organizationId = orgId;
      this.apiService.organizationsOrganizationIdGet(this.organizationId).subscribe(x => this.organization = x);
    } else {
      this.router.navigate(['orgs']);
    }
    this.apiService.organizationsOrganizationIdReportsGet(this.organizationId)
      .subscribe(x => this.reportData = x);
  }

}
