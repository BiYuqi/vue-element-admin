<template lang="html">
  <div class="bugger">
    <el-table :data="errorLog" border>
      <el-table-column label="Message">
        <template slot-scope="scope">
          <div>
            <span class="message-title">Msg:</span>
            <el-tag type="danger">{{ scope.row.err.message }}</el-tag>
          </div><br/>
          <div>
            <span class="message-title" style="padding-right: 10px;">Info: </span>
            <el-tag type="warning">{{scope.row.vm.$vnode.tag}} error in {{scope.row.info}}</el-tag>
          </div><br/>
          <div>
            <span class="message-title" style="padding-right: 16px;">Position: </span>
            <el-tag type="success">{{scope.row.url}}</el-tag>
          </div><br/>
          <div>
            <span class="message-title" style="padding-right: 16px;">Count: </span>
            <el-tag type="success">{{scope.row.count}}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Stack">
        <template slot-scope="scope">
          {{ scope.row.err.stack }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    console.log(this.errorLog)
  },
  computed: {
    errorLog () {
      return this.$store.state.errorLog
    }
  }
}
</script>

<style lang="scss">
</style>
