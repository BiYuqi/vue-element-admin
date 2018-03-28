<template>
  <div class="dashboard">
    <panel-group @handlePanelSelect="handlePanelSelect"></panel-group>
    <el-row :gutter="15" style="margin-bottom: 15px;">
      <el-col :span="24">
        <line-chart :chart-data="lineData"></line-chart>
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="6">
        <todo-app></todo-app>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import LineChart from './components/LineChart.vue'
import PanelGroup from './components/PanelGroup.vue'
import TodoApp from './TodoList/index.vue'
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
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
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
  components: {
    LineChart,
    PanelGroup,
    TodoApp
  }
}
</script>

<style lang="scss">
.main-line{
  width: 100%;
  margin-bottom: 15px;
}
</style>
