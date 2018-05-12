<template lang="html">
  <div class="codeing">
    <svg-icon name="computer" :size="200"></svg-icon>
    <p>正在紧锣密鼓的开发....期待你的加入....</p>
    <a href="https://github.com/BiYuqi/vue-element-admin" target="_blank">项目地址</a>
  </div>
</template>

<script>
export default {
  name: 'codingTip',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.codeing{
  text-align: center;
  padding-top: 10%;
  color: #666;
  a{
    color: rgb(107, 210, 217);
  }
}
</style>
