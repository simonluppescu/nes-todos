import React from "react";

import Checkbox from "./nes/Checkbox";
import EditValue from "./shared/EditValue";

const TodoItemValue = props => {
  const {
    isEdit,
    todoListId,
    id,
    value,
    isChecked,
    editTodoItem,
    saveItem,
    toggleEditItem
  } = props;

  let valueElement = null;
  if (isEdit) {
    valueElement = (
      <EditValue
        value={value}
        onInputChange={event => {
          editTodoItem(todoListId, id, {
            value: event.target.value
          });
        }}
        onSave={event => {
          saveItem(event.target.name, value, () => {
            toggleEditItem();
          });
        }}
      />
    );
  } else {
    valueElement = (
      <label className="todo-inputs">
        <Checkbox
          isChecked={isChecked || false}
          name="is_checked"
          onChange={event => {
            const { name, checked } = event.target;
            saveItem(name, checked, () => {
              editTodoItem(todoListId, id, {
                isChecked: checked
              });
            });
          }}
        />
        <span>{value}</span>
      </label>
    );
  }
  return valueElement;
};

export default TodoItemValue;
