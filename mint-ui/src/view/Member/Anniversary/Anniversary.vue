<template>
  <div class="anniversary-container">
    <mt-spinner v-show="initialloading" type="snake" color="#00ccff" :size="20"></mt-spinner>
    <!-- 没有纪念日 -->
    <div您还没有纪念日></div>
    <div class="btn-add">
      <mt-button class="add" type="primary">新增纪念日</mt-button>
    </div>
    <gfooter></gfooter>
  </div>
</template>

<script>
export default {
  name: 'Anniversary',
  data () {
    return {

    }
  },
  methods: {

  },mounted() {
    setTimeout(()=>{
      this.initialloading = false;
    },1500)
  },
}
</script>

<style lang="less">
  body{
    background: #fff;
    height: 100%;
  }
  .anniversary-container{
    .btn-add{
      position: absolute;
      bottom: 50px;
      width: 100%;
      .mint-button--normal.mint-button--primary.add{
        width: 100%;
        height: 40px;
        font-size: 14px;
        margin: 0;
        background-color: #2181d4;
        border: 1px solid #2181d4;
      }
    }
    .btn-area{
      margin-top: 10px;
      .mint-button--normal{
        width: 90%;
        margin: 10px 5%;
        height: 40px;
        font-size: 14px;
      }
      .mint-button--primary{
        background-color: #2181d4;
        border: 1px solid #2181d4;
      }
    }
  }
  
  
</style>
