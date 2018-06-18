<template lang="html">
  <div class="line-chart-wrap" :style="styles">
    <card-title :title="title" v-if="title" :icon="icon"></card-title>
    <div :id="ids" :style="{height:height,width:width}"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import {listenSideBar} from '@/myMixins/charts'
import CardTitle from '@/components/CardTitle'
import { throttle } from '@/utils/tools'
export default {
  mixins: [listenSideBar],
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    title: {
      type: String
    },
    ids: {
      type: String
    },
    icon: {
      type: String,
      default: 'bug'
    },
    styles: {
      type: Object,
      default: () => {
        return {
          width: '100%',
          backgroundColor: '#fff',
          overflowX: 'hidden'
        }
      }
    },
    options: {
      type: Object
    }
  },
  components: {
    CardTitle
  },
  data () {
    return {
      charts: null
    }
  },
  watch: {
    options (val) {
      this.charts.setOption(val)
    }
  },
  methods: {
    init () {
      this.charts = echarts.init(document.getElementById(`${this.ids}`))
      this.charts.setOption(this.options)
    }
  },
  mounted () {
    this.init()
    this.nextTick(() => {
      if (this.charts) {
        window.addEventListener('resize', throttle(1000, 1000, () => {
          this.charts.resize()
        }))
      }
    })
  },
  beforeDestroy () {
    this.charts.dispose()
    this.charts.clear()
    this.charts = null
  }
}
</script>

<style lang="scss">
</style>
