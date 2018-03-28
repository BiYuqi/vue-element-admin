<template>
  <div class="todo-app">
    <todo-head></todo-head>
    <todo-item></todo-item>
    <todo-foot></todo-foot>
  </div>
</template>

<script>
import TodoHead from './components/TodoHead.vue'
import TodoItem from './components/TodoItem.vue'
import TodoFoot from './components/TodoFoot.vue'
export default {
  components: {
    TodoHead,
    TodoItem,
    TodoFoot
  }
}
</script>

<style lang="scss">
.todo-app{
  background-color: #fff;
}
</style>
