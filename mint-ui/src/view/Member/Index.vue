<template>
  <div>
    <mt-spinner v-show="initialloading" type="snake" color="#00ccff" :size="20"></mt-spinner>
    <div class="top">
      <div class="icon-area">
        <div class="img-style">
          <img src="../../assets/img/avatar.jpg">
        </div>
        <span>普卡</span>
      </div>
      <div class="top-content">
        <div class="uname">
          <span>玲玲</span>158****0702
        </div>
        <span>还差300成长值即可升至银卡</span>
        <mt-progress :value="progressWidth" :bar-height="5"></mt-progress>
        <!-- <div class="progress">
          <div class="progress-active" v-bind:style="{width: progressWidth}"></div>
        </div> -->
      </div>
      <router-link class="icon-style" to="/Member/Info">
        <img src="../../assets/img/ucenter_03.png">
      </router-link>
    </div>
    <div class="nav">
      <router-link class="nav-items" to="/Member/RemaindSum">
        <span>0</span>我的余额
      </router-link>
      <router-link class="nav-items" to="/Member/Integral">
        <span>100</span>我的积分
      </router-link>
    </div>
    <div class="advertise-img">
      <img src="../../assets/img/ucenter_07.jpg">
    </div>
    <div class="menu-list">
      <div class="line-items">
        <router-link class="content" to="/Member/Pay">
          <img src="../../assets/img/ucenter_10.png">门店支付
        </router-link>
        <router-link class="content" to="/Member/Coupon">
          <img src="../../assets/img/ucenter_12.png">优惠券
        </router-link>
        <router-link class="content" to="/Member/Recharge">
          <img src="../../assets/img/ucenter_07.png">余额充值
        </router-link>
      </div>
      <div class="line-items">
        <router-link class="content" to="/Member/SaleDetail">
          <img src="../../assets/img/ucenter_17.png">交易明细
        </router-link>
        <router-link class="content" to="/Member/GrowthValue">
          <img src="../../assets/img/ucenter_18.png">成长值
        </router-link>
        <router-link class="content" to="/Member/SignIn">
          <img src="../../assets/img/ucenter_19.png">签到有礼
        </router-link>
      </div>
      <div class="line-items">
        <router-link class="content" to="/Member/Advice">
          <img src="../../assets/img/ucenter_23.png">服务建议
        </router-link>
        <router-link class="content" to="/Member/Address">
          <img src="../../assets/img/ucenter_25.png">地址管理
        </router-link>
        <router-link class="content" to="/Member/Set">
          <img src="../../assets/img/ucenter_27.png">设置
        </router-link>
      </div>
    </div>
    <!-- <gfooter>
      <img src="../../assets/img/btm-img.png">
    </gfooter> -->
  <div id="footer" class="indexFooter">
    <img src="../../assets/img/btm-img.png">
  </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      progressWidth: 60, // 进度条宽度
      initialloading:true
    }
  },
  mounted() {
    setTimeout(()=>{
      this.initialloading = false;
    },1500)
  },
}
</script>

<style lang="less">
  body{
    background: #fff;
  }
  .top{
    display:flex;
    align-items:center;
    height:120px;
    width:100%;
    .icon-area{
      margin:0 10px;
      height:75px;
      display:flex;
      flex-direction:column;
      align-items:center;
      position:relative;
      img{
        width:70px;
        height:70px;
        border-radius:50%;
      }
      .img-style{
        width:74px;
        height:74px;
        border-radius:50%;
        border:2px solid #2181d4;
      }
      span{
        font-size:12px;
        color:#fff;
        background-color: #2181d4;
        padding:2px 10px;
        border-radius:5px;
        position:absolute;
        bottom:0px;
      }
    }
    .top-content{
      display:flex;
      flex-direction:column;
      justify-content:flex-end;
      margin-bottom: 10px;
      height:75px;
      width: 50%;
      .uname{
        margin-bottom:5px;
        color: #666;
        span{
          margin-right:10px;
          color: #1a1a1a;
          font-size:14px;
          font-weight:bold;
        }
      }
      span{
        font-size:12px;
        color:#666;
        margin-bottom:5px;
      }
      .mt-progress{
        height:6px;
        border:1px solid #acacac;
        border-radius:5px;
        .mt-progress-content{
          .mt-progress-runway{
            background-color: #fff;
          }
          .mt-progress-progress{
            background-color: #2181d4;
            border-radius: 5px;
          }
        }
      }
    }
    .icon-style{
      flex:1;
      text-align:right;
      margin-right:20px;
      img{
        width:25px;
        height:25px;
      }
    }
  }
  .nav{
    width:100%;
    height:70px;
    border-top: 1px solid #e4e4e4;
    border-bottom: 5px solid #e4e4e4;
    display:flex;
    align-items:center;
    .nav-items{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      // height:40px;
      width:50%;
      font-size:12px;
      color: #666;
      span{
        color:#2181d4;
        margin-bottom:5px;
        font-weight:bold;
      }
    }
    .nav-items:first-child{
      border-right: 1px solid #e4e4e4;
    }
  }
  .advertise-img{
    padding:15px 10px 0 10px;
    img{
      width: 100%;
    }
  }
  .menu-list{
    .line-items{
      border-bottom:1px solid #e4e4e4;
      display: flex;
      align-items: center;
      height: 80px;
      .content{
        display:flex;
        flex-direction:column;
        align-items:center;
        flex: 1;
        color:#999;
        font-size:14px;
        border-right: 1px solid #e4e4e4;
        img{
          margin-bottom:5px;
          width: 27px;
          height: 22px;
        }
      }
    }
  }
  .foot{
    position: absolute;
    bottom: 5px;
    text-align: center;

  }
  #footer.indexFooter {
    text-align: center;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top:none;
    img{
      width: 45%;
    }
  }
</style>
