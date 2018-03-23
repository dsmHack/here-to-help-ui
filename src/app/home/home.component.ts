import { Component, OnInit } from '@angular/core';
import {Project} from '../../swagger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: Array<Project>;

  constructor() {
    this.projects = [
      {projectId: '1', name: 'Project #1', description: 'the first project', startDate: new Date(), endDate: new Date()},
      {projectId: '2', name: 'Project #2', description: 'the second project', startDate: new Date(), endDate: new Date()}
    ];
  }

  ngOnInit() {
  }

}
