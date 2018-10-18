<template>
  <div>
   个人信息
    <gfooter></gfooter>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {

    }
  },
  methods: {

  },mounted() {
    setTimeout(()=>{
      this.initialloading = false;
    },1500)
  },
}
</script>

<style lang="less">

</style>
