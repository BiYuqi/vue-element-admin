<template lang="html">
  <span style="cursor: pointer;" title="捕捉快照">
    <svg-icon class="language-trans" :size="20" name="camera" @click.native="getCanvas"/>
    <el-dialog
      :visible.sync="dialogVisible"
      class="capture"
      width="90%">
      <div id="render">
        <img :src="canvas" alt="" style="width: 100%;">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="downLoadImg">下 载</el-button>
      </span>
    </el-dialog>
  </span>
</template>

<script>
import Html2Canvas from '@/utils/html2canvas'
export default {
  data () {
    return {
      dialogVisible: false,
      canvas: ''
    }
  },
  props: {
    ids: {
      type: String,
      default: 'app'
    }
  },
  methods: {
    getCanvas () {
      new Html2Canvas().drawCanvas(`#${this.ids}`).then(canvas => {
        this.canvas = canvas.toDataURL('image/png')
        this.dialogVisible = true
      })
    },
    downLoadImg () {
      new Html2Canvas().downLoadImg(this.canvas, this.$route.name)
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss">
</style>
