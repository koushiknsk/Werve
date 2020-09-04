import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nutritionp2Page } from './nutritionp2.page';

describe('Nutritionp2Page', () => {
  let component: Nutritionp2Page;
  let fixture: ComponentFixture<Nutritionp2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nutritionp2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nutritionp2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
