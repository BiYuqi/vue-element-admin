export const todoLeft = state => {
  return state.todoList.filter((item) => item.status === 1)
}
export const language = state => {
  return state.language
}
