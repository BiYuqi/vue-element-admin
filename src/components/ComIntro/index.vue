<template>
  <div class="intro">
    {{ leftTxt }}
    <a :href="realUrl" target="_blank">
      {{ urlTxt }}
    </a>
    {{ rigthTxt }}
  </div>
</template>

<script>
export default {
  props: {
    leftTxt: {
      type: String
    },
    url: {
      type: String,
      default: ''
    },
    urlTxt: {
      type: String
    },
    rigthTxt: {
      type: String
    }
  },
  computed: {
    realUrl () {
      return this.url ? this.url : 'javascript:;'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';
.intro{
  color: $gray;
  a{
    color: $textColor;
  }
}
</style>
