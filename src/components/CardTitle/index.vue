<template lang="html">
  <div class="line-card-wrap">
    <div class="line-card-title" v-if="title">
      <svg-icon :name="icon"></svg-icon>
      <span>{{ title }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'bug'
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.line-card-title{
  border-bottom: 1px solid #e9eaec;
  padding: 14px 16px;
  line-height: 1;
}
</style>
