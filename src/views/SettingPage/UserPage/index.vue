<template lang="html">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>个人设置</span>
    </div>
    <el-form ref="form" :model="baseSetting" label-width="80px">
      <el-form-item label="个人头像">
        <el-input v-model="baseSetting.name"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="baseSetting.name"></el-input>
      </el-form-item>
      <el-form-item label="个人签名">
        <el-input v-model="baseSetting.name"></el-input>
      </el-form-item>
      <el-form-item label="旧密码">
        <el-input v-model="baseSetting.name"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="baseSetting.name"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码">
        <el-input v-model="baseSetting.name"></el-input>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      baseSetting: {
        name: ''
      }
    }
  }
}
</script>

<style lang="scss">
.box-card{
  margin-bottom: 20px;
}
.grid-content{
  min-height: 40px;
}
</style>
