<template>
  <div id="footer" v-if="footerIsShow">
    {{msg}}
  </div>
</template>
<script>
export default {
  name: 'G-footer',
  data(){
    return {
      msg: '技术支持-阿中软件'
    }
  },
  props: {
    footerIsShow:{
      type: Boolean,
      default: true
    }
  },
  mounted(){

  },
  methods:{

  }
}
</script>
<style scoped>
  #footer {
    text-align: center;
  }
</style>
