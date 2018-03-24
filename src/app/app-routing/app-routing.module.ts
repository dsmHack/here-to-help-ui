import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {OrganizationComponent} from '../organization/organization.component';
import {HomeComponent} from '../home/home.component';
import {OrganizationProfileComponent} from '../organization-profile/organization-profile.component';
import {LoginConfirmComponent} from '../login-confirm/login-confirm.component';
import {ReportingComponent} from '../reporting/reporting.component';
import {UserAdminComponent} from '../user-admin/user-admin.component';
import {UserAdminRecordComponent} from '../user-admin-record/user-admin-record.component';

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
    path: 'org-profile',
    component: OrganizationProfileComponent
  },
  {
    path: 'reporting',
    component: ReportingComponent
  },
  {
    path: 'user-admin',
    component: UserAdminComponent
  },
  {
    path: 'user-admin/add',
    component: UserAdminRecordComponent
  },
  {
    path: 'user-admin/edit/:id',
    component: UserAdminRecordComponent
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
