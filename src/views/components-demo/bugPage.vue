<template lang="html">
  <div class="bugger">
    <error-log></error-log>
  </div>
</template>

<script>
import ErrorLog from '@/components/ErrorLog'
export default {
  data () {
    return {}
  },
  mounted () {
    // console.log(this.$router, a)
  },
  components: {
    ErrorLog
  }
}
</script>

<style lang="scss">
.bugger{
  padding: 15px;
}
</style>
