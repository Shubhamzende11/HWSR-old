import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsWidget9Component } from './charts-widget9.component';

describe('ChartsWidget9Component', () => {
  let component: ChartsWidget9Component;
  let fixture: ComponentFixture<ChartsWidget9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsWidget9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsWidget9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
