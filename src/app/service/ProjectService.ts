import { EventEmitter, Injectable, } from '@angular/core';
import { APIService } from './APIService';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {

  private socket;
  ws: any;
  data: any;

  emitWsMsg = new EventEmitter<any>();
  emitTable = new EventEmitter<any>();
  emitTableData = new EventEmitter<any>();
  emitTableHeading = new EventEmitter<any>();
  emitTableArray = new EventEmitter<any>();
  emitTableTotal = new EventEmitter<any>();

  emitOption1 = new EventEmitter<any>();

  emitOption2 = new EventEmitter<any>();
  emitOption2_legends = new EventEmitter<any>();
  emitOption2_data1 = new EventEmitter<any>();
  emitOption2_data2 = new EventEmitter<any>();

  emitOption3 = new EventEmitter<any>();
  emitOption3_legends = new EventEmitter<any>();
  emitOption3_data1 = new EventEmitter<any>();
  emitOption3_data2 = new EventEmitter<any>();

  emitOption4 = new EventEmitter<any>();
  emitOption4_legends = new EventEmitter<any>();
  emitOption4_data1 = new EventEmitter<any>();
  emitOption4_data2 = new EventEmitter<any>();

  emitOption5 = new EventEmitter<any>();
  emitOption5_legends = new EventEmitter<any>();
  emitOption5_data1 = new EventEmitter<any>();
  emitOption5_data2 = new EventEmitter<any>();

  emitOption6 = new EventEmitter<any>();
  emitOption6_legends = new EventEmitter<any>();
  emitOption6_data = new EventEmitter<any>();

  emitOption7 = new EventEmitter<any>();
  emitOption7_legends = new EventEmitter<any>();
  emitOption7_data = new EventEmitter<any>();

  emitOption8 = new EventEmitter<any>();
  emitOption8_legends = new EventEmitter<any>();
  emitOption8_data1 = new EventEmitter<any>();
  emitOption8_data2 = new EventEmitter<any>();

  emitSubsidary_name = new EventEmitter<any>();
  emitMonth_name = new EventEmitter<any>();
  emitSubsidaryLocation_name = new EventEmitter<any>();

  option1_legends: any;  option1_data: any;  option1_data1: any;  option1_data2: any;  option2_legends: any;  option2_data1: any;  option2_data2: any;
  option3_legends: any;  option3_data1: any;  option3_data2: any;  option4_legends: any;  option4_data1: any;  option4_data2: any;
  tableHeading: any= [];  tableArray : any = [];  tableTotal : any = []; subsidary_name: any=[]; subsidary_locatoin_name: any=[]; month_name: any=[];

  option6_legends: any; option6_data: any;  option7_legends: any;  option7_data: any;  option8_data: any=[]; option8_xAxisData: any=[];

  constructor(private APIService: APIService) {
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

    this.option1_data = [[[39,16.0,259,'SECL'],[22,14.4,52,'MCL'],[16,3.2,13,'NCL'],[17,1.6,15,'CCL'],[51,3.7,87,'WCL']]];

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

    this.option6_data = [{name: "Within 10 days", value: 2913},{name: "Between 11 to 14 days", value: 246},{name: "Between 14 to 18 days", value: 0},{name: "More than 18 days", value: 164}];
    this.option6_legends = ["Within 10 days","Between 11 to 14 days","Between 14 to 18 days","More than 18 days"];

    this.option7_data = [{name: "Within 10 days", value: 2913},{name: "Between 11 to 14 days", value: 246},{name: "Between 14 to 18 days", value: 0},{name: "More than 18 days", value: 164}];
    this.option7_legends = ["Within 10 days","Between 11 to 14 days","Between 14 to 18 days","More than 18 days"];

    for (let i = 0; i < 30; i++) {
      this.option8_xAxisData.push('Day ' + i);
      this.option8_data.push((Math.sin(i / 2) * (i / 5 ) + i / 6) * 5);
    }

    this.subsidary_name = [{id:1, name:"SECL"}, {id:2, name:"CCL"}, {id:3, name:"MCL"}];
    this.month_name = ['Oct - 17', 'Nov - 17', 'Dec - 17', 'Jan - 18'];

  }

  login(data) {
    this.APIService.Login(data).subscribe((res)=>{
      console.log(res);
      if(res.success) {
        // localStorage.setItem('login','true1');
        // localStorage.setItem('not_All_Summary','0');
        // this.emitUserLogin.emit('user');

      } else {
        // this.toast('Invalid username or password ', 'Error!');
      }
    }, (err)=>{
      console.log(err);
      // this.toast('Invalid username or password ', 'Error!');
    });
  }

  getTableData() {
    this.emitTableData.emit({tableArray: this.tableArray, tableTotal: this.tableTotal, tableHeading: this.tableHeading});
  }

  getSubsidaryName() {
    this.emitSubsidary_name.emit(this.subsidary_name);
  }

  getSubsidaryLocation(loc) {

    if(loc == 'ALL'){
      this.subsidary_locatoin_name = ['Location11 SECL','Location12 SECL', 'Location21 CCL','Location22 CCL','Location23 CCL','Location31 MCL','Location32 MCL','Location33 MCL'];
      this.emitSubsidaryLocation_name.emit(this.subsidary_locatoin_name);
    }

    if(loc == 'SECL'){
      this.subsidary_locatoin_name = ['Location11 SECL','Location12 SECL'];
      this.emitSubsidaryLocation_name.emit(this.subsidary_locatoin_name);
    }

    if(loc == 'CCL'){
      this.subsidary_locatoin_name = ['Location21 CCL','Location22 CCL','Location23 CCL']
      this.emitSubsidaryLocation_name.emit(this.subsidary_locatoin_name);
    }

    if(loc == 'MCL'){
      this.subsidary_locatoin_name = ['Location31 MCL','Location32 MCL','Location33 MCL']
      this.emitSubsidaryLocation_name.emit(this.subsidary_locatoin_name);
    }

  }

  getMonthName() {
    this.emitMonth_name.emit(this.month_name);
  }

  getGraphData1() {
    this.emitOption1.emit(this.option1_data);
  }

  getGraphData2() {
    this.emitOption2.emit({ legends: this.option2_legends, data1: this.option2_data1, data2: this.option2_data2  });
  }

  getGraphData3() {
    this.emitOption3.emit({ legends: this.option3_legends, data1: this.option3_data1, data2: this.option3_data2  });
  }

  getGraphData4() {
    this.emitOption4.emit({ legends: this.option4_legends, data1: this.option4_data1, data2: this.option4_data2  });
  }

  getGraphData5(subsidary) {

    var colors = ['#9474D8','#99b4f3','#fb8eca','#EAE8F2','#EAE8F2'];
      var item1 = {
          color: colors[0]
      };
      var item2 = {
          color: colors[1]
      };
      var item3 = {
          color: colors[2]
      };
      var item4 = {
          color: colors[3]
      };

      var data = [
        {
          children: [
              {
                  children: [
                      {
                          name: 'GV: -3 & above',
                          value: 142,
                          itemStyle: item1
                          },
            {
                name: 'GV: -2',
                value: 221,
                itemStyle: item1
                },
            {
                name: 'GV: -1',
                value: 343,
                itemStyle: item1
                }
            ],
            name: 'Above Grade',
            itemStyle: item1
            },
          {children: [{name: 'GV: 0', value: 456,
            itemStyle: item2}],
           name: 'Same Grade',
            itemStyle: item2},
          {children: [{name: 'GV: 1', value: 442,
            itemStyle: item3},
            {name: 'GV: 2', value: 405,
            itemStyle: item3},
            {name: 'GV: 3 & above', value: 672,
            itemStyle: item3}],
           name: 'Below Grade',
            itemStyle: item3}],
         name: '',
            itemStyle: item4}
          ];

    this.emitOption5.emit(data);
  }

  getGraphData6(subsidary) {
    this.emitOption6.emit({data: this.option6_data, legends: this.option6_legends});
  }

  getGraphData7(subsidary) {
    this.emitOption7.emit({data: this.option7_data, legends: this.option7_legends});
  }

  getGraphData8(month, subsidary, location) {
    console.log(month+', '+subsidary+', '+location);
    this.emitOption8.emit({xAxisData: this.option8_xAxisData, data: this.option8_data});
  }



}
