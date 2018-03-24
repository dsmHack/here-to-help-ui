import { Injectable } from '@angular/core';
import {User} from '../swagger';

@Injectable()
export class DataService {

  constructor() { }

  public getUserData(): User | null {
    const string = localStorage.getItem('user_data');
    if (string) {
      const user: User = JSON.parse(string);
      return user;
    } else {
      return null;
    }
  }

  public setUserData(user: User): void {
    const string = JSON.stringify(user);
    localStorage.setItem('user_data', string);
  }

  public removeUserData(): void {
    localStorage.removeItem('user_data');
  }

  public getOrganizationId(): string {
    const id = localStorage.getItem('organizationId');
    return id;
  }

  public setOrganizatizationId(orgId: string): void {
    localStorage.setItem('organizationId', orgId);
  }

  public removeOrganizationId(): void {
    localStorage.removeItem('organizationId');
  }

}
