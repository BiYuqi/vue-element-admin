<template lang="html">
  <el-row :gutter="15">
    <el-col :sm="12" :md="6" :lg="6">
      <sm-card name="peoples" topText="New Visits" :botText="234234" :duration="2600" @click.native="handlePanelSelect('newVisitis')"></sm-card>
    </el-col>
    <el-col :sm="12" :md="6" :lg="6">
      <sm-card name="message" topText="Messages" :botText="1231" :duration="4600" @click.native="handlePanelSelect('messages')"></sm-card>
    </el-col>
    <el-col :sm="12" :md="6" :lg="6">
      <sm-card name="money" topText="Money" :botText="98978" :duration="3600" @click.native="handlePanelSelect('purchases')"></sm-card>
    </el-col>
    <el-col :sm="12" :md="6" :lg="6">
      <sm-card name="shoppingCard" topText="Shoppings" :botText="3244" :duration="2000" @click.native="handlePanelSelect('shoppings')"></sm-card>
    </el-col>
  </el-row>
</template>

<script>
import SmCard from '@/views/components-demo/cards.vue'
export default {
  methods: {
    handlePanelSelect (type) {
      this.$emit('handlePanelSelect', type)
    }
  },
  components: {
    SmCard
  }
}
</script>

<style lang="scss">
.mr15{
  margin-right: 15px;
}
</style>
