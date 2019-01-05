<template>
  <div class="edit-info components-wrap">
      <info-temp title="修改用户信息" name="user">
        <el-form ref="changeUserInfo" label-width="60px" :rules="rules" :model="userInfo" size="small">
          <el-form-item class="form-item" label="姓名">
            <el-input type="text" v-model="userInfo.userName" disabled></el-input>
          </el-form-item>
          <el-form-item class="form-item" label="昵称" prop="userName2">
            <el-input type="text" v-model="userInfo.userName2" placeholder="请输入昵称"></el-input>
          </el-form-item>
          <el-form-item class="form-item" label="邮箱" prop="email">
            <el-input type="text" v-model="userInfo.email" placeholder="请输入邮箱地址"></el-input>
          </el-form-item>
          <el-form-item class="form-item" label="手机" prop="phone">
            <el-input type="text" v-model="userInfo.phone" placeholder="请再次输入手机号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="update('changeUserInfo')">提交</el-button>
            <el-button @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
      </info-temp>
  </div>
</template>

<script>
import InfoTemp from './index.vue'
import {phoneCheck, emailCheck} from '@/utils/validate'
export default {
  components: {
    InfoTemp
  },
  data () {
    const checkInitPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('昵称不能为空'))
      } else {
        callback()
      }
    }
    const checkNewPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      } else if (!emailCheck(value)) {
        return callback(new Error('邮箱错误'))
      } else {
        callback()
      }
    }
    const checkNewPassAgain = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号码不能为空'))
      } else if (!phoneCheck(value)) {
        return callback(new Error('手机号码有误!'))
      } else {
        callback()
      }
    }
    return {
      userInfo: {
        userName: this.$store.state.currentUserInfo,
        userName2: '',
        email: '',
        phone: ''
      },
      rules: {
        userName2: [
          {validator: checkInitPass, trigger: 'blur'}
        ],
        email: [
          {validator: checkNewPass, trigger: 'blur'}
        ],
        phone: [
          {validator: checkNewPassAgain, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    update (item) {
      this.$refs[item].validate((valid) => {
        if (valid) {
          this.$message.success('用户信息修改成功')
        } else {
          this.$message.error('用户信息修改失败,请重试!')
        }
      })
    },
    reset () {
      for (let i in this.userInfo) {
        this.userInfo[i] = ''
      }
    }
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
