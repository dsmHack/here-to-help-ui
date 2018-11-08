import { Component, OnInit } from '@angular/core';
import { User } from '../../swagger/model/user';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  users: Array<User>;
  constructor() { }

  ngOnInit() {
    this.users = null; // todo: get users
  }
}
