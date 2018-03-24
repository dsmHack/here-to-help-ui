import { Component, OnInit } from '@angular/core';
import {DefaultService, ReportOrganization} from '../../swagger';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

  reportData: ReportOrganization;

  constructor(private apiService: DefaultService) { }

  ngOnInit() {

    this.apiService.organizationsOrganizationIdReportsGet('1').subscribe(x => this.reportData = x);

  }

}
