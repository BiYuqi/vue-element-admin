<template>
  <div class="header-wrap">
    <svg-icon
      class="header-icon"
      :size="18"
      name="switch"
      :class="{collapse: collapse}"
      @click.native="changeTab">
    </svg-icon>
    <div class="svg-group">
      <svg-icon class="language-trans" :size="20" name="camera" @click.native="getCanvas"/>
      <language-trans class="language-trans"></language-trans>
    </div>
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
    <el-dialog
      :visible.sync="dialogVisible"
      top="0"
      class="capture"
      width="90%">
      <div id="render">
        <img :src="canvas" alt="" style="width: 100%;">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="downLoadImg">下 载</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
import languageTrans from '@/components/LangSelect'
import Html2Canvas from '@/utils/html2canvas'
// import canvg from 'canvg'
export default {
  data () {
    return {
      dialogVisible: false,
      canvas: ''
    }
  },
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
    },
    getCanvas () {
      new Html2Canvas().drawCanvas('#app').then(canvas => {
        this.canvas = canvas.toDataURL('image/png')
        this.dialogVisible = true
      })
    },
    downLoadImg () {
      new Html2Canvas().downLoadImg(this.canvas, this.$route.name)
      this.dialogVisible = false
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
