<template>
  <div class="header-wrap">
    <svg-icon
      class="header-icon"
      :size="18"
      name="switch"
      :class="{collapse: collapse}"
      @click.native="changeTab">
    </svg-icon>
    <language-trans class="language-trans"></language-trans>
    <el-dropdown trigger="click" size="small" class="user-info" @command="handleCommand">
      <span class="el-dropdown-link">
        <svg-icon name="boy" :size="14" class="avatar"></svg-icon>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="dashboard">回到首页</el-dropdown-item>
        <el-dropdown-item command="github">项目地址</el-dropdown-item>
        <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
import languageTrans from '@/components/LangSelect'
export default {
  components: {
    languageTrans
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    changeTab () {
      this.$store.commit('setSidebar')
    },
    handleCommand (item) {
      switch (item) {
        case 'loginout':
          Cookie.remove('user')
          Cookie.remove('role')
          this.$store.commit('clearAllTags')
          this.$store.commit('user/RESET_ROLE') // 清除角色
          this.$store.commit('permiss/RM_ROUTES') // 清空routes for sidebar
          localStorage.removeItem('pageOpenedList')
          setTimeout(() => {
            // 为了修复直接通过vue-router 无刷新退出 导致 Duplicate named routes definition bug
            // 刷新是为了清空 路由源保留的路由状态
            location.reload()
          }, 0)
          break
        case 'dashboard':
          this.$router.push({
            name: 'dashboard_index'
          })
          break
        case 'github':
          window.open('https://github.com/BiYuqi/vue-element-admin')
          break
        default:
      }
    }
  },
  computed: {
    collapse () {
      return this.$store.state.sidebarStatus
    }
  }
}
</script>

<style lang="scss">
@import './header.scss';
@import '../../../styles/mixin.scss';
</style>
