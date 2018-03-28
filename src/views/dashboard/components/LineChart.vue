<template lang="html">
  <div id="main-line" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      charts: null
    }
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
        // setTimeout(() => {
        //   this.charts.resize({
        //     width: document.querySelector('#main-line').getBoundingClientRect().width
        //   })
        // }, 280)
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
        legend: {
          data: ['JavaScript', 'Vue'],
          show: true,
          top: 15
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
            type: 'cross'
          },
          padding: [5, 10]
        },
        grid: {
          left: '2%',
          right: '3%',
          bottom: '3%',
          containLabel: true
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
  beforeDestroy () {
    this.charts.dispose()
    this.charts = null
  },
  mounted () {
    this.init(this.chartData)
  }
}
</script>

<style lang="scss">
.main-line{
  width: 100%;
  background-color:#fff;
}
</style>
