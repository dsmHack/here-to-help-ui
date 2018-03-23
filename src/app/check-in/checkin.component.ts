import { Component } from '@angular/core';
import $ from 'jquery';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'check-in',
  templateUrl: './checkin.component.html'
})
export class CheckInComponent {
  constructor(){
    
  }
  title = 'Check In Page';
  model: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
}
