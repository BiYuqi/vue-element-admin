<template>
  <svg class="icon" :class="iconClass" :style="{'font-size': size + 'px'}">
    <use :xlink:href="'#'+Icons[name].default.id"></use>
  </svg>
</template>

<script>
import Icons from '@/assets/icons'
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    size: {
      type: Number,
      default: 15
    }
  },
  data () {
    return {
      Icons: Icons,
      iconClass: 'icon-' + this.name
    }
  }
}
</script>
<style media="screen">
  .icon{
    width: 1em;
    height: 1em;
    vertical-align: sub;
    fill: currentColor;
    overflow: hidden;
  }
</style>
