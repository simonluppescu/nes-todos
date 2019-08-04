import cloneDeep from "clone-deep";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case "SET_TODOS":
      return payload.todoLists;

    case "ADD_TODO_LIST":
      return { ...state, [payload.id]: payload };

    case "EDIT_TITLE":
      const newState = cloneDeep(state);
      newState[payload.id].title = payload.title;
      return newState;

    default:
      return state;
  }
};
