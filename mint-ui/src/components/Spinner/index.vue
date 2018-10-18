<template>
  <div class="page-spinner">
    <gheader :examplename="examplename"></gheader>
    <div class="page-spinner-wrapper">
      <mt-cell title="snake">
        <mt-spinner color="#2181d4" type="snake"></mt-spinner>
      </mt-cell>

      <mt-cell title="double-bounce">
        <mt-spinner color="#2181d4" type="double-bounce"></mt-spinner>
      </mt-cell>

      <mt-cell title="triple-bounce">
        <mt-spinner color="#2181d4" type="triple-bounce"></mt-spinner>
      </mt-cell>

      <mt-cell title="fading-circle">
        <mt-spinner color="#2181d4" type="fading-circle"></mt-spinner>
      </mt-cell>
    </div>
    <gfooter></gfooter>
  </div>
</template>
<script>
export default {
  name: 'Spinner',
  data () {
    return {
      examplename: 'Spinner'
    }
  }
}
</script>
