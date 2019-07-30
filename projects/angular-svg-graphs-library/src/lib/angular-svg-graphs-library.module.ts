import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgGraphsLibraryComponent } from './angular-svg-graphs-library.component';
import { AsgBarChartComponent } from './asg-bar-chart/asg-bar-chart.component';



@NgModule({
  declarations: [AngularSvgGraphsLibraryComponent, AsgBarChartComponent],
  imports: [BrowserModule
  ],
  exports: [AngularSvgGraphsLibraryComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AngularSvgGraphsLibraryModule { }
