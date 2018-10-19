<template>
  <div class="address-container">
    <mt-spinner type="snake" color="#00ccff" :size="20" v-show="initialloading"></mt-spinner>
    <mt-cell-swipe :right="[
      { content: '删除',
        style: { background: '#2181d4', color: '#fff' },
        handler: () => this.$messagebox('删除')
      }]" v-for="(item,index) in list" :key="index" @click="addAddress(item.id)" :to="toAddUrl+item.id" is-link>
      <!-- }]" v-for="(item,index) in list" :key="index" :title="item.name"> -->
    <!-- <span class="phone">{{item.phone}}</span> -->
    <div>
      <span class="name">{{item.name}}</span>
      <span class="phone">{{item.phone}}</span>
    </div>
    <div>
      <span v-if="index==0" class="default">[默认]</span>
      <span class="content">{{item.content}}</span>
    </div>
    </mt-cell-swipe>
    <div id="footer" class="address-add">
      <mt-button class="add" size="large" type="primary" @click="addAddress">添加新地址 + </mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      list:[{id:0,name:'李洋气',content:'陕西省显示莲湖区墨文路23号',phone:'1543829898'},
      {id:2,name:'李滑动',content:'陕西省显示莲湖区墨文路23号',phone:'1543829898'},
      {id:3,name:'李删除',content:'陕西省显示莲湖区墨文路23号',phone:'1543829898'},
      {id:4,name:'李红色',content:'陕西省显示莲湖区蚊香路23号胡同街小区22楼',phone:'1543829898'}],
      toAddUrl:'/Member/AddAddress?id=',
      initialloading:true
    }
  },
  methods: {
    addAddress(){
      let that=this
      let toAddUrl=that.toAddUrl
      that.$router.push({ path: toAddUrl})
    }
  },mounted() {
    setTimeout(()=>{
      this.initialloading = false;
    },1500)
  },
}
</script>

<style lang="less">
.address-container{
  .mint-cell.mint-cell-swipe{
    border-bottom: 4px solid #fafafa;
    padding:10px 0px;
    .mint-cell-wrapper{
    .mint-cell-value{
      font-size: 12px;
      display: block;
      width: 100%;
      div{
        float: left;
        padding: 5px 0;
        width: 100%;
        .name{
          font-size: 14px;
          color: #333;
        }
        .phone{
          font-size: 14px;
          color: #333;
          float: right;
        }
        .content{
          font-size: 12px;
        }
      }
      .default{
        color:#2181d4
      }
    }
    }
    .mint-cell-right .mint-cell-swipe-button{
        display: flex;
        align-items: center;
        font-size: 14px;
    }
  }
  #footer.address-add{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 42px;
      border-top: 0px;
      line-height: 42px;
      z-index: 1000;
      background: #2181d4;
      color: #333;
      font-size: 12px;
      letter-spacing: 2px;
      .add{
        background:#2181d4;
        border-radius: 0;
        .mint-button-text{
          font-size: 14px;
        }
      }
  }
}
</style>
