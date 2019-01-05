<template>
  <div class="tag-wrap" ref="tagWrap" v-if="headVisetedShow && tagList.length > 0">
    <div class="tag-overflow" ref="tagOver">
      <el-tag
        v-for="items in tagList"
        :key="items.name"
        @click.native="tagClick(items)"
        closable
        :class="{'current': items.name === currentPageName}"
        @close.prevent="close(items.name)"
        :type="items.type" class="tag">
        {{generateTitleTrans(items.meta.title)}}
      </el-tag>
    </div>
  </div>
</template>

<script>
import { baseRoute } from '@/router/sidebar'
import { generateTitle } from '@/utils/i18n'
import { filterName } from '@/utils/tools'
import EventBus from '@/utils/eventBus'
export default {
  data () {
    return {
      currentPageName: this.$route.name,
      generateTitleTrans: generateTitle
    }
  },
  methods: {
    tagClick (item) {
      const name = item.name
      const arg = item.arg
      const query = item.query
      // tagvisited 触发左侧边栏展开
      const flag = filterName(baseRoute, name)
      if (flag) {
        EventBus.$emit('openSidebar', flag)
      }
      if (arg) { // 带有params参数
        this.$router.push({
          name: name,
          params: arg
        })
        return
      }
      if (query) { // 带有query参数
        this.$router.push({
          name: name,
          query: query
        })
        return
      }
      if (query && arg) { // 同时带有params&query参数
        this.$router.push({
          name: name,
          params: arg,
          query: query
        })
        return
      }
      this.$router.push({ // 无参数
        name: name
      })
    },
    close (name) {
      const obj = {
        vm: this,
        name: name
      }
      this.$store.commit('closeTagFromOpendList', obj)
    }
  },
  watch: {
    '$route' (to) {
      this.currentPageName = to.name
    },
    '$store.state.sidebarStatus': { // 监听侧边栏变化
      handler (status) {
        // 预留位置
      },
      deep: true
    }
  },
  mounted () {
    setTimeout(() => {
      const rect = this.$refs.tagOver.getBoundingClientRect()
      this.$refs.tagOver.style.width = rect.width + 'px'
    }, 0)
  },
  computed: {
    tagList () {
      return this.$store.state.pageOpenedList
    },
    headVisetedShow () {
      return this.$store.state.headVisetedShow
    }
  }
}
</script>

<style lang="scss">
@import '../../../styles/mixin.scss';
@import './tagview.scss';
</style>
