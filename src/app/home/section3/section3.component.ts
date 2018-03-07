import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  option5: any;
  option6: any;
  option7: any;

  option6_legends: any;
  option6_data: any;

  color: any;

  option7_legends: any;
  option7_data: any;

  constructor() {

    this.option6_data = [{name: "Within 10 days", value: 2913},{name: "Between 11 to 14 days", value: 246},{name: "Between 14 to 18 days", value: 0},{name: "More than 18 days", value: 164}];
    this.option6_legends = ["Within 10 days","Between 11 to 14 days","Between 14 to 18 days","More than 18 days"];

    this.option7_data = [{name: "Within 10 days", value: 2913},{name: "Between 11 to 14 days", value: 246},{name: "Between 14 to 18 days", value: 0},{name: "More than 18 days", value: 164}];
    this.option7_legends = ["Within 10 days","Between 11 to 14 days","Between 14 to 18 days","More than 18 days"];

    this.color = ['#9474D8','#fb8eca','#99b4f3','#118ebd'];
  }

  ngOnInit() {
    this.getOption5();
    this.getOption6();
    this.getOption7();
  }

  getOption5(){
    var colors = ['#9474D8','#fb8eca','#99b4f3','#EAE8F2','#EAE8F2'];
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
          var data = [     {
              children: [
                  {
                      children: [
                          {
                              name: 'Grade Variation: -3 & above',
                              value: 142,
                              itemStyle: item1
                              },
          {
              name: 'Grade Variation: -2',
              value: 221,
              itemStyle: item1
              },
          {
              name: 'Grade Variation: -1',
              value: 343,
              itemStyle: item1
              }
          ],
          name: 'Above Grade',
          itemStyle: item1
          },
        {children: [{name: 'Grade Variation: 0', value: 456,
          itemStyle: item2}],
         name: 'Same Grade',
          itemStyle: item2},
        {children: [{name: 'Grade Variation: 1', value: 442,
          itemStyle: item3},
          {name: 'Grade Variation: 2', value: 405,
          itemStyle: item3},
          {name: 'Grade Variation: 3 & above', value: 672,
          itemStyle: item3}],
         name: 'Below Grade',
          itemStyle: item3}],
       name: 'Grade Variance',
          itemStyle: item4}];

    this.option5 = {
      series: {
              type: 'sunburst',
              data: data,
              radius: [0, '80%'],
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
                      // return  "Subsidiary" + '：' + value[3] + '<br>'
                      //         +"Volume Signed" + '：' + value[1]+ " mmt"  + '<br>'
                      //         +"Road Proportion"+ '：' + value[0]+"%"  + '<br>'
                      //         +"Contracts" + '：' + value[2] + '<br>';
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
                              radius : '76%',
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

}
