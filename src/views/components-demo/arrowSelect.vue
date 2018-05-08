<template lang="html">
  <div class="arrow-demo">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>测试用箭头选值(支持enter键)</span>
      </div>
      <el-row>
        <el-col>
          <arrow-select mock>
          </arrow-select>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ArrowSelect from '@/components/ArrowSelect'
import { throttle } from '@/utils/tools'
export default {
  components: {
    ArrowSelect
  },
  data () {
    return {
      mockArrowData: []
    }
  },
  methods: {
    ...mapActions('user', [
      'getUserInfoAction2'
    ]),
    selectChange: throttle(2000, 2000, (val) => {
      // axios({
      //   method: 'GET',
      //   url: 'https://www.easy-mock.com/mock/5aa881eb99ed355f274d0e93/system/getSearchList#!method=get',
      //   headers: {
      //     'Content-Type': 'application/json; charset=UTF-8'
      //   }
      // }).then(res => {
      //   this.mockArrowData = []
      //   this.mockArrowData = res.data.list
      // })
    })
  }
}
</script>

<style lang="scss">
</style>
