import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsgBarChartComponent } from './asg-bar-chart.component';

describe('AsgBarChartComponent', () => {
  let component: AsgBarChartComponent;
  let fixture: ComponentFixture<AsgBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsgBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsgBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
