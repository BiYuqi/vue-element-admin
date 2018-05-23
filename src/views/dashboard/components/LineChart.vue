<template lang="html">
  <div class="line-chart-wrap">
    <card-title title="技术走势图"></card-title>
    <div id="main-line" :style="{height:height,width:width}"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import { dispose } from '@/myMixins/charts'
import CardTitle from '@/components/CardTitle'
export default {
  mixins: [dispose],
  data () {
    return {
      charts: null
    }
  },
  components: {
    CardTitle
  },
  props: {
    chartData: {
      type: Object
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    }
  },
  watch: {
    chartData: {
      handler (val) {
        this.init(val)
      },
      deep: true
    },
    '$store.state.sidebarStatus': { // 监听侧边栏变化
      handler (status) {
        const sidebarElm = document.querySelector('.sidebar-wrap')
        sidebarElm.addEventListener('transitionend', () => {
          this.init(this.chartData)
          this.charts.resize()
        })
      },
      deep: true
    }
  },
  methods: {
    init ({ expectedData, actualData } = {}) {
      this.charts = echarts.init(document.getElementById('main-line'))
      const options = {
        backgroundColor: '#fff',
        animation: true,
        // legend: {
        //   data: ['JavaScript', 'Vue'],
        //   show: true,
        //   top: 15
        // },
        grid: {
          top: '5%',
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            color: 'rgb(62, 123, 194)'
          },
          axisTick: {
            show: false
          },
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: 'rgb(62, 123, 194)'
          },
          axisTick: {
            show: false
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#36a3f7'
            }
          },
          padding: [5, 10]
        },
        axisPointer: { // 坐标轴指示器
          show: true,
          type: 'line',
          lineStyle: {
            type: 'dashed',
            color: 'rgb(58, 127, 184)'
          }
        },
        series: [
          {
            name: 'JavaScript',
            data: expectedData,
            type: 'line',
            smooth: true,
            lineStyle: {
              color: '#f4516c'
            },
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          },
          {
            name: 'Vue',
            data: actualData,
            type: 'line',
            smooth: true,
            lineStyle: {
              color: '#36a3f7',
              opacity: 0.8
            },
            areaStyle: {
              color: '#a2ddf7',
              opacity: 0.1
            },
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          }
        ]
      }
      this.charts.setOption(options)
    }
  },
  mounted () {
    this.init(this.chartData)
  }
}
</script>

<style lang="scss">
.line-chart-wrap{
  width: 100%;
  background-color:#fff;
}
</style>
