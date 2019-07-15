import React, { Component } from "react";

import Checkbox from "./Checkbox";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
      todoText: "New task"
    };

    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck() {
    this.setState(state => {
      return { isChecked: !state.isChecked };
    });
  }

  render() {
    return (
      <label className="one-todo">
        <Checkbox
          isChecked={this.state.isChecked}
          onChange={this.handleCheck}
        />
        <span>{this.state.todoText}</span>
      </label>
    );
  }
}

export default TodoItem;
