<template>
  <div id="dashBoard"></div>
</template>

<script>
  export default {
    name: 'dashBoard',
    data() {
      return {
        undefined: 0
      }
    },

    props:['dashBoardValue'],
    watch:{
      'dashBoardValue':function (n,o) {
        var temp = n;
        this.updateData();
      }
    },

    methods: {
      drawDiagram: function () {
        var attribute = JSON.parse(this.dashBoardValue);
        let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[0]);
        diagram.setOption({
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series : [
            {
              name:'性能监控',
              type:'gauge',
              center : ['50%', '50%'],    // 默认全局居中
              radius:'100%',
              startAngle: 140,
              endAngle : -140,
              min: 0,                     // 最小值
              max: 100,                   // 最大值
              precision: 0,               // 小数精度，默认为0，无小数点
              splitNumber: 10,             // 分割段数，默认为5
              axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                  color: [[0.2, 'lightgreen'],[0.6, 'skyblue'],[0.8, 'orange'],[1, '#ff4500']],
                  width:3
                }
              },
              axisTick: {            // 坐标轴小标记
                show: true,        // 属性show控制显示与否，默认不显示
                splitNumber: 5,    // 每份split细分多少段
                length :8,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                  color: 'black',
                  width: 0,
                  type: 'solid'
                }
              },
              axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: true,
                formatter: function(v){
                  switch (v+''){
                    case '10': return ' ';
                    case '30': return ' ';
                    case '60': return ' ';
                    case '90': return ' ';
                    default: return '';
                  }
                },
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  color: '#333'
                }
              },
              splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                length :15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                  color: 'black',
                  width: 0,
                  type: 'solid'
                }
              },
              pointer : {
                length : '80%',
                width : 3,
                color : 'auto'
              },
              title : {
                show : false,
                offsetCenter: ['-65%', -10],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  color: '#333',
                  fontSize :0
                }
              },
              detail : {
                show : false,
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 0,
                borderColor: '#ccc',
                width: 100,
                height: 40,
                offsetCenter: ['-60%', 10],       // x, y，单位px
                formatter:'{value}%',
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  color: 'black',
                  fontSize : '0'
                }
              },
              data:[{value: attribute[0].value, name: '目前性能'}]
            }
          ]
        })
      },

      updateData:function () {
        var attribute = JSON.parse(this.dashBoardValue);
        let diagram = this.$echarts.getInstanceByDom(document.getElementsByClassName(attribute[0].className)[0]);

        diagram.setOption({
          series: [{
            data:[{value: attribute[0].value, name: '目前性能'}]
          }]
        })
      },
    },
    mounted(){
      this.drawDiagram();
    }
  }
</script>

<style scoped src="../../resource/css/echarts/dashBoard.css"></style>
