<template>
  <div class="edit-info components-wrap">
    <el-row>
      <el-col :span="8">
        <info-page></info-page>
      </el-col>
      <el-col :span="8">
        <user-page></user-page>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InfoPage from './components/info-page'
import UserPage from './components/user-page'
export default {
  components: {
    InfoPage,
    UserPage
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.edit-info{
  .form-item{
    margin-bottom: 30px;
  }
}
</style>
