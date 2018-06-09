<template lang="html">
  <div class="line-chart-wrap" :style="styles">
    <card-title :title="title" v-if="title" :icon="icon"></card-title>
    <div :id="ids" :style="{height:height,width:width}"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import {dispose, listenSideBar} from '@/myMixins/charts'
import CardTitle from '@/components/CardTitle'
export default {
  mixins: [dispose, listenSideBar],
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
    options: {
      handler (val) {
        this.charts.setOption(val)
      },
      deep: true
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
  }
}
</script>

<style lang="scss">
</style>
