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

export const addTodoItem = newTodoItem => ({
  type: "ADD_TODO_ITEM",
  payload: newTodoItem
});

export const deleteTodoItem = (todoListId, todoItemId) => ({
  type: "DELETE_TODO_ITEM",
  payload: { todoListId, todoItemId }
});
