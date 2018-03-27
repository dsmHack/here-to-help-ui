import { Component, OnInit } from '@angular/core';
import {DefaultService, Organization, Project, User} from "../../swagger";
import {Router} from "@angular/router";
import {DataService} from "../data.service";

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

  constructor(private router: Router,
              private dataService: DataService,
              private apiService: DefaultService) {
  }

  ngOnInit() {
    const user = this.dataService.getUserData();
    if (!user) {
      this.router.navigate(['login']);
    }
    this.user = user;

    const orgId = this.dataService.getOrganizationId();

    if (orgId) {
      this.organizationId = orgId;
    } else {
      this.router.navigate(['orgs']);
    }

    const projectId = localStorage.getItem('projectId');
    if (projectId) {
      this.apiService.projectsProjectIdGet(projectId).subscribe(x => this.setSelectedProject(x));
    }

    this.apiService.organizationsOrganizationIdGet(this.organizationId).subscribe(x => this.organization = x);
    this.apiService.projectsGet().subscribe(x => this.projects = x);
  }

  setSelectedProject(project) {
    this.selectedProject = project;
  }

  clearSelectedProject(event) {
    this.selectedProject = null;
  }

}
