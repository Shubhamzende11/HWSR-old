import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveinactivestationsComponent } from './activeinactivestations.component';

describe('ActiveinactivestationsComponent', () => {
  let component: ActiveinactivestationsComponent;
  let fixture: ComponentFixture<ActiveinactivestationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveinactivestationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveinactivestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
