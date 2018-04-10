<template>
  <div class="page-error">
    <img src="../../assets/img/404.png" alt="">
    <el-button type="primary" @click="backHome" class="back-home">返回首页</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    backHome () {
      this.$router.push({
        name: 'dashboard_index'
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/mixin.scss';
.page-error{
  background-color: #edeff1;
  height: 100%;
  width: 100%;
  img{
    width: 600px;
    @include abs(10%, auto, auto, 50%);
    transform: translateX(-50%);
  }
  .back-home{
    width: 200px;
    @include abs(70%, auto, auto, 50%);
    transform: translateX(-57%);
  }
}
</style>
