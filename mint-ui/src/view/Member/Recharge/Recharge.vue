<template>
  <div class="recharge-container">
    <mt-spinner v-show="initialloading" type="snake" color="#00ccff" :size="20"></mt-spinner>
    <div class="welcome">欢迎使用微信充值</div>
    <div class="recharge-list">
      <!-- <span class="list-title"></span> -->
      <!-- <h3>请选择充值金额</h3> -->
      <div class="list-items">
        <mt-radio
          title="请选择充值金额 ："
          v-model="rechargeMoney"
          :options="rechargeOptions">
        </mt-radio>
      </div>
    </div>
    <div class="warm-tips">
      <div class="tip-title">温馨提示</div>
      <div class="tips-content">
        <span>*充值成功后会员卡余额实时到账，不能提现、退款；</span>
        <span>*所赠电子券自动发放到“优惠券”；</span>
        <span>*电子券只有首次充值才送，之后不再赠送；</span>
        <span>*使用充值卡充值不享受任何充值赠送。</span>
      </div>
    </div>
    <div class="btn-area">
      <mt-button type="primary" @click="showRechargeModal">确定充值</mt-button>
      <mt-button type="default" @click="showCodeRechargeModal">充值码充值</mt-button>
    </div>
    <gfooter></gfooter>
    <!-- 支付详情弹窗 -->
    <mt-popup class="modal" v-model="showRecharge" position="bottom">
      <div class="modal-title">
        支付详情<span @click="closeRechargeModal">x</span>
      </div>
      <div class="modal-body">
        <div class="line-items">
          付款金额<span>100.00元</span>
        </div>
        <div class="line-items">
          赠送金额<span>0.00元</span>
        </div>
        <div class="line-items sp">
          需付款<span>100.00元</span>
        </div>
      </div>
      <div class="modal-foot btn-area">
        <mt-button type="primary">确 定</mt-button>
      </div>
    </mt-popup>
    <!-- 充值码充值弹窗 -->
    <mt-popup class="modal" v-model="showCodeRecharge" position="bottom">
      <div class="modal-title">
        充值码充值<span @click="closeCodeRechargeModal">x</span>
      </div>
      <div class="modal-body">
        <div class="line-items">
          <!-- 付款金额<span>100.00元</span> -->
          <input placeholder="请输入充值码"/>
        </div>
        <div class="line-items">
          <input placeholder="请输入密码"/>
        </div>
        <div class="line-items">
          <input placeholder="请输入验证码"/>
        </div>
      </div>
      <div class="modal-foot btn-area">
        <mt-button type="primary">确 定</mt-button>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'Recharge',
  data () {
    return {
      initialloading:true,
      rechargeMoney: '',
      rechargeOptions:[
        '充值100元，送10元产品券', 
        '充值200元，送20元产品券',
        '充值300元，送30元产品券',
        '充值500元，送60元产品券',
      ],
      showRecharge:false,
      showCodeRecharge:false
    }
  },
  methods: {
    showRechargeModal(){
      this.showRecharge = true;
    },
    closeRechargeModal(){
      this.showRecharge = false;
    },
    showCodeRechargeModal(){
      this.showCodeRecharge = true;
    },
    closeCodeRechargeModal(){
      this.showCodeRecharge = false;
    },
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
  .recharge-container{
    padding: 10px 10px 0;
    .welcome{
      color: #999;
      margin-bottom: 20px;
      font-size: 12px;
    }
    .recharge-list{
      .list-items{
        .mint-radiolist{
          .mint-radiolist-title{
            color: #1a1a1a;
            font-size: 14px;
            font-weight: bold;
            margin-right: 0;
          }
          .mint-radiolist-label .mint-radio{
            position: absolute;
            right: 10px;
          }
          .mint-radio-input:checked + .mint-radio-core{
            background-color: #fff;        
          }
          .mint-radio-input:checked + .mint-radio-core::after{
            background-color: #2181d4;
            border-color: #2181d4;
            transform: scale(1.5);
          }

          .mint-cell{
            border-bottom: 1px solid #ccc;
            height: 40px;
            display: flex;
            align-items: center;
            .mint-cell-wrapper{
              font-size: 14px;
              font-weight: bold;
            }
          }
        }
      }
    }
    .warm-tips{
      .tip-title{
        font-size: 14px;
        font-weight: bold;
        margin: 30px 0 5px 0;
      }
      .tips-content{
        display: flex;
        flex-direction: column;
        span{
          height: 30px;
          line-height: 30px;
          color: #999;
        }
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
      .mint-button--default{
        background: transparent;
        border: 1px solid #2181d4;
        color: #2181d4;
      }
      .mint-button--primary{
        background-color: #2181d4;
        border: 1px solid #2181d4;
      }
    }
  }
  .mint-popup.modal{
    width: 100%;
    .modal-title{
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f3f3f3;
      padding: 0 20px 0 10px;
      font-size: 14px;
    }
    .modal-body{
      .line-items{
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        border-bottom: 1px solid #ccc;
        input{
          width: 70%;
          height: 100%;
          border: none;
          font-size: 14px;
        }
        span{
          width: 70%;
          color: #999;
        }
      }
      .line-items.sp{
        color: red;
        margin-bottom: 10px;
        span{
          color: red;
        }
      }
    }
    .modal-foot{
      margin-bottom: 10px;
    }
  }
</style>
