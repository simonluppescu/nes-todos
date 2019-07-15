import React, { Component } from "react";

import Button from "./nes/Button";
import Container from "./nes/Container";
import TodoListTitle from "./TodoListTitle";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: props.todoItems.map(item => ({
        id: item.id,
        isChecked: item.is_checked,
        value: item.value
      }))
    };

    this.addTodoItem = this.addTodoItem.bind(this);
  }

  addTodoItem() {
    $.ajax({
      url: `/api/v1/todo_lists/${this.props.id}/todo_items`,
      method: "POST",
      data: { todo_item: { value: "New task", is_checked: false } },
      success: json => {
        this.setState(state => {
          const newTodoItems = [
            ...state.todoItems,
            {
              id: json.id,
              value: json.value,
              isChecked: json.is_checked
            }
          ];

          return { todoItems: newTodoItems };
        });
      }
    });
  }

  render() {
    return (
      <Container className="todo-list-container is-rounded">
        <TodoListTitle todoListId={this.props.id} title={this.props.title} />
        <div className="todo-list">
          {this.state.todoItems.map(itemHash => (
            <TodoItem
              key={itemHash.id}
              value={itemHash.value}
              isChecked={itemHash.isChecked}
            />
          ))}
        </div>
        <Button variant="success" onClick={this.addTodoItem}>
          Add Todo
        </Button>
      </Container>
    );
  }
}

export default TodoList;
