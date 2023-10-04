import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cool-chart',
  templateUrl: './cool-chart.component.html',
  styleUrls: ['./cool-chart.component.css']
})
export class CoolChartComponent implements OnInit {

  @Input() actualValue!: number;
  @Input() goalValue!: number;
  @Input() maxValue = 1000; // Maximum possible value

  percentage!: number;
  goalPercentage!: number;
  barWidthPercentage: string = (this.actualValue / 1000) * 100 + '%';

  ngOnInit(): void {
    this.percentage = (this.actualValue / this.maxValue) * 100;
    this.goalPercentage = (this.goalValue / this.maxValue) * 100;
  }
}
