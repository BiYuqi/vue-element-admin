<template>
  <div class="login-wrap">
    <el-form :model="formItem" :rules="rules2" ref="ruleForm" class="login-main">
      <h3 class="login-title">登录系统</h3>
      <el-form-item prop="account">
        <el-input type="text" class="el-input-mine" placeholder="username" v-model="formItem.account" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input type="password" class="el-input-mine" placeholder="password" v-model="formItem.pass"></el-input>
      </el-form-item>
      <el-select v-model="userRole" placeholder="请选择" class="role-class" @change="getRoleChange">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" style="width:100%;" @click="loginIn('ruleForm')">登录</el-button>
    </el-form>
  </div>
</template>
<script>
import Cookie from 'js-cookie'
import { passCheck } from '@/utils/validate'
export default {
  data () {
    const validAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'))
      } else {
        callback()
      }
    }
    const validPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else if (passCheck(value)) {
        return callback(new Error('密码不能少于8位,且必须有数字字母组合'))
      } else {
        callback()
      }
    }
    return {
      formItem: {
        account: '1803999999',
        pass: '11111000kkk'
      },
      rules2: {
        account: [
          {
            validator: validAccount,
            trigger: 'blur'
          }
        ],
        pass: [
          {
            validator: validPass,
            trigger: 'blur'
          }
        ]
      },
      cliboard: '',
      options: [
        {
          label: '管理员',
          value: 'admin'
        },
        {
          label: '普通用户',
          value: 'user'
        }
      ],
      userRole: 'admin'
    }
  },
  methods: {
    loginIn (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Cookie.set('user', this.formItem.account)
          Cookie.set('role', this.userRole) // 用于拉去用户可支配的路由权限
          this.$router.push({
            path: 'dashboard'
          })
        } else {
          return false
        }
      })
    },
    getRoleChange (val) {
      this.userRole = val
    }
  }
}
</script>
<style lang="scss">
  @import '../../styles/login/login.scss';
  .role-class{
    width: 100%;
    margin-bottom: 30px;
    .el-input__inner{
      background-color: #2d3a4b;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, .6);
    }
  }
</style>
