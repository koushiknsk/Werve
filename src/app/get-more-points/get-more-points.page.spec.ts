import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMorePointsPage } from './get-more-points.page';

describe('GetMorePointsPage', () => {
  let component: GetMorePointsPage;
  let fixture: ComponentFixture<GetMorePointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMorePointsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMorePointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
