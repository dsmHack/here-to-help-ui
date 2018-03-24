import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../../swagger';

@Component({
  selector: 'app-check-in-out-widget',
  templateUrl: './check-in-out-widget.component.html',
  styleUrls: ['./check-in-out-widget.component.css']
})
export class CheckInOutWidgetComponent implements OnInit {

  constructor() { }

  @Input()
  project: Project;

  @Output()
  deselectProject: EventEmitter<void> = new EventEmitter<void>();

  checkInDate: Date;
  checkOutDate: Date;

  ngOnInit() {
  }

  checkIn() {
    const now = Date.now();
    console.log('Check in for project!');
    console.log(this.project);
    console.log(now);

    this.checkInDate = new Date(now);
  }

  switchProjects() {
    this.deselectProject.emit();
  }

  checkOut() {
    const now = Date.now();
    console.log('Check out for project');
    console.log(this.project);
    console.log(now);

    this.checkOutDate = new Date(now);

    this.switchProjects();
  }

}
