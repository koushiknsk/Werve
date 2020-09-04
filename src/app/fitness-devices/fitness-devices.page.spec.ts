import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessDevicesPage } from './fitness-devices.page';

describe('FitnessDevicesPage', () => {
  let component: FitnessDevicesPage;
  let fixture: ComponentFixture<FitnessDevicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessDevicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessDevicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
