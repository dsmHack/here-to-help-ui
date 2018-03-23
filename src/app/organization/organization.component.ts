import { Component, OnInit } from '@angular/core';
import {Organization} from '../../swagger';

@Component({
  selector: 'org-list',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  orgs:Array<Organization>;

  constructor() {
    const org1: Organization =
      {
        name: 'Name1',
        organizationId: '123',
        description: 'My Description',
        email: 'you@gmail.com',
        phoneNumber: '208 393 4192',
        websiteUrl: 'www.google.com',
        facebookUrl: 'fb.com',
        twitterUrl: 'twitter.com',
        instagramUrl: 'instagram.com'
      };
    const org2: Organization =
      {
        name: 'Name2',
        organizationId: '123',
        description: 'My Description',
        email: 'you@gmail.com',
        phoneNumber: '208 393 4192',
        websiteUrl: 'www.google.com',
        facebookUrl: 'fb.com',
        twitterUrl: 'twitter.com',
        instagramUrl: 'instagram.com'
      }

    this.orgs = [org1,org2];
  }

  ngOnInit() {
  }
}
