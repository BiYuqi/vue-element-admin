<template>
  <div class="back-top">
    <span v-for="item in 200" :key="item">
      这是为了测试回到顶部写的{{item}}!!!
    </span>
    <back-top :visibleHeight="200"></back-top>
  </div>
</template>

<script>
import BackTop from '@/components/BackTop'
export default {
  components: {
    BackTop
  }
}
</script>

<style lang="scss">
.back-top{
  height: 1024px;
}
</style>
