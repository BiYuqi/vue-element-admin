<template>
  <div class="arrow-demo">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>测试用箭头选值(支持enter键)</span>
      </div>
      <el-row>
        <el-col>
          <arrow-select mock>
          </arrow-select>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import ArrowSelect from '@/components/ArrowSelect'
export default {
  components: {
    ArrowSelect
  },
  data () {
    return {
      mockArrowData: []
    }
  }
}
</script>

<style lang="scss">
</style>
