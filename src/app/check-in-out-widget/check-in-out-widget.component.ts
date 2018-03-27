import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DefaultService, Project} from "../../swagger";

@Component({
  selector: 'app-check-in-out-widget',
  templateUrl: './check-in-out-widget.component.html',
  styleUrls: ['./check-in-out-widget.component.css']
})
export class CheckInOutWidgetComponent implements OnInit {

  constructor(private apiService: DefaultService) { }

  @Input()
  project: Project;

  @Output()
  deselectProject: EventEmitter<void> = new EventEmitter<void>();

  checkInDate: Date;
  checkOutDate: Date;

  ngOnInit() {
    const checkIn = localStorage.getItem('checkInDate');
    if (checkIn) {
      this.checkInDate = new Date(checkIn);

    }
  }

  checkIn() {
    const now = Date.now();
    console.log('Check in for project!');
    console.log(this.project);
    console.log(now);

    this.checkInDate = new Date(now);

    localStorage.setItem('checkInDate', this.checkInDate.toISOString());
    localStorage.setItem('projectId', this.project.projectId);
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

    localStorage.removeItem('checkInDate');
    localStorage.removeItem('projectId');

    this.switchProjects();
  }

}
