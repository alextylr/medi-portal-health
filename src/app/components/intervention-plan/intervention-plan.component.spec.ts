
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionPlanComponent } from './intervention-plan.component';

describe('InterventionPlanComponent', () => {
  let component: InterventionPlanComponent;
  let fixture: ComponentFixture<InterventionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterventionPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterventionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
