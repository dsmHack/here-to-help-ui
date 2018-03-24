import { Component, OnInit } from '@angular/core';
import {Organization, Project, User} from '../../swagger';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  organizationId: string;
  organization: Organization;
  projects: Array<Project>;
  selectedProject: Project;
  user: User;

  constructor(private router: Router) {
    const orgId = localStorage.getItem('organizationId');
    if (orgId) {
      this.organizationId = orgId;
    } else {
      router.navigate(['orgs']);
    }

    this.organization = {
      name: 'Amanda the Panda',
      organizationId: '123',
      description: 'This is a test description that will eventually be a real description',
      email: 'you@gmail.com',
      phoneNumber: '208 393 4192',
      websiteUrl: 'www.google.com',
      facebookUrl: 'fb.com',
      twitterUrl: 'twitter.com',
      instagramUrl: 'instagram.com'
    };

    this.projects = [
      {projectId: '1', name: 'Project #1', description: 'the first project', startDate: new Date(), endDate: new Date()},
      {projectId: '2', name: 'Project #2', description: 'the second project', startDate: new Date(), endDate: new Date()}
    ];

    this.user = {
      userId: '1',
      email: 'user@dsmhack.org',
      firstName: 'Amanda',
      lastName: 'Test-User',
      role: 'user'
    };
  }

  ngOnInit() {
  }

  setSelectedProject(project) {
    this.selectedProject = project;
  }

  clearSelectedProject(event) {
    this.selectedProject = null;
  }

}
