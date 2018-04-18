<template>
  <div class="little-demo components-wrap">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Form Input Tip</span>
          </div>
          <input-focus v-model="test" iconName="search" style="width:200px;"></input-focus>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>点击波纹</span>
          </div>
          <el-button v-wave type="primary">点击测试</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InputFocus from '@/components/InputFocus'
export default {
  components: {
    InputFocus
  },
  data () {
    return {
      test: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
