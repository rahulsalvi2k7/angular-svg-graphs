import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'asg-bar-chart',
  templateUrl: './asg-bar-chart.component.svg',
  styleUrls: ['./asg-bar-chart.component.css']
})
export class AsgBarChartComponent implements OnInit {

  @Input() data = [];
  @Input() barBorderColor = "#fff";
  @Input() barBorderStrokeWidth = "0.2";
  @Input() barFill = "#00458a";  
  @Input() barWidth = 20;
  @Input() textFill = "white";
  @Input() textFontSize = "5";
  @Input() xAxisShow    = "true";
  @Input() xAxisStroke  = "#ccc";
  @Input() xAxisStrokeWidth = "0.5";
  @Input() yAxisShow = "true";
  @Input() yAxisStroke  = "#ccc";
  @Input() yAxisStrokeWidth = "0.5";
  
  private bars = [];

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
