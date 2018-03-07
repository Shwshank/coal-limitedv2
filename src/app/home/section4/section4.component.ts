import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component implements OnInit {

  option8: any;
  color: any;

  constructor() { }

  ngOnInit() {
    this.color = ['#9474D8','#fb8eca','#99b4f3','#118ebd']
    this.getOption8();
  }

  getOption8(){
    let xAxisData = [];
    let data1 = [];
    let data2 = [];

    for (let i = 0; i < 30; i++) {
      xAxisData.push('Day ' + i);
      data1.push((Math.sin(i / 2) * (i / 5 ) + i / 6) * 5);
      data2.push((Math.cos(i / 2) * (i / 5 ) + i / 6) * 5);
    }

    this.option8 = {
      color: this.color,
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
        selectedMode: false
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
          return idx * 10;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };
  }

}
