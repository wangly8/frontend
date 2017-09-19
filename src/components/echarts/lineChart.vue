<template>
  <div id="lineChart"></div>
</template>

<script>
export default {
  name:'lineChart',
  data(){
    return{
      undefined:0
    }
  },
  props:['lineChartValue'],
  watch:{
    'lineChartValue':function (n,o) {
      var temp = n;
      this.updateDiagram(temp);
    }
  },
  methods:{
    drawDiagram:function () {
      var attribute = JSON.parse(this.lineChartValue);
      let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[0]);
      console.log(document.getElementsByClassName(attribute[0].className)[0])
      diagram.setOption({
        title: {
          text: '近7天数据环比',
          subtext:attribute[0].subtitle,
          top:10,
          textStyle:{
            color:'white',
          }
        },
        tooltip: {
          trigger: 'axis'
        },
//        legend: {
//          data:['最高气温','最低气温']
//        },
//        toolbox: {
//          show: true,
//          top:10,
//          feature: {
//            dataZoom: {
//              yAxisIndex: 'none'
//            },
//            dataView: {readOnly: false},
//            magicType: {type: ['line', 'bar']},
//            restore: {},
//            saveAsImage: {}
//          }
//        },
        xAxis:  {
          type: 'category',
          boundaryGap: false,
          axisLabel:{color:'white'},
          axisLine:{
            lineStyle:{color:'#a4a9bc'}
          },
          data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
          type: 'value',

          axisLabel:{color:'white'},
          axisLine:{
            lineStyle:{color:'#a4a9bc'}
          },
        },
        series: [
          {
            name:'最高气温',
            type:'line',
            itemStyle:{
              normal:{
                color:'white'
              }
            },
            data:[11, 11, 15, 13, 12, 13, 10],
//
//            markLine: {
//              data: [ markPoint: {
//              data: [
//                {type: 'max', name: '最大值'},
//                {type: 'min', name: '最小值'}
//              ]
//            },
//                {type: 'average', name: '平均值'}
//              ]
//            }
          },
          {
            name:'最低气温',
            type:'line',
            itemStyle:{
              color:'#355e97'
            },
            data:[16, 9, 12, 11, 15, 8, 11],
//            markPoint: {
//              data: [
//                {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
//              ]
//            },
//            markLine: {
//              data: [
//                {type: 'average', name: '平均值'},
//                [{
//                  symbol: 'none',
//                  x: '90%',
//                  yAxis: 'max'
//                }, {
//                  symbol: 'circle',
//                  label: {
//                    normal: {
//                      position: 'start',
//                      formatter: '最大值'
//                    }
//                  },
//                  type: 'max',
//                  name: '最高点'
//                }]
//              ]
//            }
          }
        ]
      })
    },
    updateDiagram:function (temp) {
      //unrealized method
      console.log("update diagram")
    }


  },
  mounted(){
    this.drawDiagram();
  }
}
</script>

<style scoped src="../../resource/css/echarts/lineChart.css"></style>
