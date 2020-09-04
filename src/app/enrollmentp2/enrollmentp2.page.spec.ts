import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enrollmentp2Page } from './enrollmentp2.page';

describe('Enrollmentp2Page', () => {
  let component: Enrollmentp2Page;
  let fixture: ComponentFixture<Enrollmentp2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enrollmentp2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enrollmentp2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
