<template lang="html">
  <div class="byq-editor-wrap" :style="styles">
    <el-button @click="test">测试</el-button>
    <div contentEditable="true" class="byq-editor">待开发</div>
  </div>
</template>

<script>
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
  methods: {
    test () {
      document.execCommand('insertOrderedList', false)
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
.byq-editor-wrap{
  position: relative;
  z-index: 1;
  width: 816px;
  margin: 0 auto;
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  -webkit-box-shadow: 0 1px 6px #ccc;
  -ms-box-shadow: 0 1px 6px #ccc;
  -o-box-shadow: 0 1px 6px #ccc;
  box-shadow: 0 1px 6px #ccc;
  .byq-editor{
    padding: 20px 100px;
    font-size: 11pt;
    line-height: 1.7;
    color: #494949;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 500px;
    white-space: pre-wrap;
    word-wrap: break-word;
    counter-reset: chapter section subsec;
  }
  blockquote{
    padding-left: 15px;
    border-left: 5px solid #f0f0f0;
  }
}
</style>
