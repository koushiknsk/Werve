import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nutritionp1Page } from './nutritionp1.page';

describe('Nutritionp1Page', () => {
  let component: Nutritionp1Page;
  let fixture: ComponentFixture<Nutritionp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nutritionp1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nutritionp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
