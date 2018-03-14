export const addTodo = todo => ({
  type: "ADD_TODO",
  todo: todo
})

export const removeTodo = todo_idx => ({
  type: "REMOVE_TODO",
  todo_idx: todo_idx
})
