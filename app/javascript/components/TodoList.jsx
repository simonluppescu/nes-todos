import React, { Component } from "react";
import TodoItem from "./TodoItem";
import Button from "./nes/Button";
import Container from "./nes/Container";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: []
    };
  }

  render() {
    return (
      <Container className="is-rounded">
        <h2>{this.props.title}</h2>
        <div className="todo-list">{this.state.todoItems}</div>
        <Button variant="success">Add Todo</Button>
      </Container>
    );
  }
}

export default TodoList;
