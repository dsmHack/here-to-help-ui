import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Project } from '../../swagger/model/project';

@Component({
  selector: 'app-project-admin-record',
  templateUrl: './project-admin-record.component.html',
  styleUrls: ['./project-admin-record.component.css']
})
export class ProjectAdminRecordComponent implements OnInit {

  id: string;
  project: Project;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];

    });
  }

  ngOnInit() {
    this.project = {
      projectId: null,
      name: null,
      description: null,
      startDate: null,
      endDate: null
    };

    if (this.id) {
      this.getProject();
    }
  }

  getProject() {
    this.project = {
      projectId: '123',
      name: 'This is the best project ever',
      description: 'This is the description of the best project ever',
      startDate: new Date(),
      endDate: new Date()
    };
  }

  saveProject() {

  }

}
