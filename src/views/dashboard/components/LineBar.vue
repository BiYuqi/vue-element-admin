<template lang="html">
  <div id="main-line" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'ecahrts'
export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    }
  },
  methods: {
    init () {

    }
  },
  mounted () {

  }
}
</script>

<style lang="css">
</style>
