import TopBar from "@/components/topBar.vue";
import singleAxisScatterDiagram from "@/components/echarts/singleAxisScatter.vue"
import barChart from "@/components/echarts/barChart.vue"
import lineChart from "@/components/echarts/lineChart.vue"
import CircleProcess from "@/components/echarts/circleProcess.vue";
import LineProcess from "@/components/echarts/lineProcess.vue";
import DashBoard from "@/components/echarts/dashBoard.vue";
import clock from "@/components/clock.vue"
export default {
  components:{
    DashBoard,
    LineProcess,
    CircleProcess,
    TopBar,
    singleAxisScatterDiagram,
    barChart,
    lineChart,
    clock
  },
  name:'preprocess',

  data(){
    return{
      lineChartData:'[{"className":"lineChart","subtitle":"单位：GB"}]',

      lineProcessData:'[{"value":"100"},{"value":"95"},{"value":"90"},{"value":"99"}]',

      barChartData:'[{"name":"PGW","color1":"[\'#0094e4\']","color2":"[\'#45beff\']","color3":"[\'#004eff\']"' +
      ',"title":"近3个月数据环比","className":"barChart2","daysData1":"[17,15,15,10]","daysData2":"[11,11,15,10]",' +
      '"daysData3":"[11,15,15,20]","xLabel":"[\'PGW\',\'SGW\',\'SGSN\',\'INTR\']"}]',

      CircleProcessData1:'[{"className":"circleProcessChart1","value":"22","color":"#56b5ff"}]',
      CircleProcessData2:'[{"className":"circleProcessChart2","value":"44","color":"#fff799"}]',
      CircleProcessData3:'[{"className":"circleProcessChart3","value":"58","color":"#a0f676"}]',

      CircleProcessData5:'[{"className":"circleProcessChart5","value":"22","color":"#56b5ff"}]',
      CircleProcessData6:'[{"className":"circleProcessChart6","value":"44","color":"#fff799"}]',
      CircleProcessData7:'[{"className":"circleProcessChart7","value":"58","color":"#a0f676"}]',

      dashBoardData1:'[{"className":"dashBoard1","value":"100"}]',
      dashBoardData2:'[{"className":"dashBoard2","value":"70"}]',
      dashBoardData3:'[{"className":"dashBoard3","value":"40"}]',
      dashBoardData4:'[{"className":"dashBoard4","value":"10"}]',
    }
  },

  methods:{
    update:function () {
      setInterval(()=>{
        //环状图数据更新模拟
        let temp1 = JSON.parse(this.CircleProcessData1);
        temp1[0].value = (Math.random()*100).toFixed(2);
        this.CircleProcessData1 = JSON.stringify(temp1);

        let temp2 = JSON.parse(this.CircleProcessData2);
        temp2[0].value = (Math.random()*100).toFixed(2);
        this.CircleProcessData2 = JSON.stringify(temp2);

        let temp3 = JSON.parse(this.CircleProcessData3);
        temp3[0].value = (Math.random()*100).toFixed(2);
        this.CircleProcessData3 = JSON.stringify(temp3);

        let temp5= JSON.parse(this.CircleProcessData5);
        temp5[0].value = (Math.random()*100).toFixed(2);
        this.CircleProcessData5 = JSON.stringify(temp5);

        let temp6 = JSON.parse(this.CircleProcessData6);
        temp6[0].value = (Math.random()*100).toFixed(2);
        this.CircleProcessData6 = JSON.stringify(temp6);

        let temp7 = JSON.parse(this.CircleProcessData7);
        temp7[0].value = (Math.random()*100).toFixed(2);
        this.CircleProcessData7 = JSON.stringify(temp7);

        //仪表盘数据更新模拟
        let temp8 = JSON.parse(this.dashBoardData1);
        temp8[0].value = (Math.random()*100);
        this.dashBoardData1 = JSON.stringify(temp8);

        let temp9 = JSON.parse(this.dashBoardData2);
        temp9[0].value = (Math.random()*100);
        this.dashBoardData2 = JSON.stringify(temp9);

        let temp10 = JSON.parse(this.dashBoardData3);
        temp10[0].value = (Math.random()*100);
        this.dashBoardData3 = JSON.stringify(temp10);

        let temp11 = JSON.parse(this.dashBoardData4);
        temp11[0].value = (Math.random()*100);
        this.dashBoardData4 = JSON.stringify(temp11);
        //条状进度图数据更新模拟
        let temp12 = JSON.parse(this.lineProcessData);
        temp12[0].value =  parseInt(Math.random()*100);
        temp12[1].value =  parseInt(Math.random()*100);
        temp12[2].value =  parseInt(Math.random()*100);
        temp12[3].value =  parseInt(Math.random()*100);
        this.lineProcessData = JSON.stringify(temp12);
      },1000)
    }
  },

  mounted(){
    this.update();
  }
}
