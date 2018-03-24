import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {OrganizationComponent} from '../organization/organization.component';
import {HomeComponent} from '../home/home.component';
import {LoginConfirmComponent} from "../login-confirm/login-confirm.component";
import {ReportingComponent} from "../reporting/reporting.component";
import {UserAdminComponent} from "../user-admin/user-admin.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login-confirm',
    component: LoginConfirmComponent
  },
  {
    path: 'login-confirm/:token',
    component: LoginConfirmComponent
  },
  {
    path: 'orgs',
    component: OrganizationComponent
  },
  {
    path: 'reporting',
    component: ReportingComponent
  },
  {
    path: 'user-admin',
    component: UserAdminComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
