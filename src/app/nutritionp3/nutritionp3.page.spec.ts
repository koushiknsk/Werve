import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nutritionp3Page } from './nutritionp3.page';

describe('Nutritionp3Page', () => {
  let component: Nutritionp3Page;
  let fixture: ComponentFixture<Nutritionp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nutritionp3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nutritionp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
