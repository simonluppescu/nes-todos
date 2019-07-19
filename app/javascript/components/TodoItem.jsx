import React, { Component } from "react";

import Checkbox from "./Checkbox";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(event) {
    this.props.handleCheckTodoItem(
      this.props.todoListId,
      this.props.id,
      event.target.checked
    );
  }

  render() {
    return (
      <div className="one-todo">
        <label className="todo-inputs">
          <Checkbox
            isChecked={this.props.isChecked || false}
            onChange={this.handleCheck}
          />
          <span>{this.props.value}</span>
        </label>
        <a className="todo-item-actions-btn nes-btn">Actions</a>
      </div>
    );
  }
}

export default TodoItem;
