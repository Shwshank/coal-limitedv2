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

  option7_legends: any;
  option7_data: any;

  constructor() { }

  ngOnInit() {
    this.getOption5();
    this.getOption6();
    this.getOption7();
  }

  getOption5(){
    var data = [{
        name: 'Grandpa',
        children: [{
            name: 'Uncle Leo',
            value: 15,
            children: [{
                name: 'Cousin Jack',
                value: 2
            }, {
                name: 'Cousin Mary',
                value: 5,
                children: [{
                    name: 'Jackson',
                    value: 2
                }]
            }, {
                name: 'Cousin Ben',
                value: 4
            }]
        }, {
                name: 'Father',
                value: 10,
                children: [{
                    name: 'Me',
                    value: 5
                }, {
                    name: 'Brother Peter',
                    value: 1
                }]
            }]
        }, {
            name: 'Nancy',
            children: [{
                name: 'Uncle Nike',
                children: [{
                    name: 'Cousin Betty',
                    value: 1
                }, {
                    name: 'Cousin Jenny',
                    value: 2
                }]
            }]
        }];

    this.option5 = {
        series: {
              type: 'sunburst',
              // highlightPolicy: 'ancestor',
              data: data,
              radius: [0, '90%'],
              label: {
                  rotate: 'radial'
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
                    radius : ['50%','80%'],
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
