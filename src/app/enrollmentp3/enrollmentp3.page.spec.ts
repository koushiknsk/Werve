import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enrollmentp3Page } from './enrollmentp3.page';

describe('Enrollmentp3Page', () => {
  let component: Enrollmentp3Page;
  let fixture: ComponentFixture<Enrollmentp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enrollmentp3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enrollmentp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
