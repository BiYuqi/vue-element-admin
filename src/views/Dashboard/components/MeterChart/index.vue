<template lang="html">
  <base-chart
    ids="meter-chart"
    :options="options"
    title="仪表盘"
    icon="dashboard"
  ></base-chart>
</template>

<script>
import BaseChart from '@/components/Charts'
export default {
  components: {
    BaseChart
  },
  data () {
    return {
      options: {},
      setInter: null
    }
  },
  mounted () {
    this.options = {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: '业务指标',
          type: 'gauge',
          detail: {formatter: '{value}%'},
          data: [{value: 50, name: '完成率'}]
        }
      ]
    }
    if (this.setInter) {
      clearInterval(this.setInter)
    }
    this.setInter = setInterval(() => {
      this.options.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
    }, 2000)
  },
  beforeDestory () {
    clearInterval(this.setInter)
  }
}
</script>

<style lang="css">
</style>
