<template>
<div>
  <Carousel autoplay on-change="test()" v-model="value2">
        <CarouselItem>
            <div>
              <preprocess></preprocess>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              <collection></collection>
            </div>
        </CarouselItem>
        
    </Carousel>
    </div>
</template>

<<script>
import collection from './collect-monitor-index'
import preprocess from './preprocess-index'
import mainindex from './main-index'

var a =1; var show1=true; var show2=false;


export default {
  components:{
    mainindex,
    collection
  },
  name:'mainframe',

data () {
            return {
                value2: 0
            }
        },

  methods:{
    update:function (){
      setInterval(()=>{
       
        
      },1000)
    },
    test:function (a,b) {
      console.log(a+'---'+b);
    }
  },

  mounted(){
    this.update();
  }
}

</script>

