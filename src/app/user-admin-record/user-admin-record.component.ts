import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { User } from '../../swagger/model/user';

@Component({
  selector: 'app-user-admin-record',
  templateUrl: './user-admin-record.component.html',
  styleUrls: ['./user-admin-record.component.css']
})
export class UserAdminRecordComponent implements OnInit {

  id: string;
  user: User;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      if (this.id) {
        this.getUser();
      }

    });
  }

  ngOnInit() {
    this.user = {
      firstName: null,
      lastName: null,
      userId: null,
      role: null,
      email: null
    };
  }

  getUser() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      userId: '123',
      role: 'Developer',
      email: 'mycoolemail@email.com'
    };
  }

  saveUser() {

  }

}
