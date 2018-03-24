import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminRecordComponent } from './user-admin-record.component';

describe('UserAdminRecordComponent', () => {
  let component: UserAdminRecordComponent;
  let fixture: ComponentFixture<UserAdminRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAdminRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdminRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
