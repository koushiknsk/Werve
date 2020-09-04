import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsTabPage } from './rewards-tab.page';

describe('RewardsTabPage', () => {
  let component: RewardsTabPage;
  let fixture: ComponentFixture<RewardsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardsTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
