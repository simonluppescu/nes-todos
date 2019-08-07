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

    default:
      return state;
  }
};
