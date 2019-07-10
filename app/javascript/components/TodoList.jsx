import React, { Component } from "react";
import TodoItem from "./TodoItem";
import Button from "./nes/Button";

class TodoList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="todo-list">
          <TodoItem />
        </div>
        <Button variant="success">Add Todo</Button>
      </React.Fragment>
    );
  }
}

export default TodoList;
