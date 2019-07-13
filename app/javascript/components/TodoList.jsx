import React, { Component } from "react";
import TodoItem from "./TodoItem";
import Button from "./nes/Button";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: []
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="todo-list">{this.state.todoItems}</div>
        <Button onClick={this.handleAdd} variant="success">
          Add Todo
        </Button>
      </React.Fragment>
    );
  }
}

export default TodoList;
