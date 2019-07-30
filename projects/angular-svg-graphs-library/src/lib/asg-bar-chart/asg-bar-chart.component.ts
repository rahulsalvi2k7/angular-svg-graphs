import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'asg-bar-chart',
  templateUrl: './asg-bar-chart.component.svg',
  styleUrls: ['./asg-bar-chart.component.css']
})
export class AsgBarChartComponent implements OnInit {

  @Input() public data = [];
  @Input() public barBorderColor = "#fff";
  @Input() public barBorderStrokeWidth = "0.2";
  @Input() public barFill = "#00458a";  
  @Input() public barWidth = 20;
  @Input() public textFill = "white";
  @Input() public textFontSize = "5";
  @Input() public xAxisShow    = "true";
  @Input() public xAxisStroke  = "#ccc";
  @Input() public xAxisStrokeWidth = "0.5";
  @Input() public yAxisShow = "true";
  @Input() public yAxisStroke  = "#ccc";
  @Input() public yAxisStrokeWidth = "0.5";
  
  public bars = [];

  constructor() { }

  ngOnInit() {
    let i= 0;
    this.data.forEach(bar => {
      let o = {
        x: this.barWidth * i++,
        y: bar,
        textTransform: " translate(5, "+ ((bar*2)-7) +") scale(1, -1)"
      };
      this.bars.push(o);
    });    
  }

}
