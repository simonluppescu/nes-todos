export const addTodoList = newTodoList => ({
  type: "ADD_TODO_LIST",
  payload: newTodoList
});

export const setTodos = todoLists => ({
  type: "SET_TODOS",
  payload: { todoLists }
});

export const editListTitle = (id, title) => ({
  type: "EDIT_TITLE",
  payload: { id, title }
});
