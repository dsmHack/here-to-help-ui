import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAdminRecordComponent } from './project-admin-record.component';

describe('ProjectAdminRecordComponent', () => {
  let component: ProjectAdminRecordComponent;
  let fixture: ComponentFixture<ProjectAdminRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAdminRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAdminRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
