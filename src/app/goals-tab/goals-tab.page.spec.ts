import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsTabPage } from './goals-tab.page';

describe('GoalsTabPage', () => {
  let component: GoalsTabPage;
  let fixture: ComponentFixture<GoalsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
