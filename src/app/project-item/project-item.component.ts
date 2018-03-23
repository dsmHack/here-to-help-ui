import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../swagger';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  constructor() { }

  @Input()
  project: Project;

  @HostListener('click')

  ngOnInit() {
  }

}
