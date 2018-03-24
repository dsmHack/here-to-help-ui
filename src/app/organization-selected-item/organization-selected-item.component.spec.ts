import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSelectedItemComponent } from './organization-selected-item.component';

describe('OrganizationSelectedItemComponent', () => {
  let component: OrganizationSelectedItemComponent;
  let fixture: ComponentFixture<OrganizationSelectedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationSelectedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationSelectedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
