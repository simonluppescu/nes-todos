import React, { Component } from "react";

import Button from "./nes/Button";
import Container from "./nes/Container";
import TodoListTitle from "./TodoListTitle";
import TodoItemContainer from "../containers/TodoItemContainer";

const TodoList = props => {
  const { id: todoListId, title, todoItems } = props.todoList;

  return (
    <Container className="todo-list-container is-rounded">
      <TodoListTitle
        todoListId={todoListId}
        value={title}
        onEditTitle={props.onEditTitle}
      />
      <div className="todo-list">
        {Object.keys(todoItems).map(todoItemId => (
          <TodoItemContainer
            key={todoItemId}
            id={todoItemId}
            todoListId={todoListId}
            value={todoItems[todoItemId].value}
            isChecked={todoItems[todoItemId].isChecked}
            handleCheckTodoItem={props.handleCheckTodoItem}
            handleEditTodoItem={props.handleEditTodoItem}
            onDeleteTodoItem={props.onDeleteTodoItem}
          />
        ))}
      </div>
      <Button variant="primary" onClick={() => props.onAddTodoItem(todoListId)}>
        Add Todo
      </Button>
    </Container>
  );
};

export default TodoList;
