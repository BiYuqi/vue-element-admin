<template lang="html">
  <div class="create-from">
    <sticky-pan :visibleHeight="84" height="50px" backgroundColor="#43a1c9">
      <div class="s-right">
        <el-select
          v-model="platform"
          placeholder="Platform"
          size="small">
          <el-option v-for="opt in platformOpt"
          :value="opt.value"
          :label="opt.label"
          :key="opt.value"></el-option>
        </el-select>
        <el-date-picker
          v-model="publicDate"
          type="date"
          size="small"
          placeholder="选择日期">
        </el-date-picker>
        <el-button type="success" size="small" @click="publishBtn">发布</el-button>
      </div>
    </sticky-pan>
    <div class="components-wrap">
      <input-focus></input-focus>
    </div>
  </div>
</template>

<script>
import StickyPan from '@/components/Sticky'
import InputFocus from '@/components/InputFocus'
export default {
  components: {
    StickyPan,
    InputFocus
  },
  data () {
    return {
      platform: '',
      platformOpt: [
        {
          label: '运营部',
          value: 'A'
        },
        {
          label: '市场部',
          value: 'B'
        }
      ],
      publicDate: ''
    }
  },
  methods: {
    publishBtn () {
      this.$message('发布成功')
    }
  }
}
</script>

<style lang="css">
.s-right{
  text-align: right;
}
</style>
