import {Component, Input, OnInit} from '@angular/core';
import {Organization, Project} from '../../swagger';

@Component({
  selector: 'app-organization-selected-item',
  templateUrl: './organization-selected-item.component.html',
  styleUrls: ['./organization-selected-item.component.css']
})
export class OrganizationSelectedItemComponent implements OnInit {

  constructor() { }

  @Input()
  organization: Organization;

  ngOnInit() {
  }

}
