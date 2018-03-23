import {Component, Input, OnInit} from '@angular/core';
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

  ngOnInit() {
  }

}
