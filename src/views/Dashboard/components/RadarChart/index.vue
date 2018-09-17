<template>
  <base-chart
    title="雷达图"
    ids="randar-chart"
    :options="options"
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
      options: {}
    }
  },
  mounted () {
    this.options = {
      radar: {
        name: {
          textStyle: {
            color: '#999',
            // backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          {name: 'May', max: 6500},
          {name: 'Jun', max: 16000},
          {name: 'Jule', max: 30000},
          {name: 'August', max: 38000},
          {name: 'September', max: 52000},
          {name: 'October', max: 25000},
          {name: 'November', max: 25000}
        ]
      },
      series: [{
        name: '',
        type: 'radar',
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: 'Product A',
            areaStyle: {
              color: '#94e3ed',
              opacity: '.3'
            },
            lineStyle: {
              color: '#94e3ed'
            }
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: 'Product B',
            areaStyle: {
              color: '#cce6bb',
              opacity: '.3'
            },
            lineStyle: {
              color: '#cce6bb'
            }
          }
        ]
      }]
    }
  }
}
</script>

<style lang="css">
</style>
