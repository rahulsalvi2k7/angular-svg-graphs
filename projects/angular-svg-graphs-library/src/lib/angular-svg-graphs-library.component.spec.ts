import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSvgGraphsLibraryComponent } from './angular-svg-graphs-library.component';

describe('AngularSvgGraphsLibraryComponent', () => {
  let component: AngularSvgGraphsLibraryComponent;
  let fixture: ComponentFixture<AngularSvgGraphsLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSvgGraphsLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSvgGraphsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
