import { Component, OnInit } from '@angular/core';

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

  color: any;
  color1: any;

  option1_legends: any;
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

 constructor() {

   this.tableHeading = ['Subsidiary','Special Forwad E-auction','Linkage Auction','Spot Auction','Exclusive Auction','Road Proportion','Total Volume','Number of Contracts'];

   this.tableArray = [
     { d1:'SECL', d2: '2.72', d3: '11.55', d4: '1.44', d5: '0.28', d6: '39%', d7: '15.99', d8: '259'},
     { d1:'SECL', d2: '2.72', d3: '11.55', d4: '1.44', d5: '0.28', d6: '39%', d7: '15.99', d8: '259'},
     { d1:'SECL', d2: '2.72', d3: '11.55', d4: '1.44', d5: '0.28', d6: '39%', d7: '15.99', d8: '259'},
     { d1:'SECL', d2: '2.72', d3: '11.55', d4: '1.44', d5: '0.28', d6: '39%', d7: '15.99', d8: '259'},
     { d1:'SECL', d2: '2.72', d3: '11.55', d4: '1.44', d5: '0.28', d6: '39%', d7: '15.99', d8: '259'},
     { d1:'SECL', d2: '2.72', d3: '11.55', d4: '1.44', d5: '0.28', d6: '39%', d7: '15.99', d8: '259'},
     { d1:'SECL', d2: '2.72', d3: '11.55', d4: '1.44', d5: '0.28', d6: '39%', d7: '15.99', d8: '259'},
     { d1:'SECL', d2: '2.72', d3: '11.55', d4: '1.44', d5: '0.28', d6: '39%', d7: '15.99', d8: '259'},
   ]

   this.tableTotal = ['Total','5.16','31.48','2.11','0.28','','39.03','432'];

   this.option2_legends = ["Samples Collected - Road","Samples Collected - Rail","Results Declared - Road","Results Declared - Rail"];
   this.option2_data1 = ["CCL","MCL","NCL","SECL","WCL"];
   this.option2_data2 = [{name: "Samples Collected - Road", data: [12,32,33,45,21], type: "bar"},
                         {name: "Samples Collected - Rail", data: [23,21,21,11,43], type: "bar"},
                         {name: "Results Declared - Road", data: [10,42,66,12,56], type: "bar"},
                         {name: "Results Declared - Rail", data: [23,34,11,66,22], type: "bar"}];

   this.option3_legends = ["Samples Collected - Road","Samples Collected - Rail","Results Declared - Road","Results Declared - Rail"];
   this.option3_data1 = ["CCL","MCL","NCL","SECL","WCL"];
   this.option3_data2 = [{name: "Samples Collected - Road", data: [12,32,33,45,21], type: "bar"},
                         {name: "Samples Collected - Rail", data: [23,21,21,11,43], type: "bar"},
                         {name: "Results Declared - Road", data: [10,42,66,12,56], type: "bar"},
                         {name: "Results Declared - Rail", data: [23,34,11,66,22], type: "bar"}];

   this.option4_legends = ["Samples Collected - Road","Samples Collected - Rail","Results Declared - Road","Results Declared - Rail"];
   this.option4_data1 = ["CCL","MCL","NCL","SECL","WCL"];
   this.option4_data2 = [{name: "Samples Collected - Road", data: [12,32,33,45,21], type: "bar"},
                         {name: "Samples Collected - Rail", data: [23,21,21,11,43], type: "bar"},
                         {name: "Results Declared - Road", data: [10,42,66,12,56], type: "bar"},
                         {name: "Results Declared - Rail", data: [23,34,11,66,22], type: "bar"}];

    this.color = ['#9474D8','#fb8eca','#99b4f3','#118ebd']
 }

 ngOnInit() {

   this.color1 = ['#e91e63','#009688','#da534e','#8bc34a','#ff9800','#797979','#0274d8','#797979','#0274d8','#797979','#0274d8','#797979','#0274d8','#797979','#0274d8','#797979','#0274d8','#797979'];

   this.getOption1();
   this.getOption2();
   this.getOption3();
   this.getOption4();
  }

  getOption1(){
    let data = [[[39,16.0,259,'SECL'],[22,14.4,52,'MCL'],[16,3.2,13,'NCL'],[17,1.6,15,'CCL'],[51,3.7,87,'WCL']]];

    let xAxisData = [];
    let data1 = [];
    let data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

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

}
