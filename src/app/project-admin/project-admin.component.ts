import { Component, OnInit } from '@angular/core';
import { Project } from '../../swagger/model/project';

@Component({
  selector: 'app-project-admin',
  templateUrl: './project-admin.component.html',
  styleUrls: ['./project-admin.component.css']
})
export class ProjectAdminComponent implements OnInit {

  projects: Array<Project>;
  constructor() { }

  ngOnInit() {
    const project = {
      projectId: '123',
      name: 'My cool project',
      description: null,
      startDate: new Date(),
      endDate: new Date()
    };
    const project2 = {
      projectId: '124',
      name: 'My other cool project',
      description: 'This is probably the coolest project',
      startDate: new Date(),
      endDate: new Date()
    };

    this.projects = [project, project2];
  }

}
