<template lang="html">
  <div class="byq-toolbar">
    <span class="byq-formats">
      <button
        class="byq-cmd"
        :class="item"
        :key="item"
        v-for="item in cmd1"
        @click="command($event, item)">
        <svg-icon :name="item"/>
      </button>
    </span>
    <span class="byq-formats">
      <span class="byq-header byq-picker">
        <span class="byq-picker-label" area-label="正文" @click.stop="command($event, 'main')">
          <svg-icon name="arrowBottom" :size="12"/>
        </span>
        <ul class="byq-picker-options">
          <li
            v-for="item in cmd2"
            :key="item.title"
            :style="{fontSize: item.size}">
            {{item.title}}
          </li>
        </ul>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cmd1: ['undo', 'redo', 'painter', 'eraser'],
      cmd2: [
        { title: '正文', size: '12' },
        { title: '标题', size: '22pt' },
        { title: '副标题', size: '18pt' },
        { title: '标题1', size: '16pt' },
        { title: '标题2', size: '14pt' },
        { title: '标题3', size: '12pt' }
      ]
    }
  },
  methods: {
    command (event, cmd) {
      console.log(event, cmd)
      switch (cmd) {
        case 'main':
          const name = event.target.className
          console.log(name)
          if (name.indexOf('expanded') < 0) {
            event.target.className += ' byq-picker-expanded'
          } else {
            event.target.className = 'byq-picker-label'
          }
          break
        case 'undo':
          console.log('undo')
          break
        case 'redo':
          console.log('redo')
          break
        case 'painter':
          console.log('painter')
          break
        default:
      }
    }
  }
}
</script>

<style lang="scss">
@import './rich-head.scss';
</style>
