<template>
  <div class="dashboard components-wrap">
    <a href="https://github.com/BiYuqi/vue-element-admin" class="github-corner" aria-label="View source on Github"><svg viewBox="0 0 250 250" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>
    <panel-group
      @handlePanelSelect="handlePanelSelect">
    </panel-group>
    <el-row :gutter="15" style="margin-bottom: 65px;">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <line-chart :chart-data="lineData"></line-chart>
      </el-col>
    </el-row>
    <el-row :gutter="15" style="margin-bottom: 15px;">
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <line-bar></line-bar>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <randar-chart ref="randar"></randar-chart>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <todo-app></todo-app>
      </el-col>
    </el-row>
    <!-- 一打开就崩溃，暂时未找到原因 -->
    <!-- <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <timer-chart></timer-chart>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <meter-chart></meter-chart>
      </el-col>
    </el-row> -->
  </div>
</template>
<script>
import LineChart from './components/LineChart.vue'
import PanelGroup from './components/PanelGroup/PanelGroup.vue'
import TodoApp from './TodoList/index.vue'
import LineBar from './components/LineBar.vue'
// import TimerChart from './components/TimeChart'
import RandarChart from './components/RadarChart'
// import MeterChart from './components/MeterChart'
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 190, 141, 142, 145, 150, 160],
    actualData: [140, 92, 91, 114, 162, 90, 130]
  },
  report: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  github: {
    expectedData: [110, 140, 141, 102, 145, 150, 160],
    actualData: [120, 82, 91, 104, 162, 140, 130]
  }
}
export default {
  data () {
    return {
      lineData: lineChartData['newVisitis'],
      showDs: false
    }
  },
  methods: {
    handlePanelSelect (type) {
      this.lineData = lineChartData[type]
    }
  },
  activated () {
    // console.log(this.$refs.randar)
  },
  components: {
    LineChart,
    PanelGroup,
    TodoApp,
    LineBar,
    RandarChart
    // TimerChart,
    // MeterChart
  }
}
</script>

<style lang="scss">
@import '../../styles/mixin.scss';
.dashboard{
  position: relative;
  .main-line{
    width: 100%;
    margin-bottom: 15px;
  }
  .github-corner{
    border-bottom: 0;
    position: absolute;
    right: 0;
    text-decoration: none;
    top: 0;
    z-index: 1;
    svg{
      color: #fff;
      fill: var(--theme-color,#1fc7c7);
      height: 36px;
      width: 36px;
    }
  }
}
</style>
