<template>
  <div id="topBar">
    <div id="systemTitle">
      <img id="systemIcon" src="../images/icon/Unicom_logo.png"/>
      <div id="systemName">上海联通生产监控系统大屏</div>
    </div>
    <label id="title">
      移动后付费数据业务生产作业进程监控
    </label>
    <time-anime></time-anime>
    <div>
      <div id="topNavi" class="topBarIcon">
        <img src="../images/icon/menu.png">
      </div>
      <div id="setting" class="topBarIcon">
        <img src="../images/icon/setting.png">
      </div>
      <div id="home" class="topBarIcon">
        <img src="../images/icon/home.png">
      </div>
    </div>
  </div>
</template>

<script>
  import TimeAnime from "./timeAnime.vue";

  export default {
    components: {TimeAnime},
    name: 'topBar'
  }
</script>

<style scoped>
  #topBar{
   width: 100%;
    height: 3.625rem;
   border-bottom: 2px solid #365f98;
  }

  #systemTitle{
    min-width:21.875rem;
    display: inline-block;
    float: left;
    height:3.625rem;
    line-height: 3.625rem;
  }

  #systemIcon{
    margin-top: 0.75rem;
    height: 2.0625rem;
    display: inline-block;
    float: left;
    margin-left: 0.75rem
  }

  #systemName{
    min-height:2.0625rem;
    line-height: 2.0625rem;
    margin-top: 0.75rem;
    margin-left: 0.375rem;
    font-family: "Microsoft YaHei UI";
    font-size: 1.375rem;
    font-weight: 600;
    color: white;
    display: inline-block;
    float: left;
  }

  #title{
    display: inline-block;
    float: left;
    margin-left: 26.25rem;
    line-height: 3.625rem;
    min-width: 12.5rem;
    text-align: center;
    font-family: "Microsoft YaHei UI";
    font-size: 1.25rem;
    font-weight: 600;
    color: white;
  }

  .topBarIcon{
    height: 3.625rem;
    width: 3.625rem;
    border-left: 2px solid #365f98;
    cursor: pointer;
    display: inline-block;
    float: right;
  }
  .topBarIcon>img{
    margin-top: 1.0625rem;
  }

</style>
