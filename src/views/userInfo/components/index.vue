<template>
  <div class="temp-info">
    <div class="title">
      <svg-icon :name="name" :size="14"></svg-icon>
      <span>{{title}}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '我是一个兵'
    },
    name: {
      type: String,
      default: 'form'
    }
  }
}
</script>

<style lang="scss">
@import '../../../styles/main.scss';
.temp-info{
  padding: 10px 15px 20px;
  border: 1px solid $borderColor;
  .title{
    padding: 5px;
    text-align: center;
    color: #fff;
    background-color: $lightBaseColor2;
    margin-bottom: 15px;
    span{
      vertical-align: middle;
    }
  }
}
</style>
