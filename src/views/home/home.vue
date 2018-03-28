<template>
  <div class="home-wrap">
    <el-row :gutter="10" class="hone-main">
      <el-col class="grid-content" :sm="24">
        <china-map></china-map>
      </el-col>
      <svg-icon name="home" class="home-icon" @click.native="jump"></svg-icon>
    </el-row>
  </div>
</template>

<script>
import DayCall from './components/daysCall'
import ChinaMap from './components/echartDemo'
export default {
  data () {
    return {
      earth: null
    }
  },
  methods: {
    jump () {
      this.$router.push({
        name: 'dashboard_index'
      })
    }
  },
  components: {
    DayCall,
    ChinaMap
  },
  mounted () {
    // console.log(a)
  }
}
</script>

<style lang="scss">
  .home-wrap{
    height: 100%;
    background-color: #172743;
    color: #fff;
    // background: url('../../assets/img/minibg.jpg') center center;
    // background-size: cover;
    background-color: rgb(58, 65, 77);
    .hone-main{
      height: 100%;
      margin: 0 !important;
    }
    .home-icon{
      position: absolute;
      top: 3%;
      right: 2%;
      z-index: 9999;
      width: 30px;
      height: 30px;
      color: rgba(75, 120, 133, .6);
      cursor: pointer;
    }
    .earch-wrap{
      padding-top: 7%;
    }
  }
</style>
