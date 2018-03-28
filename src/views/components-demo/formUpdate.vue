<template lang="html">
  <div class="form-listen">
    <form-child :formInfo="forms" @on-form-change="onFormChange"></form-child>
    <el-button>{{test}}</el-button>
  </div>
</template>

<script>
import FormChild from '@/components/FormListen'
export default {
  data () {
    return {
      forms: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      test: '占位符...'
    }
  },
  methods: {
    onFormChange (val) {
      this.test = '子组件数据正在传送给父组件...'
    }
  },
  components: {
    FormChild
  }
}
</script>

<style lang="scss">
.form-listen{
  padding: 10px 15px;
}
</style>
