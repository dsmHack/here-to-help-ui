import { Component, OnInit } from '@angular/core';
import {Organization, Project, User} from '../../swagger';
import {Router} from '@angular/router';

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
  }

  ngOnInit() {
    const orgId = localStorage.getItem('organizationId');
    if (orgId) {
      this.organizationId = orgId;
    } else {
      this.router.navigate(['orgs']);
    }
  }

  setSelectedProject(project) {
    this.selectedProject = project;
  }

  clearSelectedProject(event) {
    this.selectedProject = null;
  }

}
