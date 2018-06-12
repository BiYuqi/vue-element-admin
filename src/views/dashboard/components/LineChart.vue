<template lang="html">
  <div class="line-chart-wrap">
    <base-chart
      ids="main-line"
      :options="options"
      title="技术走势图"
      :styles="{height:height,width:width}"
      icon="branch">
      </base-chart>
  </div>
</template>

<script>
import BaseChart from '@/components/Charts'
export default {
  data () {
    return {
      options: {}
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
    chartData () {
      this.init()
    }
  },
  methods: {
    init () {
      this.options = {
        backgroundColor: '#fff',
        animation: true,
        legend: {
          data: ['JavaScript', 'Vue'],
          show: true,
          top: 15
        },
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
            data: this.chartData.expectedData,
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
            data: this.chartData.actualData,
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
    }
  },
  mounted () {
    this.init()
  },
  components: {
    BaseChart
  }
}
</script>

<style lang="scss">
.line-chart-wrap{
  width: 100%;
  background-color:#fff;
}
</style>
