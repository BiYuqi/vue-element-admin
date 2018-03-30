<template lang="html">
  <div class="line-chart-wrap">
    <card-title title="娱乐项目"></card-title>
    <div id="main-line-bar" :style="{height:height,width:width}"></div>
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
      var xAxisData = []
      var data1 = []
      var data2 = []
      for (var i = 0; i < 10; i++) {
        xAxisData.push('娱乐' + i)
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
      }
      this.charts = echarts.init(document.getElementById('main-line-bar'))
      const options = {
        // legend: {
        //   data: ['boy', 'girl'],
        //   show: true,
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
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {},
        series: [
          {
            name: 'boy',
            type: 'bar',
            data: data1,
            barWidth: '8',
            animationDelay: function (idx) {
              return idx * 10
            },
            itemStyle: {
              color: '#36a3f7'
            }
          },
          {
            name: 'girl',
            type: 'bar',
            barWidth: '8',
            data: data2,
            itemStyle: {
              color: '#f4516c'
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
.line-chart-wrap{
  width: 100%;
  background-color:#fff;
  .line-card-title{
    border-bottom: 1px solid #e9eaec;
    padding: 14px 16px;
    line-height: 1;
  }
  #main-line-bar{
    width: 100%;
    background-color:#fff;
    overflow-x: hidden;
  }
}
</style>
