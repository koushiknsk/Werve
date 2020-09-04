import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enrollmentp4Page } from './enrollmentp4.page';

describe('Enrollmentp4Page', () => {
  let component: Enrollmentp4Page;
  let fixture: ComponentFixture<Enrollmentp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enrollmentp4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enrollmentp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
