import React from "react";

import Button from "./nes/Button";
import Checkbox from "./nes/Checkbox";

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
      <div className="edit-value-container">
        <input
          type="text"
          name="value"
          className="nes-input"
          value={value}
          onChange={event => {
            editTodoItem(todoListId, id, {
              value: event.target.value
            });
          }}
          onKeyPress={event => {
            if (event.key === "Enter") {
              saveItem(event.target.name, value, () => {
                toggleEditItem();
              });
            }
          }}
        />
        <Button
          variant="success"
          name="value"
          onClick={event =>
            saveItem(event.target.name, value, () => {
              toggleEditItem();
            })
          }>
          Save
        </Button>
      </div>
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
