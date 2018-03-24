import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Organization} from '../../swagger';
import {DefaultService} from '../../swagger';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css'],
  providers: [DefaultService]
})
export class OrganizationProfileComponent implements OnInit {
  org: Organization

  constructor(private route: ActivatedRoute, private service: DefaultService) {
    this.service.organizationsGet().subscribe(x => this.org = x[0]);

    // this.org = <Organization>{
    //     name: 'Amanda the Panda!',
    //     organizationId: '123',
    //     description: 'Our Mission is to provide innovative grief support services ' +
    //     'that promote hope and healing to individuals, children, and families',
    //     email: 'you@gmail.com',
    //     phoneNumber: '208 393 4192',
    //     websiteUrl: 'www.google.com',
    //     facebookUrl: 'fb.com',
    //     twitterUrl: 'twitter.com',
    //     instagramUrl: 'instagram.com'
    //   };
  }

  ngOnInit() {
  }

}
