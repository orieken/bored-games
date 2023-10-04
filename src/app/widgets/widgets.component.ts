import { Component } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent {
  data = {
    widgetA: {
      actual: 450,
      goal: 600
    },
    widgetB: {
      actual: 680,
      goal: 900
    },
    widgetC: {
      actual: 800,
      goal: 950
    }
  };
}
