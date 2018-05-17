<template lang="html">
  <div class="byq-editor-wrap" :style="styles">
    <byq-head></byq-head>
    <div class="byq-editor">
      <div class="byq-title-box">
        <input type="text" placeholder="标题">
      </div>
      <div class="byq-wrap" contentEditable="true"></div>
    </div>
  </div>
</template>

<script>
import ByqHead from './components/rich-head'
export default {
  props: {
    styles: {
      type: Object,
      default: () => {
        return {
        }
      }
    }
  },
  components: {
    ByqHead
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
