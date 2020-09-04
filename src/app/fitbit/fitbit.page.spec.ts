import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitbitPage } from './fitbit.page';

describe('FitbitPage', () => {
  let component: FitbitPage;
  let fixture: ComponentFixture<FitbitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitbitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitbitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
