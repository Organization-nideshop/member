<template>
  <div>
    成长值
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
