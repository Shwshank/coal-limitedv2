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

  emitGV_1 = new EventEmitter<any>();
  emitGV_2 = new EventEmitter<any>();

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
  tableHeading: any= [];  tableArray : any = [];  tableTotal : any = []; subsidary_name: any=[{_id:0, name:""}]; subsidary_locatoin_name: any=[]; month_name: any=[];

  option6_legends: any; option6_data: any;  option7_legends: any;  option7_data: any;  option8_data: any=[]; option8_xAxisData: any=[];

  tempResult: any;

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

    // this.option6_data = [{name: "Within 10 days", value: 2913},{name: "Between 11 to 14 days", value: 246},{name: "Between 14 to 18 days", value: 0},{name: "More than 18 days", value: 164}];
    // this.option6_legends = ["Within 10 days","Between 11 to 14 days","Between 14 to 18 days","More than 18 days"];

    this.option7_data = [{name: "Within 10 days", value: 2913},{name: "Between 11 to 14 days", value: 246},{name: "Between 14 to 18 days", value: 0},{name: "More than 18 days", value: 164}];
    this.option7_legends = ["Within 10 days","Between 11 to 14 days","Between 14 to 18 days","More than 18 days"];

    for (let i = 0; i < 30; i++) {
      this.option8_xAxisData.push('Day ' + i);
      this.option8_data.push((Math.sin(i / 2) * (i / 5 ) + i / 6) * 5);
    }

    this.subsidary_name = [{_id:0, name:""}];
    this.month_name = ['Aug - 17', 'Sep - 17', 'Oct - 17', 'Nov - 17', 'Dec - 17', 'Jan - 18', 'Feb - 18', 'Mar - 18'];

  }

  getSubsidarySummary(subsidary){
    this.APIService.GetSubsidarySummary(subsidary).subscribe(res=>{
      console.log(res);

      this.tempResult = res
      this.subsidary_name = res.array;
      this.emitSubsidary_name.emit(this.subsidary_name);

      this.getSubsidaryName('All');
    });

  }

  login(data) {
    this.APIService.Login(data).subscribe((res)=>{
      console.log(res);
      if(res.success) {

      } else {
      }
    }, (err)=>{
      console.log(err);
    });
  }

  getTableData() {
    this.APIService.getTableData().subscribe(res=>{
      console.log(res);
      if(res.success){

        this.emitTableData.emit({tableArray: res.graph1.data, tableTotal: res.graph1.total, tableHeading: res.graph1.header});

        this.emitOption1.emit(res.graph2.data[0]);

        this.emitOption2.emit({legends: res.graph4.legends, data1: res.graph4.xAxisdata, data2: res.graph4.series});

        this.emitOption3.emit({legends: res.graph5.legends, data1: res.graph5.angleAxisdata, data2: res.graph5.series});

        this.emitOption4.emit({legends: res.graph6.legends, data1: res.graph6.angleAxisdata, data2: res.graph6.series});

      }else{
        console.log('error1');
      }
    }, err=>{
      console.log(err);
    })
    this.emitTableData.emit({tableArray: this.tableArray, tableTotal: this.tableTotal, tableHeading: this.tableHeading});
  }

  getSubsidaryName(sub) {

    // console.log(sub);

      let id = 0;
      for(let i = 0; i<this.subsidary_name.length; i++) {
        if(this.subsidary_name[i].name === sub) {
          id = this.subsidary_name[i]._id;
          break;
        }
      }
      // console.log(id);

      var colors = ['#9474D8','#99b4f3','#fb8eca','#EAE8F2','#EAE8F2'];

      this.emitOption5.emit(this.tempResult.data[id].gradeSunBurst);

      this.emitGV_1.emit(this.tempResult.data[id].slipage);

      this.emitGV_2.emit(this.tempResult.data[id].slipage2);

      this.emitOption6.emit({data: this.tempResult.data[id].graph2.data1, legends: this.tempResult.data[id].graph2.legends});

      this.emitOption7.emit({data: this.tempResult.data[id].graph1.data1, legends: this.tempResult.data[id].graph1.legends});
  }

  getSubsidaryLocation(loc) {

    this.APIService.GetSubsidiaryLocation(loc).subscribe(res=>{
      console.log(res);
      this.subsidary_locatoin_name = res.locations;
      this.emitSubsidaryLocation_name.emit(this.subsidary_locatoin_name);
    });

    // if(loc == 'ALL'){
    //   this.subsidary_locatoin_name = ['Location11 SECL','Location12 SECL', 'Location21 CCL','Location22 CCL','Location23 CCL','Location31 MCL','Location32 MCL','Location33 MCL'];
    //
    // }
    //
    // if(loc == 'SECL'){
    //   this.subsidary_locatoin_name = ['Location11 SECL','Location12 SECL'];
    //   this.emitSubsidaryLocation_name.emit(this.subsidary_locatoin_name);
    // }
    //
    // if(loc == 'CCL'){
    //   this.subsidary_locatoin_name = ['Location21 CCL','Location22 CCL','Location23 CCL']
    //   this.emitSubsidaryLocation_name.emit(this.subsidary_locatoin_name);
    // }
    //
    // if(loc == 'MCL'){
    //   this.subsidary_locatoin_name = ['Location31 MCL','Location32 MCL','Location33 MCL']
    //   this.emitSubsidaryLocation_name.emit(this.subsidary_locatoin_name);
    // }

  }

  getMonthName() {
    // this.APIService.GetMonthName().subscribe(res=>{
    //   console.log(res);
    // });
    this.emitMonth_name.emit(this.month_name);
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

    // this.emitOption5.emit(data);
    console.log(data);


  }

  getGraphData6(subsidary) {
    // this.emitOption6.emit({data: this.option6_data, legends: this.option6_legends});
  }

  getGraphData7(subsidary) {
    // this.emitOption7.emit({data: this.option7_data, legends: this.option7_legends});
  }

  getGraphData8(month, subsidary, location) {
    this.APIService.GetNewLocationMonthlyLifting(month, subsidary, location).subscribe(res=>{
      console.log(res);
      this.emitOption8.emit({xAxisData: res.x, data: res.y});
    });
    console.log(month+', '+subsidary+', '+location);
  }



}
