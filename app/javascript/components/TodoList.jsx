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
    this.props.onAddTodoItem(this.props.todoList.id);
  }

  render() {
    const { id, title, todoItems } = this.props.todoList;
    return (
      <Container className="todo-list-container is-rounded">
        <TodoListTitle
          todoListId={id}
          value={title}
          onEditTitle={this.props.onEditTitle}
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
              handleEditTodoItem={this.props.handleEditTodoItem}
              handleDeleteTodoItem={this.props.handleDeleteTodoItem}
            />
          ))}
        </div>
        <Button variant="primary" onClick={this.handleAddTodoItem}>
          Add Todo
        </Button>
      </Container>
    );
  }
}

export default TodoList;
