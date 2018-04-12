<template lang="html">
  <div class="order-demo">
    <p>订单编号：{{$route.params.id}}</p>
    <p>创建时间：{{format('HH年MM月DD日 hh:mm:ss', $route.params.id)}}</p>
  </div>
</template>

<script>
import { format } from '@/utils/tools'
export default {
  data () {
    return {
      format: format
    }
  }
}
</script>

<style lang="css">
</style>
