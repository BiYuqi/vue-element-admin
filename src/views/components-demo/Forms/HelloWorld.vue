<template>
  <div class="hello">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">
      </el-tab-pane>
    </el-tabs>
    <form-one v-if="activeName2 === 'first'" :formData="message" @on-form-change="formDataOne"></form-one>
    <form-two v-if="activeName2 === 'second'" :formData="message" @on-form-change="formDataTwo"></form-two>
    <form-three v-if="activeName2 === 'third'" :formData="message" @on-form-change="formDataThree"></form-three>
    <el-button @click="result">结果</el-button>
  </div>
</template>

<script>
import FormOne from './components/formOne'
import FormTwo from './components/formTwo'
import FormThree from './components/formThree'
export default {
  data () {
    return {
      message: {
        one: '1',
        one2: 'one',
        two: '2',
        two2: 'two',
        three: '3',
        three2: 'three',
        common: '123'
      },
      activeName2: 'first'
    }
  },
  methods: {
    formDataOne (val) {
      console.log(val, '1')
    },
    formDataTwo (val) {
      console.log(val, '2')
    },
    formDataThree (val) {
      console.log(val, '3')
    },
    handleClick (tab, event) {
      // console.log(tab, event)
    },
    result () {
      console.log(this.message)
    }
  },
  computed: {
  },
  components: {
    FormOne,
    FormTwo,
    FormThree
  }
}
</script>

<style scoped>

</style>
