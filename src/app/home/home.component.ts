import { Component, OnInit } from '@angular/core';
import { Organization, Project } from '../../swagger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  organization: Organization;
  projects: Array<Project>;
  selectedProject: Project;

  constructor() {

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
  }

  ngOnInit() {
  }

  setSelectedProject(project) {
    this.selectedProject = project;
  }

}
