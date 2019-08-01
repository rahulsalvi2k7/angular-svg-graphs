import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'asg-asg-line-chart',
  templateUrl: './asg-line-chart.component.svg',
  styleUrls: ['./asg-line-chart.component.css']
})
export class AsgLineChartComponent implements OnInit {

  @Input() public data: [];
  @Input() public stroke: string = "steelblue";
  @Input() public strokeWidth: number = 0.5;
  @Input() public xAxisShow = "true";
  @Input() public xAxisStroke = "#ccc";
  @Input() public xAxisStrokeWidth = "0.5";
  @Input() public yAxisShow = "true";
  @Input() public yAxisStroke = "#ccc";
  @Input() public yAxisStrokeWidth = "0.5";
  @Input() public dataLabelShow = "true";
  @Input() public textFontSize = "5";
  @Input() public textFill = "steelblue";

  public pointsString: string = "";
  public dataPoints: any[] = [];


  constructor() { }

  ngOnInit() {
    let i = 0;
    this.data.forEach(d => {
      this.pointsString += ((i * 20) + "," + (d) + " ");
      i += 1;
      this.dataPoints.push({
        x: i*20,
        y: d,
        textTransform: " translate(-20, "+ ((d*2)+2) +") scale(1, -1)"
      });
    });
    console.log(this.pointsString);
  }

}
