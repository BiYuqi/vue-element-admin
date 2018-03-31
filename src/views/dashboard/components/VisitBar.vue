<template lang="html">
  <div class="line-chart-wrap">
    <card-title title="2017年~2018年主要GDP对比"></card-title>
    <div id="visit-bar" :style="{height:height,width:width}"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import {dispose, listenSideBar} from '@/myMixins/charts'
import CardTitle from '@/components/Charts/CardTitle'
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
  methods: {
    init () {
      this.charts = echarts.init(document.getElementById('visit-bar'))
      const options = {
        // legend: {
        //   data: ['2017年', '2018年'],
        //   show: false,
        //   top: 15
        // },
        grid: {
          top: '8%',
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界(万)']
        },
        series: [
          {
            name: '2017年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230],
            itemStyle: {
              color: 'rgb(129, 227, 238)'
            }
          },
          {
            name: '2018年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807],
            itemStyle: {
              color: 'rgb(251, 118, 123)'
            }
          }
        ]
      }
      this.charts.setOption(options)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss">
#visit-bar{
  width: 100%;
  background-color:#fff;
  overflow-x: hidden;
}
</style>
