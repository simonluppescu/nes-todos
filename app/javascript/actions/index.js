export const addTodo = (id, text) => ({
  type: "ADD_TODO_LIST",
  payload: { id, text }
});

export const setTodos = todoLists => ({
  type: "SET_TODOS",
  payload: { todoLists }
});
