import React, { Component } from "react";

import Button from "./nes/Button";
import Container from "./nes/Container";
import TodoListTitle from "./TodoListTitle";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
  }

  handleAddTodoItem() {
    this.props.handleAddTodoItem(this.props.id);
  }

  render() {
    const { todoItems } = this.props;
    return (
      <Container className="todo-list-container is-rounded">
        <TodoListTitle
          todoListId={this.props.id}
          title={this.props.title}
          handleSaveTitle={this.props.handleSaveTitle}
        />
        <div className="todo-list">
          {Object.keys(todoItems).map(todoItemId => (
            <TodoItem
              key={todoItemId}
              id={todoItemId}
              todoListId={this.props.id}
              value={todoItems[todoItemId].value}
              isChecked={todoItems[todoItemId].isChecked}
              handleCheckTodoItem={this.props.handleCheckTodoItem}
            />
          ))}
        </div>
        <Button variant="success" onClick={this.handleAddTodoItem}>
          Add Todo
        </Button>
      </Container>
    );
  }
}

export default TodoList;
