import { NgModule } from '@angular/core';
import { AngularSvgGraphsLibraryComponent } from './angular-svg-graphs-library.component';
import { AsgBarChartComponent } from './asg-bar-chart/asg-bar-chart.component';



@NgModule({
  declarations: [AngularSvgGraphsLibraryComponent, AsgBarChartComponent],
  imports: [
  ],
  exports: [AngularSvgGraphsLibraryComponent]
})
export class AngularSvgGraphsLibraryModule { }
