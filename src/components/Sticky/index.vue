<template>
  <div class="sticky-wrap" ref="sticktyRap" :style="{height: height}">
    <div class="sticky-inner" ref="stickty" :class="{active: isFiexd}" :style="{width: width, height: height, 'line-height': height, 'background-color': backgroundColor}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '40px'
    },
    width: {
      type: String,
      default: '100%'
    },
    backgroundColor: {
      type: String,
      default: 'rgb(83, 198, 213)'
    },
    visibleHeight: { // 吸顶盒子距离顶部距离
      type: Number,
      required: true
    }
  },
  data () {
    return {
      isFiexd: false
    }
  },
  methods: {
    handlerScroll () {
      const scrollHeight = window.pageYOffset
      if (scrollHeight >= this.visibleHeight) {
        const rect = this.$refs.sticktyRap.getBoundingClientRect()
        this.$refs.stickty.style.width = rect.width + 'px'
        this.isFiexd = true
      } else {
        this.isFiexd = false
        this.$refs.stickty.style.width = '100%'
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handlerScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handlerScroll)
  }
}
</script>

<style lang="scss">
.sticky-wrap{
  .sticky-inner{
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    position: relative;
    padding-right: 30px;
    top: 0;
    z-index: 100;
    &.active{
      position: fixed;
    }
  }
}
</style>
