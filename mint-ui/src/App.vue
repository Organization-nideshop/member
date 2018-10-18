<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      headerIsShow: false
    }
  },
  mounted(){
    // console.log("页面加载")
  },
  methods:{

  }
}
</script>

<style>
  #app {
    max-width: 1024px;
    margin: 0 auto;
  }
</style>
