import cloneDeep from "clone-deep";
import todoItemReducer from "./todoItemReducer";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case "SET_TODOS":
      return payload.todoLists;

    case "ADD_TODO_LIST":
      return { ...state, [payload.id]: payload };

    case "DELETE_TODO_LIST": {
      const newState = cloneDeep(state);
      delete newState[payload.id];
      return newState;
    }

    case "EDIT_TITLE": {
      const newState = cloneDeep(state);
      newState[payload.id].title = payload.title;
      return newState;
    }

    case "ADD_TODO_ITEM": {
      const newState = cloneDeep(state);
      const todoList = newState[payload.todoListId];
      todoList.todoItems = todoItemReducer(todoList.todoItems, {
        type,
        payload
      });
      return newState;
    }

    case "DELETE_TODO_ITEM": {
      const newState = cloneDeep(state);
      const todoList = newState[payload.todoListId];
      todoList.todoItems = todoItemReducer(todoList.todoItems, {
        type,
        payload
      });
      return newState;
    }

    case "EDIT_TODO_ITEM": {
      const newState = cloneDeep(state);
      const todoList = newState[payload.todoListId];
      todoList.todoItems = todoItemReducer(todoList.todoItems, {
        type,
        payload
      });
      return newState;
    }

    default:
      return state;
  }
};
