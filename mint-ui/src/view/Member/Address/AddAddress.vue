<template>
  <div class="address-add">
    <mt-spinner type="snake" color="#00ccff" :size="20" v-show="initialloading"></mt-spinner>
    <div class="page-part">
      <a class="mint-cell mint-field" @click="selectAddress">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <span class="mint-cell-text">详细地址</span>
          </div>
          <div class="mint-cell-value">{{addressProvince}} {{addressCity}} {{addressCounty}}</div>
        </div>
      </a>
      <mt-field label="详细地址" placeholder="详细地址（如门牌号等）" v-model="addressDetail"></mt-field>
      <mt-field label="姓名" placeholder="姓名" :attr="{maxlength: 10}" v-model="name"></mt-field>
      <mt-field label="联系电话" placeholder="联系电话" type="tel" v-model="phone"></mt-field>
      <mt-checklist class="page-part isDefault"
        title=""
        v-model="optVal"
        :options="options">
      </mt-checklist>
    </div>
    <mt-popup
      v-model="popupVisible4"
      position="bottom"
      class="add-popup">
        <div class="header-popup">
          <span class="cancel">取消</span>
          <span class="confirm">确认</span>
        </div>
        <mt-picker :slots="addressSlots" @change="onAddressChange"></mt-picker>
    </mt-popup>
    <div id="footer" class="address-add-btn">
      <mt-button class="add" size="large" type="primary" @click="saveAddress">保存</mt-button>
    </div>
  </div>
</template>

<script>
import address from './Address.json'
export default {
  name: 'Index',
  data () {
    return {
      addressSlots: [
        {
          flex: 1,
          values: Object.keys(address),
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['市辖区'],
          className: 'slot3',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot4'
        }, {
          flex: 1,
          values: ['东城区'],
          className: 'slot5',
          textAlign: 'center'
        }
      ],
      addressProvince: '北京市',
      addressCity: '市辖区',
      addressCounty: '东城区',
      popupVisible4: false,
      optVal:[],
      addressDetail:null,
      name:null,
      phone:null,
      initialloading:true
    }
  },
  methods: {
    onAddressChange(picker, values) {
      if(address[values[0]]){ //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
　　　　　picker.setSlotValues(1,Object.keys(address[values[0]])); // Object.keys()会返回一个数组，当前省的数组
　　　　　picker.setSlotValues(2,address[values[0]][values[1]]); // 区/县数据就是一个数组
　　　　　this.addressProvince = values[0];
　　　　　this.addressCity = values[1];
　　　　　this.addressCounty = values[2];
　　　　}
    },
    selectAddress(){
      this.popupVisible4 = true;
    },
    saveAddress(){
      this.$router.go(-1)
    }
  },mounted() {
    setTimeout(()=>{
      this.initialloading = false;
    },1500)
    this.$nextTick(() => {
      this.addressSlots[0].defaultIndex = 0
    });
  },
  created() {
    this.options = ['设为默认地址']
  }
}
</script>

<style lang="less">
.address-add{
  .add-popup {
    width: 100%;
    .picker-items{
      font-size: 14px;
      .picker-slot {
          font-size: 14px;
          .picker-item{
            padding: 0 6px;
          }
      }
    }
  }
  #footer.address-add-btn{
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
  .mint-cell.mint-field{
    border-bottom: 1px solid #ccc;
    height: 40px;
    min-height: 40px;
    .mint-cell-wrapper{
      font-size: 14px;
    }
  }
  .header-popup{
    background-color: #fff;
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-bottom:1px solid #eaeaea;
      .cancel{
        float: left;
        display: inline-block;
        width: 50%;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        color: #2181d4;
      }
      .confirm{
        float: right;
        display: inline-block;
        width: 50%;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        color: #2181d4;
      }
  }
  .isDefault{
    .mint-checklist-title{
      margin: 0;
    }
    .mint-cell{
      min-height: 40px;
      height: 40px;
      .mint-cell-wrapper{
        font-size: 14px;
      }
    }
  }
}
</style>
