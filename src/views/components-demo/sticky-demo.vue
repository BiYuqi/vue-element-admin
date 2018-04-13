<template>
  <div class="sticky-demo">
    <sticky-pan :visibleHeight="84" height="40px" backgroundColor="#43a1c9">
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
    <div class="sticky-page components-wrap">
      <com-intro
        leftTxt="Sticky 当页面滚动到预设的位置会吸附在顶部，内容自定义"
        ></com-intro>
      <div class="test">
        <p v-for="item in 20">placeholder</p>
      </div>
    </div>
  </div>
</template>

<script>
import StickyPan from '@/components/Sticky'
import ComIntro from '@/views/components-intro/index'
export default {
  components: {
    StickyPan,
    ComIntro
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

<style lang="scss">
.sticky-demo{
  position: relative;
  .test{
    height: 2000px;
  }
  .s-right{
    text-align: right;
  }
}
</style>
