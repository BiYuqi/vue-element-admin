<template lang="html">
  <div class="todo-foot clear" v-if="todoList.length > 0">
    <span class="left">{{todoLeft.length}} items left</span>
    <ul class="right">
      <li
        v-for="(item, index) in listItem"
        :key="item.id"
        @click="filterList(index)"
        :class="{active:index === activeIndex}"
        >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import EventBus from '@/utils/eventBus'
export default {
  data () {
    return {
      listItem: ['All', 'Active', 'Computed'],
      activeIndex: 0
    }
  },
  computed: {
    todoLeft () {
      return this.$store.getters.todoLeft
    },
    todoList () {
      return this.$store.state.todoList
    }
  },
  methods: {
    filterList (index) { // filter tode data
      this.activeIndex = index
      // 0 All ===> -1
      // 1 actiev ===> 1
      // 2 computed ===> 0
      let sign = index === 0 ? -1 : index === 1 ? 1 : 0 // 点击index映射至数据status的状态 -1 刚好返回全部 1 0 代表未完成 已完成
      EventBus.$emit('todoSign', sign)
    }
  }
}
</script>

<style lang="scss">
.todo-foot{
  height: 40px;
  padding: 0 15px;
  user-select: none;
  color: #888;
  padding-top: 10px;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  .left{
    float: left;
    font-size: 12px;
  }
  .right{
    float: right;
    list-style: none;
    li{
      display: inline-block;
      cursor: pointer;
      margin: 0 6px;
      padding: 2px;
      font-size: 12px;
      transition: all .2s;
      border: 1px solid transparent;
      &.active{
        border: 1px solid rgb(99, 223, 223);
      }
    }
  }
}
</style>
