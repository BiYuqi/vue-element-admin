<template>
  <div id="map-tar" :style="{height:initHeight+'px'}"></div>
</template>

<script>
import echarts from 'echarts'
import {cityValue, geoCoordMap} from '../map/echartDemo'
export default {
  data () {
    return {
      initHeight: 0,
      chart: null
    }
  },
  methods: {
    converData (data) {
      const res = []
      for (let i = 0; i < data.length; i++) {
        const geoCood = geoCoordMap[data[i].name]
        if (geoCood) {
          res.push({
            name: data[i].name,
            value: geoCood.concat(data[i].value)
          })
        }
      }
      return res
    },
    init () {
      echarts.registerMap('china', require('../json/china.json'))
      this.chart = echarts.init(document.querySelector('#map-tar'))
      const options = {
        backgroundColor: 'rgba(54, 64, 77, .2)',
        title: {
          text: '全国主要城市',
          top: '3%',
          subtext: 'data from PM25.in',
          // sublink: 'http://www.pm25.in',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        geo: {
          map: 'china',
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: 'rgba(54, 64, 77, .8)',
              borderColor: '#111',
              color: '#eee'
            },
            emphasis: {
              areaColor: 'rgba(54, 64, 77, 1)'
            }
          }
        },
        visualMap: {
          type: 'continuous',
          min: 0,
          max: 300,
          calculable: true,
          right: '30',
          inRange: {
            color: ['#ddb926', '#f4e925']
          },
          bottom: '4%',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            type: 'scatter',
            name: 'PM2.5',
            coordinateSystem: 'geo',
            color: 'yellow',
            data: this.converData(cityValue),
            symbolSize: function (val) {
              return val[2] / 10
            },
            itemStyle: {
              normal: {
                color: '#ddb926'
              }
            }
          },
          {
            type: 'effectScatter',
            name: 'Top5',
            coordinateSystem: 'geo',
            data: this.converData(cityValue.sort((a, b) => {
              return b.value - a.value
            })).slice(0, 6),
            symbolSize: function (val) {
              return val[2] / 10
            },
            showEffectOn: 'render',
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: '#f4e925',
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
              }
            }
          }
        ]
      }
      this.chart.setOption(options)
    }
  },
  beforeDestroy () {
    this.chart.dispose()
    this.chart = null
  },
  mounted () {
    this.$nextTick(() => {
      this.initHeight = window.innerHeight
      setTimeout(() => {
        this.init()
      })
    })
  }
}
</script>

<style lang="scss">
</style>
