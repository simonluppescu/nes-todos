export default (state = {}, { type, payload }) => {
  switch (type) {
    case "ADD_TODO_ITEM":
      return {
        ...state,
        [payload.id]: {
          id: payload.id,
          value: payload.value,
          isChecked: payload.isChecked
        }
      };

    case "DELETE_TODO_ITEM": {
      const newState = { ...state };
      delete newState[payload.todoItemId];

      return newState;
    }

    case "EDIT_TODO_ITEM": {
      const newState = { ...state };
      Object.assign(newState[payload.todoItemId], payload.fields);

      return newState;
    }

    default:
      return state;
  }
};
