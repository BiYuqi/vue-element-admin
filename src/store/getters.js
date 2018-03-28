export const todoLeft = state => {
  return state.todoList.filter((item) => item.status === 1)
}
