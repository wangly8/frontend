<template>
  <div id="barChart"></div>
</template>

<script>
  export default {
    name:'barChart',
    data(){
      return{
        undefined:0
      }
    },
    props:['barChartValue'],
    watch:{
      'barChartValue':function (n,o) {
        var temp = n;
        this.updateDiagram(temp);
      }
    },
    methods:{

      drawDiagram:function ()
       {
        var attribute = JSON.parse(this.barChartValue);
       // console.log(eval(attribute[0].monthData));
        let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[0]);
        diagram.setOption
        ({
          title: {
            top:10,
            text: attribute[0].title,
            textStyle:{
              color:'white',
            }
          },
         legend: {
           top:10,
           data: ['bar', 'bar2','bar3'],//legendMonth
          // data : eval(attribute[0].monthData),
           x : 'right',
           align: 'left',
           textStyle:{
             color:'white'
           }
         },
          // legend : 
          // {
          //       top:10,
			    //     	orient : 'vertical',
			    //       x : 'right',
          //      data : [ '7月', "8月", "9月" ]//legendMonth
          //       //data : eval(attribute[0].legendMonth),
		    	// },
          xAxis: {
            data: eval(attribute[0].xLabel),
            silent: false,
            splitLine: {
              show: false
            },
            axisLabel:{color:'white'},
            axisLine:{
              lineStyle:{color:'#000000'}
            },

          },
          yAxis:
           [{
              axisLabel:{color:'white'},
              name:'单位GB',
              type : 'value',
              splitLine : {
				      	show : false
			    	  }
            },
            {
              type:'value',
              axisLabel:{color:'white'},
              name:'单位GB'
            }

          ],
          series: [{
           name: 'bar', //eval(attribute[0].legendMonth)
            
           // name: eval(attribute[0].monthData[0]),
            type: 'bar',
            data: eval(attribute[0].daysData1),
            animationDelay: function () {
              return 1 * 10;
            },
            barWidth: 16,
            itemStyle:{
              normal:{
                color: function (params){
                  var colorList = eval(attribute[0].color1);
                  return colorList[params.dataIndex];
                },
                label : {
						  	  show : true,
						    	position : 'inside'
					    	}
              }
            },
          },
            {
              name: 'bar2',
             // name: eval(attribute[0].monthData[1]),
              type: 'bar',
              //yAxisIndex:1,
              data: eval(attribute[0].daysData2),
              animationDelay: function () {
                return 1 * 10 + 100;
              },
              barWidth: 16,
              itemStyle:{
                normal:{
                  color: function (params){
                    var colorList = eval(attribute[0].color2);
                    return colorList[params.dataIndex];
                  },
                  label : {
						  	      show : true,
						        	position : 'inside'
					    	  }
                }
              },
          },
            {
              name: 'bar3',
              //name: eval(attribute[0].monthData[2]),
              type: 'bar',
              yAxisIndex:1,
              data: eval(attribute[0].daysData3),
              animationDelay: function () {
                return 1 * 10 + 100;
              },
              barWidth: 16,
              itemStyle:{
                normal:{
                  color: function (params){
                    var colorList = eval(attribute[0].color3);
                    return colorList[params.dataIndex];
                  },
                  label : {
						  	      show : true,
						        	position : 'inside'
					    	  }
                }
              },
            }],
          animationEasing: 'elasticOut',
          animationDelayUpdate: function () {
            return 1 * 5;
          }
        })
      },
      updateDiagram:function (temp) {
        var attribute = JSON.parse(temp);
        let diagram =  this.$echarts.getInstanceByDom(document.getElementsByClassName(attribute[0].className)[0]);
        var option_old = diagram.getOption();
        option_old.series[1].data = eval(attribute[0].daysData1);
        diagram.setOption(option_old);
      }
    },
    mounted(){
     // console.log(eval(attribute[0].legendMonth));
      this.drawDiagram();
    }
  }
</script>

<style scoped src="../../resource/css/echarts/barChart.css"></style>
