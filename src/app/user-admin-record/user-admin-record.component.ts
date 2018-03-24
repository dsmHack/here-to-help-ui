import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-admin-record',
  templateUrl: './user-admin-record.component.html',
  styleUrls: ['./user-admin-record.component.css']
})
export class UserAdminRecordComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['token'];

      if (this.id) {
        this.getUser();
      }

    });
  }

  ngOnInit() {
  }

  getUser() {

  }

}
