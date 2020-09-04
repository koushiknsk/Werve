import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLandingPagePage } from './main-landing-p.page';

describe('MainLandingPagePage', () => {
  let component: MainLandingPagePage;
  let fixture: ComponentFixture<MainLandingPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLandingPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLandingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
