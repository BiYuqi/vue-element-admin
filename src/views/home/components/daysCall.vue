<template lang="html">
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
import { daysCount } from '@/filters/index'
export default {
  props: {
    className: {
      type: String,
      default: 'chart-name'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.initChart()
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      const { daysNum, daysNumLine } = this.mockData() // 模拟报警量
      const Data110 = daysNum()
      const Data119 = daysNum()
      const Data122 = daysNum()
      const av = daysNumLine([Data110, Data119, Data122])
      this.chart = echarts.init(document.getElementById(this.id))
      const seriesLabel = {
        normal: {
          show: true,
          // textBorderColor: '#333',
          textBorderWidth: 2
        }
      }
      this.chart.setOption({
        title: {
          text: '三日报警量',
          left: '8%',
          textStyle: {
            color: '#fff'
          }
        },
        legend: {
          data: ['110', '119', '122', '平均'],
          right: '6%',
          itemGap: 15,
          itemWidth: 15,
          textStyle: {
            color: '#ccc',
            left: '80%'
          }
        },
        grid: {
          left: 60
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        yAxis: {
          type: 'value',
          name: '案件',
          axisLabel: {
            formatter: '{value}'
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        xAxis: {
          type: 'category',
          inverse: true,
          data: daysCount(3),
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: '110',
            type: 'bar',
            data: Data110,
            label: seriesLabel,
            color: ['#006ad4']
          },
          {
            name: '119',
            type: 'bar',
            data: Data119,
            label: seriesLabel,
            color: ['#f0651f']
          },
          {
            name: '122',
            type: 'bar',
            data: Data122,
            label: seriesLabel,
            color: ['#01909c']
          },
          {
            name: '平均',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            data: av
          }
        ],
        markArea: {

        }
      })
    },
    beforeDestroy () {
      this.chart.dispose()
      this.chart = null
    },
    mockData () {
      // 报警量
      const daysNum = () => {
        const result = []
        for (let i = 0; i < 3; i++) {
          const random = Math.floor(Math.random() * 209) + 20
          result.push(random)
        }
        return result
      }
      // 平均报警量
      const daysNumLine = (...arg) => {
        const result = []
        const data = arg[0]
        const data1 = ~~((data[0][0] + data[0][1] + data[0][2]))
        const data2 = ~~((data[1][0] + data[1][1] + data[1][2]))
        const data3 = ~~((data[2][0] + data[2][1] + data[2][2]))
        result.push(data3)
        result.push(data2)
        result.push(data1)
        return result
      }
      return {
        daysNum: daysNum,
        daysNumLine: daysNumLine
      }
    }
  }
}
</script>

<style lang="scss">
</style>
