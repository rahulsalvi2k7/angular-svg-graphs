import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsgLineChartComponent } from './asg-line-chart.component';

describe('AsgLineChartComponent', () => {
  let component: AsgLineChartComponent;
  let fixture: ComponentFixture<AsgLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsgLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsgLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
