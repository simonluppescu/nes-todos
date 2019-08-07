import cloneDeep from "clone-deep";
import todoItemReducer from "./todoItemReducer";

export default (state = {}, { type, payload }) => {
  let newState;
  let todoList;

  switch (type) {
    case "SET_TODOS":
      return payload.todoLists;

    case "ADD_TODO_LIST":
      return { ...state, [payload.id]: payload };

    case "EDIT_TITLE":
      newState = cloneDeep(state);
      newState[payload.id].title = payload.title;
      return newState;

    case "ADD_TODO_ITEM":
      newState = cloneDeep(state);
      todoList = newState[payload.todoListId];
      todoList.todoItems = todoItemReducer(todoList.todoItems, {
        type,
        payload
      });
      return newState;

    default:
      return state;
  }
};
