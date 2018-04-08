<template lang="html">
  <div class="simplemde-container" :style="{height:height+'px',zIndex:zIndex}">
    <textarea :id="id">
    </textarea>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css'
import 'simplemde/dist/simplemde.min.css'
import SimpleMDE from 'simplemde'
export default {
  components: {
    SimpleMDE
  },
  props: {
    value: String,
    id: {
      type: String
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 150
    },
    zIndex: {
      type: Number,
      default: 10
    },
    toolbar: {
      type: Array
    }
  },
  data () {
    return {
      simplemde: null,
      hasChange: false
    }
  },
  mounted () {
    this.simplemde = new SimpleMDE({
      element: document.getElementById(this.id || 'markdown-editor-' + +new Date()),
      autoDownloadFontAwesome: false,
      autofocus: this.autofocus,
      toolbar: this.toolbar,
      spellChecker: false,
      // initialValue: 'Hello world!',
      insertTexts: {
        link: ['[', ']( )']
      },
      hideIcons: ['side-by-side', 'fullscreen'],
      placeholder: this.placeholder
    })
    if (this.value) {
      this.simplemde.value(this.value)
    }
    this.simplemde.codemirror.on('change', () => {
      this.$emit('input', this.simplemde.value())
    })
  },
  destroyed () {
    this.simplemde.toTextArea()
    this.simplemde = null
  }
}
</script>

<style lang="scss">
</style>
