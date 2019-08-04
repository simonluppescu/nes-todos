import cloneDeep from "clone-deep";

export default (state = {}, { type, payload }) => {
  let newState;

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
      newState[payload.todoListId].todoItems[payload.id] = {
        id: payload.id,
        value: payload.value,
        isChecked: payload.isChecked
      };
      return newState;

    default:
      return state;
  }
};
