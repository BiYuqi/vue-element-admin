<template lang="html">
  <div class="setting-wrap components-wrap">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>本系统基本配置</span>
      </div>
      <el-row>
        <el-col>
          <div class="grid-content">
            <el-switch
              v-model="showTabs"
              @change="switchStatus"
              active-color="#12adad"
              active-text="显示顶部历史tab"
              inactive-text="关闭顶部历史tab">
            </el-switch>
          </div>
        </el-col>
        <el-col>
          <div class="grid-content">
            <el-dropdown trigger="hover" @command="handleCommand">
              <span class="el-dropdown-link">
                切换主题
                <svg-icon name="theme"/>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in staticTheme"
                  :key="item.id"
                  :command="item.key">{{item.title}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
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
      const pathName = '/static/theme/'
      const lastName = pathName + com + '.css'
      themeLink.setAttribute('href', lastName)
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/mixin.scss';
.setting-wrap{
  .box-card{
    margin-bottom: 20px;
  }
  .grid-content{
    min-height: 40px;
  }
}

</style>
