<template lang="html">
  <div class="setting-wrap">
    <el-switch
      v-model="showTabs"
      @change="switchStatus"
      active-color="#42b983"
      active-text="显示顶部历史tab"
      inactive-text="关闭顶部历史tab">
    </el-switch>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showTabs: true
    }
  },
  methods: {
    switchStatus () {
      this.$store.commit('setHeadVisetedShow')
    }
  },
  mounted () {
    async function getStarCount (owner, repo) {
      let res = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
      let data = await res.json()
      return data.stargazers_count
    }

    getStarCount('facebook', 'react').then(stargazersCount => {
      console.log(stargazersCount)
    })
  }
}
</script>

<style lang="scss">
.setting-wrap{
  padding: 15px 25px;
}
</style>
