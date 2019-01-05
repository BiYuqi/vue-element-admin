<template>
  <div class="setting-wrap components-wrap">
    <el-row :gutter="20">
      <el-col :span="12">
        <base-page></base-page>
      </el-col>
      <el-col :span="12">
        <user-page></user-page>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BasePage from './BasePage'
import UserPage from './UserPage'
export default {
  data () {
    return {
      showTabs: true,
      staticTheme: [ // static color data
        {
          title: '默认',
          key: 'static'
        },
        {
          title: '蓝色',
          key: 'blue'
        }
      ]
    }
  },
  methods: {
    switchStatus () {
      this.$store.commit('setHeadVisetedShow')
    },
    handleCommand (com) {
      /**
      * 换主题的思路大概就是实现写好几套主题
      * 然后动态的选择加载哪一套主题
      * 本demo只是简单的展示
      * 后续会逐步完善
      */
      const themeLink = document.querySelector('link[name="theme"]')
      const pathName = './static/theme/'
      const lastName = pathName + com + '.css'
      themeLink.setAttribute('href', lastName)
    }
  },
  components: {
    BasePage,
    UserPage
  }
}
</script>

<style lang="scss">
@import '../../styles/mixin.scss';
.setting-wrap{

}

</style>
