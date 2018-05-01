<template>
  <div id="code-edit" class="editor" :style="{'min-height': height, 'min-width': width, 'font-size': fontsize}">
  </div>
</template>

<script>
import * as brace from 'brace'
import 'brace/ext/modelist'
import 'brace/ext/themelist'
const modelist = brace.acequire('ace/ext/modelist')
const themelist = brace.acequire('ace/ext/themelist')
export default {
  props: {
    mode: {
      type: String,
      default: 'javascript'
    },
    theme: {
      type: String,
      default: 'vibrant_ink'
    },
    height: {
      type: String,
      default: '100%'
    },
    width: {
      type: String,
      default: '100%'
    },
    fontSize: {
      type: String,
      default: '14px'
    },
    staticVal: {
      type: [Array],
      default: () => {
        return [
          '/**',
          '* 日期格式化',
          '* @param {type} String HHMMDDhhmmss  至于中间用什么请自便',
          '* @param {timer} Number',
          '* HH年MM月DD月 hh:mm:ss => 2018年4月12日 22:09:30',
          '*/',
          'export const AGE = 19'
        ]
      }
    },
    highlightline: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      editor: null,
      fontsize: this.fontSize
    }
  },
  methods: {
    setMode () {
      const modes = modelist.modesByName[this.mode]
      if (modes) {
        require(`brace/mode/${modes.name}`)
        this.editor.getSession().setMode(modes.mode)
      }
    },
    setTheme () {
      const themes = themelist.themesByName[this.theme]
      if (themes) {
        require(`brace/theme/${themes.name}`)
        this.editor.setTheme(themes.theme)
      }
    },
    emitCode () {
      this.$emit('code-change', this.editor.getValue())
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.editor = brace.edit('code-edit')
      this.setMode()
      this.setTheme()
      if (this.staticVal) {
        this.editor.setValue(this.staticVal.join('\n'))
      }
      this.editor.clearSelection()
      this.editor.$blockScrolling = Infinity
      this.editor.getSession().on('change', this.emitCode)
    })
  },
  watch: {
    mode () {
      this.setMode()
    },
    theme () {
      this.setTheme()
    },
    fontSize (val) {
      this.fontsize = val
    },
    highlightline (newVal) {
      this.editor.setHighlightActiveLine(newVal)
    }
  }
}
</script>

<style lang="scss">
</style>
