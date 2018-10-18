<template>
  <div class="hello">
    <div class="logo">
      <img src="../assets/img/mint-ui-logo.png" alt="">
      <p class="mint-ui-title">欢迎进入首页</p>
    </div>
  </div>
</template>

<script>
import { navs } from '../nav.route.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到 Mint-ui示例',
      navs: []
    }
  },
  created() {
    this.navs = navs;
    // console.log(this.navs)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    text-align: center;
  }
  h4 {
    padding-left: 10px;
    padding-top: 10px;
  }
  ul {
    padding: 10px 0px 5px 10px;
  }
  ul li:last-child {
    margin-bottom: 40px;
  }
</style>
