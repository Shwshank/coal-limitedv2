import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  options: any;
  option1: any;
  option2: any;
  option3: any;
  option4: any;

  sub1: any;
  sub2: any;
  sub3: any;
  sub4: any;
  sub5: any;
  sub6: any;

  color: any;
  color1: any;

  option1_legends: any;
  option1_data: any;
  option1_data1: any;
  option1_data2: any;

  option2_legends: any;
  option2_data1: any;
  option2_data2: any;

  option3_legends: any;
  option3_data1: any;
  option3_data2: any;

  option4_legends: any;
  option4_data1: any;
  option4_data2: any;

  tableHeading: any= [];
  tableArray : any = [];
  tableTotal : any = [];

 constructor( private projectService: ProjectService ) {

   this.color = ['#9474D8','#fb8eca','#99b4f3','#118ebd'];
   this.color1 = ['#e91e63','#009688','#da534e','#8bc34a','#ff9800','#797979','#0274d8','#797979','#0274d8','#797979','#0274d8',
   '#797979','#0274d8','#797979','#0274d8','#797979','#0274d8','#797979'];


   this.sub1 = this.projectService.emitTableData.subscribe(res=>{
     this.tableHeading = res.tableHeading;
     this.tableArray = res.tableArray;
     this.tableTotal = res.tableTotal;
   })

   this.sub2 = this.projectService.emitOption1.subscribe(res=>{
     this.option1_data = res;
     this.getOption1();
   });

   this.sub3 = this.projectService.emitOption2.subscribe(res=>{
     this.option2_legends = res.legends;
     this.option2_data1 = res.data1;
     this.option2_data2 = res.data2;
     this.getOption2();
   });

   this.sub4 = this.projectService.emitOption3.subscribe(res=>{
     this.option3_legends = res.legends;
     this.option3_data1 = res.data1;
     this.option3_data2 = res.data2;
     this.getOption3();
   });

  this.sub5 =  this.projectService.emitOption4.subscribe(res=>{
     this.option4_legends = res.legends;
     this.option4_data1 = res.data1;
     this.option4_data2 = res.data2;
     this.getOption4();
   });

 }

 ngOnInit() {

    this.projectService.getTableData();
    this.projectService.getGraphData1();
    this.projectService.getGraphData2();
    this.projectService.getGraphData3();
    this.projectService.getGraphData4();

  }

  getOption1(){

    let data = this.option1_data;

    let xAxisData = [];

    this.option1 = {
     title: {
             text: ' '
         },
     tooltip: {
               padding: 5,
               backgroundColor: '#222',
               borderColor: '#777',
               borderWidth: 1,
               formatter: function (obj) {
                 var value = obj.value;
                 return  "Subsidiary" + '：' + value[3] + '<br>'
                     +"Volume Signed" + '：' + value[1]+ " mmt"  + '<br>'
                     +"Road Proportion"+ '：' + value[0]+"%"  + '<br>'
                     +"Contracts" + '：' + value[2] + '<br>';
               }
             },
     xAxis: {
             splitLine: {
                 lineStyle: {
                     type: 'dashed'
                 }
             },
             name : "Road Proportion (%)",
             nameLocation : "middle",
             nameGap : 25,
             axisLabel: {
                 formatter: '{value}%'
                     }
         },
     yAxis: {
               splitLine: {
                   lineStyle: {
                       type: 'dashed'
                   }
               },
               scale: true,
               name : "Total Volume Signed (mmt)",
               nameLocation : "middle",
               nameGap : 25
           },
     series: [{
               name: '1990',
               data: data[0],
               type: 'scatter',
               symbolSize: function (data) {
                   return data[2]/2;
               },
               label: {
                   show: true,
                   formatter: function (param) {
                       return param.data[3] + " "  + (param.data[2]);
                   },
                   position: 'top',
                   color : '#000'
               },
               itemStyle: {
                   normal: {
                       color : '#6f42c1'
                   }
                 }
             }]
     };
  }

  getOption2(){
    this.option2 = {
        color: this.color,
        itemStyle: {
          // borderWidth: 10,
          borderColor: '#FFF'
        },
        title : {
            // text: 'Sample Collected vs Declared'
            subtext: '',
            x: 'center',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:this.option2_legends
        },
        grid: {
            left: '1%',
            right: '1%',
            // bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : this.option2_data1
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : this.option2_data2
    };
  }

  getOption3(){
    this.option3 = {
        color: this.color,
        itemStyle: {
          // borderWidth: 10,
          borderColor: '#FFF'
        },
        title : {
            // text: 'Progress summary',
            subtext: '',
            x: 'center',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:this.option3_legends
        },
        grid: {
            left: '1%',
            right: '1%',
            // bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : this.option3_data1
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : this.option3_data2
    };
  }

  getOption4(){
    this.option4 = {
        color: this.color,
        itemStyle: {
          // borderWidth: 10,
          borderColor: '#FFF'
        },
        title : {
            // text: 'Progress summary',
            subtext: '',
            x: 'center',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:this.option4_legends
        },
        grid: {
            left: '1%',
            right: '1%',
            // bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : this.option4_data1
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : this.option4_data2
    };
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    this.sub4.unsubscribe();
    this.sub5.unsubscribe();
  }

}
