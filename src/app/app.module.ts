import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ApiModule, BASE_PATH} from '../swagger';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import { OrganizationComponent } from './organization/organization.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { OrganizationItemComponent } from './organization-item/organization-item.component';
import { OrganizationSelectedItemComponent } from './organization-selected-item/organization-selected-item.component';
import { CheckInOutWidgetComponent } from './check-in-out-widget/check-in-out-widget.component';
import { LoginConfirmComponent } from './login-confirm/login-confirm.component';
import {FormsModule} from "@angular/forms";
import { ReportingComponent } from './reporting/reporting.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserAdminRecordComponent } from './user-admin-record/user-admin-record.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OrganizationComponent,
    OrganizationItemComponent,
    NavbarComponent,
    FooterComponent,
    ProjectItemComponent,
    OrganizationSelectedItemComponent,
    CheckInOutWidgetComponent,
    LoginConfirmComponent,
    ReportingComponent,
    UserAdminComponent,
    UserAdminRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ApiModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [AppComponent]
})
export class AppModule { }
