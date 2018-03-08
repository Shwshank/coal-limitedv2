import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/ProjectService';
declare var $: any;

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  option5: any;
  option6: any;
  option7: any;

  option5_data: any;

  option6_legends: any;
  option6_data: any;
  color: any;

  sub1: any;
  sub2: any;
  sub3: any;
  sub4: any;
  sub5: any;
  sub6: any;
  selectedSubsidary: any = 'ALL';

  option7_legends: any;
  option7_data: any;
  subsidary_name: any = [];

  constructor(private projectService: ProjectService) {

    this.color = ['#9474D8','#fb8eca','#99b4f3','#118ebd'];

    this.sub1 = this.projectService.emitOption6.subscribe(res=>{
      this.option6_data = res.data;
      this.option6_legends = res.legends;
      this.getOption6();

    })

    this.sub2 = this.projectService.emitOption7.subscribe(res=>{
      this.option7_data = res.data;
      this.option7_legends = res.legends;
      this.getOption7();
    })

    this.sub3 = this.projectService.emitSubsidary_name.subscribe(res=>{
      this.subsidary_name = res;
    })

    this.sub4 = this.projectService.emitOption5.subscribe(res=>{
      this.option5_data = res;
    })

    // this.option6_data = [{name: "Within 10 days", value: 2913},{name: "Between 11 to 14 days", value: 246},{name: "Between 14 to 18 days", value: 0},{name: "More than 18 days", value: 164}];
    // this.option6_legends = ["Within 10 days","Between 11 to 14 days","Between 14 to 18 days","More than 18 days"];

    // this.option7_data = [{name: "Within 10 days", value: 2913},{name: "Between 11 to 14 days", value: 246},{name: "Between 14 to 18 days", value: 0},{name: "More than 18 days", value: 164}];
    // this.option7_legends = ["Within 10 days","Between 11 to 14 days","Between 14 to 18 days","More than 18 days"];

  }

  ngOnInit() {
    this.projectService.getGraphData5(this.selectedSubsidary);
    this.projectService.getGraphData6(this.selectedSubsidary);
    this.projectService.getGraphData7(this.selectedSubsidary);
    this.projectService.getSubsidaryName();
    $('[data-toggle="tooltip"]').tooltip()
    this.getOption5();
  }

  getOption5(){
    // var colors = ['#9474D8','#99b4f3','#fb8eca','#EAE8F2','#EAE8F2'];

    this.option5 = {
      series: {
              type: 'sunburst',
              data: this.option5_data,
              radius: [ '1%', '75%'],
              label : {
                  rotate: 'vertical',
                  color: 'darkslategray'
              },

              selectedMode: 'single',
              selectedOffset: 30,
              tooltip: {
                  show : true,
                  formatter: function (obj) {
                      console.log(obj);
                      var value = obj.name;
                      return value;
                  }
              }
          }
    };

  }

  getOption6() {
      let itemStyle = {
        normal: {
          opacity:0.7,
          color: {
            // repeat: 'repeat'
          },
          borderWidth: 3,
          borderColor: '#235894'
        }
      };
      this.option6 = {
        color: this.color,
        itemStyle: {
          borderWidth: 10,
          borderColor: '#FFF'
        },

            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
                show: false,
                min: -220,
                max: 3000,
                inRange: {
                    // colorLightness: [0, 1]
                }
            },
            legend: {
              // orient: 'vertical',
              // x: 'left',
              data:this.option6_legends
            },

            series : [
                {
                  title: {
                      // text: 'Customized Pie',
                      left: 'center',
                      top: 10,
                      textStyle: {
                          color: 'white'
                      }
                  },
                    name:'Delay',
                    type:'pie',
                    radius : ['50%','75%'],
                    center: ['50%', '50%'],
                    data:this.option6_data,
                    // roseType: 'radius',
                    label: {
                      show: false,
                        normal: {
                          show: false,
                            textStyle: {
                                color: 'black'
                            }
                        }
                    },
                    // color: this.color,
                    labelLine: {
                      show: false,
                        normal: {show: false,
                            lineStyle: {
                              show: false,
                                // color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 5,
                            length2: 2
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };
    }

  getOption7() {
      let itemStyle = {
          normal: {

              opacity:0.7,
              color: {
                  // image: piePatternImg,
                  // repeat: 'repeat'
              },
              borderWidth: 3,
              borderColor: '#235894'
          }
      };
      this.option7 = {
        color: this.color,
        itemStyle: {
          borderWidth: 10,
          borderColor: '#FFF'
        },

                  tooltip : {
                      trigger: 'item',
                      formatter: "{a} <br/>{b} : {c} ({d}%)"
                  },

                  visualMap: {
                      show: false,
                      min: -220,
                      max: 3000,
                      inRange: {
                          // colorLightness: [0, 1]
                      }
                  },
                  legend: {
                    // orient: 'vertical',
                    // x: 'left',
                    data:this.option7_legends
                  },
                      series : [
                          {
                            title: {

                                left: 'center',
                                top: 10,
                                textStyle: {
                                    color: 'white'
                                }
                            },
                              name:'Refree Challenge',
                              selectedMode: 'single',
                              selectedOffset: 30,
                              type:'pie',
                              radius : '75%',
                              center: '50%',
                              data:this.option7_data,
                              // roseType: 'radius',
                              label: {
                                show: false,
                                  normal: {
                                    show: false,
                                      textStyle: {
                                          color: 'black'
                                      }
                                  }
                              },
                              // color: this.color,
                              labelLine: {
                                show: false,
                                  normal: {show: false,
                                      lineStyle: {
                                        show: false,
                                          // color: 'rgba(255, 255, 255, 0.3)'
                                      },
                                      smooth: 0.2,
                                      length: 5,
                                      length2: 2
                                  }
                              },

                              animationType: 'scale',
                              animationEasing: 'elasticOut',
                              animationDelay: function (idx) {
                                  return Math.random() * 200;
                              }
                          }
                      ]
        };
    }

  GVDetails() {
    $("#GVDetails").modal('show');
  }

  getSubsidaryData() {
    this.projectService.getGraphData5(this.selectedSubsidary);
    this.projectService.getGraphData6(this.selectedSubsidary);
    this.projectService.getGraphData7(this.selectedSubsidary);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}
