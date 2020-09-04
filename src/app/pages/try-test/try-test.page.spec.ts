import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryTestPage } from './try-test.page';

describe('TryTestPage', () => {
  let component: TryTestPage;
  let fixture: ComponentFixture<TryTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
