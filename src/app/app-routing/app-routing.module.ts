import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {OrganizationComponent} from '../organization/organization.component';
import {HomeComponent} from '../home/home.component';
import {OrganizationProfileComponent} from '../organization-profile/organization-profile.component';

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
    path: 'orgs',
    component: OrganizationComponent
  },
  {
    path: 'org-profile/:guid',
    component: OrganizationProfileComponent
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
