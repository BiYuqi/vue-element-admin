<template lang="html">
  <line-char
    :options="options"
    title="测试"
    ids="line-item"
    icon="message"></line-char>
</template>

<script>
import LineChar from '@/components/Charts/LineChar.vue'
export default {
  components: {
    LineChar
  },
  data () {
    return {
      options: null
    }
  },
  created () {
    var xAxisData = []
    var data1 = []
    var data2 = []
    for (var i = 0; i < 10; i++) {
      xAxisData.push('娱乐' + i)
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
    }
    this.options = {
      title: {
        text: '猜猜猜'
      },
      legend: {
        data: ['boy', 'girl'],
        show: true,
        top: 15
      },
      grid: {
        left: '2%',
        right: '3%',
        bottom: '3%',
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
  }
}
</script>

<style lang="css">
</style>
