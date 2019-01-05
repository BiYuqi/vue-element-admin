<template>
  <div class="edit-info components-wrap">
      <info-temp title="修改密码">
        <el-form ref="changeUserInfo" label-width="70px" :rules="rules" :model="userInfo" size="small">
          <el-form-item class="form-item" label="原密码" prop="password">
            <el-input type="password" v-model="userInfo.password" placeholder="请输入原始密码"></el-input>
          </el-form-item>
          <el-form-item class="form-item" label="新密码" prop="newPass">
            <el-input type="password" v-model="userInfo.newPass" placeholder="请输入新密码"></el-input>
          </el-form-item>
          <el-form-item class="form-item" label="确认密码" prop="newPassAgain">
            <el-input type="password" v-model="userInfo.newPassAgain" placeholder="请再次输入新密码"></el-input>
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
export default {
  components: {
    InfoTemp
  },
  data () {
    const checkInitPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    const checkNewPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('新密码不能为空'))
      } else if (!/^[\w]{6,16}$/.test(value)) {
        return callback(new Error('新密码长度在6~16'))
      } else {
        callback()
      }
    }
    const checkNewPassAgain = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('确认密码不能为空'))
      } else if (value !== this.userInfo.newPass) {
        return callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      userInfo: {
        password: '',
        newPass: '',
        newPassAgain: ''
      },
      rules: {
        password: [
          {validator: checkInitPass, trigger: 'blur'}
        ],
        newPass: [
          {validator: checkNewPass, trigger: 'blur'}
        ],
        newPassAgain: [
          {validator: checkNewPassAgain, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    update (item) {
      this.$refs[item].validate((valid) => {
        if (valid) {
          console.log(valid)
          this.$message.success('密码修改成功')
        } else {
          this.$message.error('密码修改失败,请重试!')
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
