import React, { Component } from "react";

import Button from "./nes/Button";
import Container from "./nes/Container";
import TodoListTitle from "./TodoListTitle";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: []
    };
  }

  render() {
    return (
      <Container className="todo-list-container is-rounded">
        <TodoListTitle todoListId={this.props.id} title={this.props.title} />
        <div className="todo-list">{this.state.todoItems}</div>
        <Button variant="success">Add Todo</Button>
      </Container>
    );
  }
}

export default TodoList;
