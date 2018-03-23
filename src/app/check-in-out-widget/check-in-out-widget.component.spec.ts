import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInOutWidgetComponent } from './check-in-out-widget.component';

describe('CheckInOutWidgetComponent', () => {
  let component: CheckInOutWidgetComponent;
  let fixture: ComponentFixture<CheckInOutWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInOutWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInOutWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
