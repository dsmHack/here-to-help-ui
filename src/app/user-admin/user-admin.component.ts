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
    const firstUser: User = {
      firstName: 'John',
      userId: '123',
      role: 'Developer',
      lastName: 'Doe',
      email: 'johndoe@thisismyemail.com'
    };
    const anotherOne: User = {
      firstName: 'Jane',
      userId: '124',
      role: 'Volunteer',
      lastName: 'Janes',
      email: 'janejanes@gmail.com'
    };
    this.users = [firstUser, anotherOne];
  }
}
