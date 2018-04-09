<template>
  <div class="components-container">
    <com-intro
      leftTxt="Markedown is based on"
      url="https://github.com/sparksuite/simplemde-markdown-editor"
      urlTxt="A simple, beautiful, and embeddable JavaScript Markdown editor."></com-intro>
    <markdown-editor v-model="content" id="contentEditor" :height="400"></markdown-editor>
    <el-button @click="renderMK">To HTML</el-button>
    <div v-html="html" style="padding:20px;"></div>
  </div>
</template>

<script>
import ComIntro from '@/views/components-demo/components-intro/index'
import MarkdownEditor from '@/components/MarkdownEditor'
const con = `* Generic list item
* Generic list item
* Generic list item
1. Numbered list item
2. Numbered list item
3. Numbered list item`
export default {
  data () {
    return {
      content: con,
      html: ''
    }
  },
  components: {
    MarkdownEditor,
    ComIntro
  },
  methods: {
    renderMK () {
      import('showdown').then((showdown) => {
        const converter = new showdown.Converter()
        this.html = converter.makeHtml(this.content)
      })
    }
  }
}
</script>

<style lang="scss">
.components-container{
  .intro{
    padding: 15px;
    margin-bottom: 20px;
    background-color: #f3f3f3;
    a{
      color: #409eff;
      cursor: pointer;
      font-size: 16px;
    }
  }
}
</style>
