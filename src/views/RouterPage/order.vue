<template>
  <div class="order-demo components-wrap">
    <p>订单编号：{{currentOrder}}</p>
    <p>创建时间：{{format('HH年MM月DD日 hh:mm:ss', currentOrder)}}</p>
  </div>
</template>

<script>
import { format } from '@/utils/tools'
export default {
  data () {
    return {
      format: format
    }
  },
  computed: {
    currentOrder () {
      return this.$route.params.id
    }
  }
}
</script>

<style lang="css">
</style>
