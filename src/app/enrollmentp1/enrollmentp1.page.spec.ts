import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enrollmentp1Page } from './enrollmentp1.page';

describe('Enrollmentp1Page', () => {
  let component: Enrollmentp1Page;
  let fixture: ComponentFixture<Enrollmentp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enrollmentp1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enrollmentp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
