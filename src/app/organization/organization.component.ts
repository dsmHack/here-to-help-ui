import { Component, OnInit } from '@angular/core';
import {DefaultService, Organization} from "../../swagger";

@Component({
  selector: 'app-org-list',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  orgs: Array<Organization>;

  constructor(private apiService: DefaultService) {
    this.apiService.organizationsGet().subscribe(x => this.orgs = x);
  }

  ngOnInit() {
  }
}
