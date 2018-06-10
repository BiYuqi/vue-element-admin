<template>
  <base-chart
    ids="timer-chart"
    :options="options"
    title="当前时间"
    ref="baseRoot"
    icon="international">
    </base-chart>
</template>

<script>
import BaseChart from '@/components/Charts'
export default {
  components: {
    BaseChart
  },
  data () {
    return {
      options: null,
      timeTicket: null
    }
  },
  methods: {
    startCount () {
      this.options = {
        tooltip: {
          // formatter: "{a}：{c}"
          backgroundColor: '#fff',
          borderColor: '#f60',
          borderWidth: '1px',
          textStyle: {
            color: '#333'
          },
          formatter: function (param) {
            var time = Math.floor(param.value)
            if (param.seriesIndex === 0) {
              return '<em style="color:' + param.color + ';">当前小时:' + time + '</em>'
            }
            if (param.seriesIndex === 1) {
              return '<em style="color:' + param.color + ';">当前星期:' + time + '</em>'
            }
            if (param.seriesIndex === 2) {
              return '<em style="color:' + param.color + ';">当前月份:' + time + '</em>'
            }
            if (param.seriesIndex === 4) {
              return '<em style="color:' + param.color + ';">当前小时:' + time + '</em>'
            }
            if (param.seriesIndex === 5) {
              return '<em style="color:' + param.color + ';">当前分钟:' + time + '</em>'
            }
            if (param.seriesIndex === 6) {
              return '<em style="color:' + param.color + ';">当前秒:' + time + '</em>'
            }
          }
        },
        backgroundColor: '#fff',
        series: [{ // 大表盘时针
          name: '小时',
          type: 'gauge',
          radius: '90%', // 仪表盘半径
          min: 0,
          max: 12,
          startAngle: 90,
          endAngle: -269.9999,
          splitNumber: 12,
          animation: 0,
          pointer: { // 仪表盘指针
            length: '70%',
            width: 6
          },
          itemStyle: { // 仪表盘指针样式
            normal: {
              color: '#109A39',
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          },
          axisLine: { // 仪表盘轴线样式
            show: 0,
            lineStyle: {
              color: [
                [1, '#09c']
              ],
              width: 10,
              shadowColor: 'rgba(0, 0, 0, 0.4)',
              shadowBlur: 12,
              shadowOffsetX: 3,
              shadowOffsetY: 3
            }
          },
          splitLine: { // 分割线样式
            length: 10,
            lineStyle: {
              width: 2
            }
          },
          axisTick: { // 仪表盘刻度样式
            show: true,
            splitNumber: 5, // 分隔线之间分割的刻度数
            length: 5, // 刻度线长
            lineStyle: {
              color: ['#ffffff']
            }
          },
          axisLabel: {
            show: 0
          }, // 刻度标签
          title: {
            show: 0
          }, // 仪表盘标题
          detail: {
            show: 0
          }, // 仪表盘显示数据
          data: [{}]
        }, { /// ////////////////////////////////////////////大表盘分针
          name: '分钟',
          type: 'gauge',
          radius: '90%', // 仪表盘半径
          min: 0,
          max: 60,
          startAngle: 90,
          endAngle: -269.9999,
          splitNumber: 12,
          animation: 0,
          pointer: { // 仪表盘指针
            length: '85%',
            width: 6
          },
          itemStyle: { // 仪表盘指针样式
            normal: {
              color: '#ca8622',
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          },
          axisLine: { // 仪表盘轴线样式
            show: 0,
            lineStyle: {
              width: 0
            }
          },
          splitLine: { // 分割线样式
            length: 10,
            lineStyle: {
              width: 2
            }
          },
          axisTick: { // 仪表盘刻度样式
            show: true,
            splitNumber: 5, // 分隔线之间分割的刻度数
            length: 5, // 刻度线长
            lineStyle: {
              color: ['#ffffff']
            }
          },
          axisLabel: {
            show: 0
          }, // 刻度标签
          title: {
            show: 0
          }, // 仪表盘标题
          detail: {
            show: 0
          }, // 仪表盘显示数据
          data: [{}]
        }, { /// ////////////////////////////////////////////大表盘秒针
          name: '秒',
          type: 'gauge',
          radius: '90%', // 仪表盘半径
          min: 0,
          max: 60,
          startAngle: 90,
          endAngle: -269.9999,
          splitNumber: 12,
          animation: 0,
          pointer: { // 仪表盘指针
            show: true,
            length: '95%',
            width: 4
          },
          itemStyle: { // 仪表盘指针样式
            normal: {
              color: '#00b0b0',
              shadowColor: 'rgba(0, 0, 0, 0.4)',
              shadowBlur: 10,
              shadowOffsetX: 4,
              shadowOffsetY: 4
            }
          },
          axisLine: { // 仪表盘轴线样式
            lineStyle: {
              color: [
                [1, '#09c']
              ],
              width: 10
            }
          },
          splitLine: { // 分割线样式
            length: 10,
            lineStyle: {
              width: 2
            }
          },
          axisTick: { // 仪表盘刻度样式
            show: 1,
            splitNumber: 5, // 分隔线之间分割的刻度数
            length: 5, // 刻度线长
            lineStyle: {
              color: ['#fff']
            }
          },
          axisLabel: { // 刻度标签
            show: 1,
            distance: 6, // 标签与刻度线的距离
            textStyle: {
              fontWeight: 'bold',
              fontSize: 16
            },
            formatter: function (t) {
              switch (t + '') {
                case '0':
                  return ''
                case '5':
                  return '1'
                case '10':
                  return '2'
                case '15':
                  return '3'
                case '20':
                  return '4'
                case '25':
                  return '5'
                case '30':
                  return '6'
                case '35':
                  return '7'
                case '40':
                  return '8'
                case '45':
                  return '9'
                case '50':
                  return '10'
                case '55':
                  return '11'
                case '60':
                  return '12'
              }
            }
          },
          title: {
            show: 0
          }, // 仪表盘标题
          detail: { // 仪表盘显示数据
            show: 0,
            formatter: '{value}',
            offsetCenter: [0, '60%']
          },
          data: [{}]
        }]
      }
      this.timeTicket = setInterval(() => {
        var datetime = new Date()
        var year = datetime.getFullYear()
        var month = datetime.getMonth() + 1
        var date = datetime.getDate()
        var h = datetime.getHours()
        var m = datetime.getMinutes()
        var s = datetime.getSeconds()
        // var week = datetime.getDay()
        var ms = datetime.getMilliseconds()
        var minutes = m + s / 60
        var hoursAll = h + m / 60
        var hoursHalf
        if (hoursAll > 12) {
          hoursHalf = hoursAll - 12
        } else {
          hoursHalf = hoursAll
        }
        var seconds = s + ms / 1000
        var curMon = new Date(year, month, 0)
        var curMonCount = curMon.getDate() // 当前月份总天数
        var monthss = month + date / curMonCount
        if (monthss > 12) {
          monthss = monthss - 12
        }
        var str = checktime(h) + ':' + checktime(m) + ':' + checktime(s)
        this.options.series[0].data[0].name = str
        this.options.series[0].data[0].value = (hoursHalf).toFixed(2)
        this.options.series[1].data[0].value = (minutes).toFixed(2)
        this.options.series[2].data[0].value = (seconds).toFixed(2)
        this.$refs.baseRoot.charts.setOption(this.options)
      }, 1000)

      function checktime (str) {
        if (str < 10) {
          return '0' + str
        }
        return str
      }
    },
    hidePage () {
      let hidden
      let visibilityChange
      if (typeof document.hidden !== 'undefined') {
        hidden = 'hidden'
        visibilityChange = 'visibilitychange'
      } else if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden'
        visibilityChange = 'msvisibilitychange'
      } else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden'
        visibilityChange = 'webkitvisibilitychange'
      }
      document.addEventListener(visibilityChange, () => {
        if (document[hidden]) {
          document.title = '快回来搞事情啦...'
        } else {
          // 当前页面
        }
      }, false)
    }
  },
  mounted () {
    if (this.timeTicket) {
      clearInterval(this.timeTicket)
    }
    this.$nextTick(() => {
      this.startCount()
      this.hidePage()
    })
  },
  beforeDestroy () {
    clearInterval(this.timeTicket)
  }
}
</script>

<style lang="css">
</style>
