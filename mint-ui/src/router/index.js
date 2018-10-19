import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import links from '../nav.route'
console.log(links)
import MintUI from 'mint-ui'
Vue.use(MintUI)

import Gheader from '@/components/GlobleHeader'
import Gfooter from '@/components/GlobleFooter'
import Member from '@/view/Member/Index'
import Integral from '@/view/Member/Integral/Integral'
import Recharge from '@/view/Member/Recharge/Recharge'
import Info from '@/view/Member/Info/Info'
import Pay from '@/view/Member/Pay/Pay'
import Coupon from '@/view/Member/Coupon/Coupon'
import BindCoupon from '@/view/Member/Coupon/BindCoupon'
import SaleDetail from '@/view/Member/SaleDetail/SaleDetail'
import GrowthValue from '@/view/Member/GrowthValue/GrowthValue'
import SignIn from '@/view/Member/SignIn/SignIn'
import Advice from '@/view/Member/Advice/Advice'
import Address from '@/view/Member/Address/Address'
import Set from '@/view/Member/Set/Set'
import Anniversary from '@/view/Member/Anniversary/Anniversary'

import HelloWorld from '@/components/HelloWorld'
import Toast from '@/components/Toast'
import Tabbar from '@/components/Tabbar'
import Indicator from '@/components/Indicator'
import Loadmore from '@/components/Loadmore'
import InfiniteScroller from '@/components/InfiniteScroll'
import Message_box from '@/components/MessageBox'
import ActionSheeter from '@/components/ActionSheet'
import Popup from '@/components/Popup'
import Swipe from '@/components/Swipe'
import LazyLoad from '@/components/LazyLoad'
import Range from '@/components/Range'
import Progress from '@/components/Progress'
import Picker from '@/components/Picker'
import DateTimePicker from '@/components/DateTimePicker'
import IndexList from '@/components/IndexList'
import PaletteButton from '@/components/PaletteButton'
import MTHeader from '@/components/MTHeader'
import Navbar from '@/components/Navbar'
import PullDown from '@/components/PullDown'
import PullUp from '@/components/PullUp'
import MTButton from '@/components/MTButton'
import Cell from '@/components/Cell'
import CellSwipe from '@/components/CellSwipe'
import Spinner from '@/components/Spinner'
import TabContainer from '@/components/TabContainer'
import Search from '@/components/Search'
import Switcher from '@/components/Switch'
import CheckList from '@/components/CheckList'
import Radio from '@/components/Radio'
import Field from '@/components/Field'
import Badge from '@/components/Badge'

Vue.component('gheader',Gheader)
Vue.component('gfooter',Gfooter)



Vue.use(Router)
Vue.use(BootstrapVue);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'Member',
      component: Member
    },
    {
      path: '/Member/Integral',//积分
      name: 'Integral',
      component: Integral
    },
    {
      path: '/Member/Recharge',//充值
      name: 'Recharge',
      component: Recharge
    },
    {
      path: '/Member/Info',//个人信息
      name: 'Info',
      component: Info
    },
    {
      path: '/Member/Pay',//支付
      name: 'Pay',
      component: Pay
    },{
      path: '/Member/Coupon',//优惠券
      name: 'Coupon',
      component: Coupon
    },{
      path: '/Member/BindCoupon',//绑定优惠券
      name: 'BindCoupon',
      component: BindCoupon
    },{
      path: '/Member/SaleDetail',//交易明细
      name: 'SaleDetail',
      component: SaleDetail
    },{
      path: '/Member/GrowthValue',//成长值
      name: 'GrowthValue',
      component: GrowthValue
    },{
      path: '/Member/SignIn',//签到
      name: 'SignIn',
      component: SignIn
    },{
      path: '/Member/Advice',//服务意见
      name: 'Advice',
      component: Advice
    },{
      path: '/Member/Address',//地址
      name: 'Address',
      component: Address
    },{
      path: '/Member/Set',//设置
      name: 'Set',
      component: Set
    },
    {
      path: '/Member/Anniversary',//纪念日
      name: 'Anniversary',
      component: Anniversary
    },
    //组件
    {
      path: '/List',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Toast',
      component: Toast
    },
    {
      path: '/Tabbar',
      component: Tabbar
    },
    {
      path: '/Indicator',
      component: Indicator
    },
    {
      path: '/Loadmore',
      component: Loadmore
    },
    {
      path: '/InfiniteScroll',
      component: InfiniteScroller
    },
    {
      path: '/MessageBox',
      component: Message_box
    },
    {
      path: '/ActionSheet',
      component: ActionSheeter
    },
    {
      path: '/Popup',
      component: Popup
    },
    {
      path: '/Swipe',
      component: Swipe
    },
    {
      path: '/LazyLoad',
      component: LazyLoad
    },
    {
      path: '/Range',
      component: Range
    },
    {
      path: '/Progress',
      component: Progress
    },
    {
      path: '/Picker',
      component: Picker
    },
    {
      path: '/DateTimePicker',
      component: DateTimePicker
    },
    {
      path: '/IndexList',
      component: IndexList
    },
    {
      path: '/PaletteButton',
      component: PaletteButton
    },
    {
      path: '/MTHeader',
      component: MTHeader
    },
    {
      path: '/Navbar',
      component: Navbar
    },
    {
      path: '/PullDown',
      component: PullDown
    },
    {
      path: '/PullUp',
      component: PullUp
    },
    {
      path: '/Button',
      component: MTButton
    },
    {
      path: '/Cell',
      component: Cell
    },
    {
      path: '/CellSwipe',
      component: CellSwipe
    },
    {
      path: '/Spinner',
      component: Spinner
    },
    {
      path: '/TabContainer',
      component: TabContainer
    },
    {
      path: '/Search',
      component: Search
    },
    {
      path: '/Switch',
      component: Switcher
    },
    {
      path: '/CheckList',
      component: CheckList
    },
    {
      path: '/Radio',
      component: Radio
    },
    {
      path: '/Field',
      component: Field
    },
    {
      path: '/Badge',
      component: Badge
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
