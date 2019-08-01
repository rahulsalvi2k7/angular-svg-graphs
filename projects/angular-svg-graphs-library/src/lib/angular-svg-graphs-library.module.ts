import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgGraphsLibraryComponent } from './angular-svg-graphs-library.component';
import { AsgBarChartComponent } from './asg-bar-chart/asg-bar-chart.component';
import { AsgLineChartComponent } from './asg-line-chart/asg-line-chart.component';



@NgModule({
  declarations: [AngularSvgGraphsLibraryComponent, AsgBarChartComponent, AsgLineChartComponent],
  imports: [BrowserModule
  ],
  exports: [AngularSvgGraphsLibraryComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AngularSvgGraphsLibraryModule { }
