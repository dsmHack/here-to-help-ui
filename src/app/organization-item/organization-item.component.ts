import {Component, Input, OnInit} from '@angular/core';
import {Organization} from '../../swagger';

@Component({
  selector: 'app-org-item',
  templateUrl: './organization-item.component.html',
  styleUrls: ['./organization-item.component.css']
})
export class OrganizationItemComponent implements OnInit {

  constructor() { }

  @Input()
  org: Organization;

  ngOnInit() {
  }

}
