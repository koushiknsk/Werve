import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEnrollmentPage } from './member-enrollment.page';

describe('MemberEnrollmentPage', () => {
  let component: MemberEnrollmentPage;
  let fixture: ComponentFixture<MemberEnrollmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberEnrollmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEnrollmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
