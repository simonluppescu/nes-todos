const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_TODOS":
      return payload.todoLists;

    case "ADD_TODO_LIST":
      return { ...state.todoLists, [payload.todoList.id]: payload.todoList };

    default:
      return state;
  }
};
