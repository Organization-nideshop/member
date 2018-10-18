<template>
<div class="page-cell">
  <mt-header :title="title">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
      <!-- <mt-button @click="handleClose">关闭</mt-button> -->
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  <p class="IntegralTitle">积分</p>
  <p class="IntegralNum">{{IntegralNum}}</p>
  <mt-navbar v-model="selected">
    <mt-tab-item id="0">一个月内</mt-tab-item>
    <mt-tab-item id="1">三个月内</mt-tab-item>
  </mt-navbar>

  <!-- tab-container -->
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="0">
      <ul class="mui-table-view"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="moreLoading"
          infinite-scroll-distance="0"
          infinite-scroll-immediate-check="false">
          <li v-show="initialloading">
            <mt-spinner type="snake" color="#00ccff" :size="20"></mt-spinner>
            </li>
          <!--li数据遍历循环部分-->
          <li class="mui-table-view-cell" v-for="(item,index) in list" :key="index">
            <span>{{item+index}}</span>
          </li>
          <!--底部判断是加载图标还是提示“全部加载”-->
          <li class="more_loading" v-show="!queryLoading">
            <mt-spinner type="snake" color="#00ccff" :size="20" v-show="moreLoading&&!allLoaded"></mt-spinner>
            <span v-show="allLoaded">已全部加载</span>
          </li>
        </ul>
  </mt-tab-container-item>
  <mt-tab-container-item id="1">
    <ul class="mui-table-view"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="moreLoading"
        infinite-scroll-distance="0"
        infinite-scroll-immediate-check="false">
        <li v-show="initialloading">
          <mt-spinner type="snake" color="#00ccff" :size="20"></mt-spinner>
          </li>
        <!--li数据遍历循环部分-->
        <li class="mui-table-view-cell" v-for="(item,index) in list" :key="index">
          <span>{{item+index}}</span>
        </li>
        <!--底部判断是加载图标还是提示“全部加载”-->
        <li class="more_loading" v-show="!queryLoading">
          <mt-spinner type="snake" color="#00ccff" :size="20" v-show="moreLoading&&!allLoaded"></mt-spinner>
          <span v-show="allLoaded">已全部加载</span>
        </li>
      </ul>
  </mt-tab-container-item>
</mt-tab-container>


    <gfooter></gfooter>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      title:'交易明细',
      selected:0,
      queryLoading: false,
      moreLoading: false,
      allLoaded: false,
      totalNum: 0,
      wrapperHeight: 0,
      pageSize: 20,
      pageNum: 1,
      initialloading: true,
      list:['ce测试','ce测试','ce测试1','ce测试1','ce测试1','ce测试','ce测试','ce测试1','ce测试1','ce测试1'],
      IntegralNum:0
    }
  },
  methods: {
    //无限加载函数
    loadMore() {
      if(this.allLoaded){
        this.moreLoading = true;
        return;
      }
      if(this.queryLoading){
        return;
      }
      this.moreLoading = !this.queryLoading;
      this.pageNum++;
      setTimeout(()=>{
        if(this.pageNum<4){
          this.list+=20;
          this.allLoaded = false;
        }else{
          this.allLoaded = true;
        }
        this.moreLoading = this.allLoaded;
      },1500)
      // this.$http.post("请求后台数据的接口",Object.assign({pageNum:this.pageNum},this.params)).then((res) => {
      //   if(res.sData && res.sData.list){
      //     this.list = this.list.concat(res.sData.list);
      //     this.allLoaded = this.debtList.length==this.totalNum;
      //   }
      //   this.moreLoading = this.allLoaded;
      // });
    }
  },mounted() {
    let windowWidth = document.documentElement.clientWidth;//获取屏幕高度
    if(windowWidth>768){//这里根据自己的实际情况设置容器的高度
      this.wrapperHeight = document.documentElement.clientHeight - 105;
    }else{
      this.wrapperHeight = document.documentElement.clientHeight - 80;
    }
    setTimeout(()=>{
      this.list = 20;
      this.initialloading = false;
    },1500)
  },
}
</script>

<style lang="less">
// .page-infinite-wrapper {
//     margin-top: -1px;
//     overflow: scroll;
// }
ul {
  padding: 5px 0px;
}
li {
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}
li:first-child,
li:last-child {
  border: none;
}
.IntegralTitle{
  text-align: center
}
.IntegralNum{
  text-align: center;
  font-weight: bold;
}
</style>
