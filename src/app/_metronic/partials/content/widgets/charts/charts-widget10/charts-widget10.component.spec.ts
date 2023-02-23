import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsWidget10Component } from './charts-widget10.component';

describe('ChartsWidget10Component', () => {
  let component: ChartsWidget10Component;
  let fixture: ComponentFixture<ChartsWidget10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsWidget10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsWidget10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
