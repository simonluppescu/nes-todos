export default (state = {}, { type, payload }) => {
  switch (type) {
    case "SET_TODOS":
      return payload.todoLists;

    case "ADD_TODO_LIST":
      return { ...state, [payload.id]: payload };

    default:
      return state;
  }
};
