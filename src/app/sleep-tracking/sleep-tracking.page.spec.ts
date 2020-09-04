import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepTrackingPage } from './sleep-tracking.page';

describe('SleepTrackingPage', () => {
  let component: SleepTrackingPage;
  let fixture: ComponentFixture<SleepTrackingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepTrackingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
