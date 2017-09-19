export default {
  name:'lineProcess',
  data(){
    return{
      data:[1, 1, 1, 1],
      xMax:100,
      axisColor:'#fff'
    }
  },

  props:['lineProcessData'],

  watch:{
    'lineProcessData':function (n,o) {
      var temp = n;
      this.updateData();
    }
  },

  methods:{
    drawDiagram: function () {
      let diagram = this.$echarts.init(document.getElementById('lineProcess'));
      diagram.setOption({

        tooltip: {
          show: true,
          formatter: "{b} <br> {c}件"

        },

        xAxis: [{
          axisTick: {
            show: false,
            // color:'#fff',
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false
            //color:'#fff',
          },
          splitLine: {
            show: false,
            // color:'#fff',
          }
        }],
        grid: {
          x:0,
          x2:0,
          y:0,
          y2:0,
          width: '80%'
        },
        yAxis: [{
          position:'right',
          type: 'category',
          data: ['125,021', '125,021', '125,021', '125,021'],

          axisTick: {
            // color:'#fff',
            show: false,
          },
          axisLine: {
            //  color:'#fff',
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: '#FFF',
            }
          }

        }],
        series: [{

          name: ' ',
          type: 'bar',
          barWidth: 16,
          silent: true,
          itemStyle: {
            normal: {
              color: '#000',
              barBorderRadius: [10, 10, 10, 10],
            }
          },
          barGap: '-100%',
          barCategoryGap: '50%',
          data: this.data.map(function(d) {
            return 100
          }),
        },
          {
            name: ' ',
            type: 'bar',
            barWidth: 16,
            label: {
              normal: {
                color:'#FFF',
                show: true,
                position: 'top',
                formatter: '{c}%',
              }
            },
            data: [
              {
                value: 89,
                itemStyle: {
                  normal: {
                    barBorderRadius: [10, 10, 10, 10],
                    color: {
                      type: 'bar',
                      colorStops: [{
                        offset: 0,
                        color: 'rgba(46,156,225,1)' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#56e8ff' // 100% 处的颜色
                      }],
                      globalCoord: false, // 缺省为 false

                    }
                  }
                }
              },
              {
                value: 98,
                itemStyle: {
                  // normal:{color:'#b250ff',barBorderRadius:[0,10,10,0],}
                  normal: {
                    barBorderRadius: [10, 10, 10, 10],
                    color: {
                      type: 'bar',
                      colorStops: [{
                        offset: 0,
                        color: 'rgba(46,156,225,1)' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#56e8ff' // 100% 处的颜色
                      }],
                      globalCoord: false, // 缺省为 false

                    }
                  }
                }
              },
              {
                value: 79,
                itemStyle: {
                  // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
                  normal: {
                    barBorderRadius: [10, 10, 10, 10],
                    color: {
                      type: 'bar',
                      colorStops: [{
                        offset: 0,
                        color: 'rgba(46,156,225,1)' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#56e8ff' // 100% 处的颜色
                      }],
                      globalCoord: false, // 缺省为 false

                    }
                  }
                }
              },
              {
                value: 99,
                itemStyle: {
                  // normal:{color:'#4bf3ff',barBorderRadius:[0,10,10,0],  },
                  normal: {
                    barBorderRadius: [10, 10, 10, 10],
                    color: {
                      type: 'bar',
                      colorStops: [{
                        offset: 0,
                        color: 'rgba(46,156,225,1)' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#56e8ff' // 100% 处的颜色
                      }],
                      globalCoord: false, // 缺省为 false

                    }
                  }

                }
              },
            ],
          }
        ]
      })
    },
    updateData:function () {
      var attribute = JSON.parse(this.lineProcessData);
      let diagram = this.$echarts.getInstanceByDom(document.getElementById('lineProcess'));
      let SeriesTemp = diagram.getOption();
      SeriesTemp.series[1].data[0].value=attribute[0].value;
      SeriesTemp.series[1].data[1].value=attribute[1].value;
      SeriesTemp.series[1].data[2].value=attribute[2].value;
      SeriesTemp.series[1].data[3].value=attribute[3].value;
      diagram.setOption(SeriesTemp);
    },
  },

  mounted(){
    this.drawDiagram();
  }
}
