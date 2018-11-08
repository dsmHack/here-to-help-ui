import { Component, OnInit } from '@angular/core';
import { OrganizationControllerService, Organization, ReportControllerService } from '../../swagger';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

  organizationId: string;
  organization: Organization;
  reportData: any;

  constructor(private organizationControllerService: OrganizationControllerService,
              private reportService: ReportControllerService,
              private router: Router) { }

  ngOnInit() {
    const orgId = localStorage.getItem('organizationId');
    if (orgId) {
      this.organizationId = orgId;
      this.organizationControllerService.getOrganizationByUsingGET(this.organizationId).subscribe(x => this.organization = x);
    } else {
      this.router.navigate(['orgs']);
    }

    this.reportService.getReportDataAsJsonUsingGET(this.organizationId)
      .subscribe(x => this.reportData = x);
  }

}
