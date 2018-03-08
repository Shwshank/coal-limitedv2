import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component implements OnInit {

  option8: any;
  color: any;

  sub1: any;
  sub2: any;
  sub3: any;
  sub4: any;
  sub5: any;

  option8_xAxisData: any;
  option8_data: any;

  selectedMonth: any = 'Aug - 17';
  selectedSubsidary: any = 'ALL';
  selectedLocation: any = 'All Locations';

  subsidary_name: any = [];
  month_name: any = [];
  subsidaryLocation_name: any = [];

  constructor(private projectService: ProjectService) {

    this.sub1 = this.projectService.emitOption8.subscribe(res=>{
      this.option8_xAxisData = res.xAxisData;
      this.option8_data = res.data;
      this.getOption8();
    });

    this.sub2 = this.projectService.emitSubsidary_name.subscribe(res=>{
      this.subsidary_name = res;
    });

    this.sub3 = this.projectService.emitMonth_name.subscribe(res=>{
      this.month_name = res
    });

    this.sub4 = this.projectService.emitSubsidaryLocation_name.subscribe(res=>{
      this.subsidaryLocation_name = res;
    });
  }

  ngOnInit() {
    this.color = ['#9474D8','#fb8eca','#99b4f3','#118ebd']
    this.projectService.getGraphData8(this.selectedMonth, this.selectedSubsidary, this.selectedLocation);
    this.projectService.getMonthName();
    this.projectService.getSubsidaryLocation(this.selectedSubsidary);
  }

  getOption8(){
    let xAxisData = this.option8_xAxisData;
    let data1 = this.option8_data;
    let data2 = [];

    this.option8 = {
      color: this.color,
      legend: {
        // data: ['bar', 'bar2'],
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
        // name: 'bar',
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

  getMonthData(){
    this.projectService.getGraphData8(this.selectedMonth, this.selectedSubsidary, this.selectedLocation);
  }

  getSubsidaryData() {
    this.projectService.getSubsidaryLocation(this.selectedSubsidary);
    this.projectService.getGraphData8(this.selectedMonth, this.selectedSubsidary, this.selectedLocation);
  }

  getLocationData() {
    this.projectService.getGraphData8(this.selectedMonth, this.selectedSubsidary, this.selectedLocation);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    this.sub4.unsubscribe();
  }

}
