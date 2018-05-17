<template>
  <div class="page-error">
    <div class="center-error">
      <img src="../../assets/img/404.png" alt="">
      <el-button type="primary" @click="backHome" class="back-home">返回首页</el-button>
    </div>
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
  .center-error{
    @include abs(10%, auto, auto, 50%);
    transform: translateX(-50%);
    text-align: center;
  }
  img{
    width: 600px;
  }
  .back-home{
    width: 200px;
    margin-right: 40px;
  }
}
</style>
