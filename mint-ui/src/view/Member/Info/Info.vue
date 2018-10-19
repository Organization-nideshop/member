<template>
  <div class="info-container">
    <mt-spinner v-show="initialloading" type="snake" color="#00ccff" :size="20"></mt-spinner>
    <div class="list-items">
      <mt-field label="姓名 ：" placeholder="请输入姓名" v-model="username"></mt-field>
      <mt-radio
        title="性别 ："
        v-model="gender"
        :options="['男', '女']">
      </mt-radio>
      <mt-radio
        title="生日 ："
        v-model="birthType"
        :options="['公历', '农历']">
      </mt-radio>
      <div class="line-items">
        <label>日期</label>
        <span @click="openPicker">{{pickerValue}}</span>
      </div>
    </div>
    <!-- 完善信息前 -->
    <!-- <div class="btn-area">
      <mt-button type="primary">保存</mt-button>
    </div> -->
    <!-- 完善信息后 -->
    <div class="btn-area">
      <router-link to="/Member/Address">
        <mt-button type="primary">收货地址</mt-button>
      </router-link>
      <router-link to="/Member/Anniversary">
        <mt-button type="default">我的纪念日</mt-button>
      </router-link>
    </div>
    <gfooter></gfooter>
    <mt-datetime-picker class="picker"
      ref="picker"
      type="date"
      v-model="endDate"
      :startDate="startDate"
      :endDate="endDate"
      @confirm="handleConfirm" >
    </mt-datetime-picker>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      initialloading:true,
      username:'',
      gender:'',
      birthType:'',
      birthday:'',
      pickerValue:'年/月/日',
      startDate:new Date('1900/1/1'),
      endDate:new Date(),
    }
  },
  methods: {
    openPicker() {
        this.$refs.picker.open();
    },
    handleConfirm(msg){
      var date = new Date(msg);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var datetime=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(); 
      this.pickerValue = datetime
    }
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
.info-container{
  padding: 10% 10px 0;
  .list-items{
    .mint-cell-wrapper{
      font-size: 14px;
    }
    .mint-cell.mint-field{
      height: 60px;
      border-bottom: 1px solid #ccc;
      .mint-cell-title{
        width: 2rem;
      }
    }
    .mint-radiolist{
      display: flex;
      align-items: center;
      height: 60px;
      border-bottom: 1px solid #ccc;
      .mint-radiolist-title{
        color: #1a1a1a;
        font-size: 14px;
        width: 2rem;
        margin-right: 0;
      }
      .mint-radio-input:checked + .mint-radio-core{
        background-color: #fff;        
      }
      .mint-radio-input:checked + .mint-radio-core::after{
        background-color: #2181d4;
        border-color: #2181d4;
        transform: scale(1.5);
      }
    }
    .line-items{
      height: 60px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      font-size: 14px;
      label{
        width: 2rem;
        margin: 0.106667rem;
      }
    }
  }
  
  .btn-area{
    margin-top: 40px;
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
  .mint-popup.picker{
    .picker-toolbar{
      height: 40px;
      display: flex;
      align-items: center;
      span{
        font-size: 14px;
      }
    }
    .picker-items{
      height: 200px;
    }
  }
}


</style>
