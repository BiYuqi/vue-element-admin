<template lang="html">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>基本配置</span>
    </div>
    <el-form
      ref="form" size="small"
      :model="baseSetting"
      label-width="90px"
      label-position="left">
      <el-form-item label="站点标题">
        <el-input v-model="baseSetting.fullName"></el-input>
      </el-form-item>
      <el-form-item label="副标题">
        <el-input v-model="baseSetting.partName"></el-input>
      </el-form-item>
      <el-form-item label="关键词">
        <el-input v-model="baseSetting.keyWord"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="baseSetting.desc"></el-input>
      </el-form-item>
      <el-form-item label="站点地址">
        <el-input v-model="baseSetting.adress"></el-input>
      </el-form-item>
      <el-form-item label="电子邮件地址">
        <el-input v-model="baseSetting.email"></el-input>
      </el-form-item>
      <el-form-item label="黑名单-IP">
        <el-input type="textarea" v-model="baseSetting.ip"></el-input>
      </el-form-item>
      <el-form-item label="黑名单-Email">
        <el-input type="textarea" v-model="baseSetting.blackEmail"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">保存修改</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      baseSetting: {
        fullName: 'LoadingMore',
        partName: 'Talk is cheap, Show me your code',
        keyWord: '前端技术开发',
        desc: 'keep moving',
        adress: 'https://loadingmore.com',
        email: 'biyuqiwan@163.com',
        ip: '',
        blackEmail: ''
      }
    }
  }
}
</script>

<style lang="scss">
.box-card{
  margin-bottom: 20px;
  .el-form-item__label{
    font-size: 12px;
  }
}
.grid-content{
  min-height: 40px;
}
</style>
