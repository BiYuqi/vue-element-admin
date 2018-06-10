<template lang="html">
  <div class="line-chart-wrap">
    <base-chart
      ids="main-line-bar"
      :options="options"
      title="用户活跃度"
      :styles="{height:height,width:width}"
      icon="boy">
      </base-chart>
  </div>
</template>

<script>
import BaseChart from '@/components/Charts'
export default {
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
    BaseChart
  },
  data () {
    return {
      options: {}
    }
  },
  methods: {
    init () {
      var xAxisData = []
      var data1 = []
      var data2 = []
      for (var i = 0; i < 10; i++) {
        xAxisData.push(i + '月')
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
      }
      this.options = {
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
              color: '#f2c31a'
            }
          },
          {
            name: 'girl',
            type: 'bar',
            barWidth: '8',
            data: data2,
            itemStyle: {
              color: '#24b7f2'
            }
          }
        ]
      }
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
