<template>
  <div class="css-angle">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="box">
          <el-radio-group v-model="radioStatus" @change="radioChange" size="mini" :fill="currentColor">
            <el-radio-button label="top" class="top">上</el-radio-button>
            <el-radio-button label="right" class="right">右</el-radio-button>
            <el-radio-button label="bottom" class="bottom">下</el-radio-button>
            <el-radio-button label="left" class="left">左</el-radio-button>
            <el-radio-button label="topleft" class="topleft">左上</el-radio-button>
            <el-radio-button label="topright" class="topright">右上</el-radio-button>
            <el-radio-button label="bottomleft" class="bottomleft">左下</el-radio-button>
            <el-radio-button label="bottomright" class="bottomright">右下</el-radio-button>
          </el-radio-group>
        </div>
        <div class="block">
          <el-color-picker v-model="color1" @active-change="colorChange"></el-color-picker>
        </div>
      </el-col>
      <el-col :span="12">

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color1: '#409EFF', // 选色器默认
      currentColor: '#409EFF', // radio
      radioStatus: 'top'
    }
  },
  methods: {
    radioChange (level) {
      console.log(level)
    },
    colorChange (color) {
      this.currentColor = color
    }
  }
}
</script>

<style lang="scss">
.css-angle{
  padding: 15px 20px;
  .box{
    width: 200px;
    height: 200px;
    background-color: #eee;
    margin: 50px auto;
    position: relative;
  }
  .top{
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }
  .right{
    position: absolute;
    top: 50%;
    right: -60px;
    transform: translateY(-50%);
  }
  .bottom{
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
  }
  .left{
    position: absolute;
    top: 50%;
    left: -60px;
    transform: translateY(-50%);
  }
  .topright{
    position: absolute;
    top: -40px;
    right: -35%;
    // transform: translateY(-50%);
  }
  .topleft{
    position: absolute;
    top: -40px;
    left: -35%;
    // transform: translateY(-50%);
  }
  .bottomleft{
    position: absolute;
    bottom: -40px;
    left: -35%;
    // transform: translateY(-50%);
  }
  .bottomright{
    position: absolute;
    bottom: -40px;
    right: -35%;
    // transform: translateY(-50%);
  }
  .el-radio-button__inner{
    border-left: 1px solid #dcdfe6;
  }
  .block{
    margin-left: 260px;
  }
}
</style>
