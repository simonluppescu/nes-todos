import React, { Component } from "react";
import * as BootstrapContainer from "react-bootstrap/Container";
import cloneDeep from "clone-deep";

import AddEntity from "./AddEntity";
import TodoListContainer from "../containers/TodoListContainer";

class MainContent extends Component {
  constructor(props) {
    super(props);

    this.bindMethods();
  }

  bindMethods() {
    this.createTodoItem = this.createTodoItem.bind(this);
    this.toggleCheckTodoItem = this.toggleCheckTodoItem.bind(this);
    this.editTodoItem = this.editTodoItem.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
  }

  createTodoItem(todoListId) {

  }

  toggleCheckTodoItem(todoListId, todoItemId, isChecked) {
    this.setState(state => {
      const newTodoLists = cloneDeep(state.todoLists);
      newTodoLists[todoListId].todoItems[todoItemId].isChecked = isChecked;

      return { todoLists: newTodoLists };
    });
    $.ajax({
      url: `/api/v1/todo_lists/${todoListId}/todo_items/${todoItemId}`,
      method: "PUT",
      data: { todo_item: { is_checked: isChecked } },
      success: json => {
        console.log("Saved checked");
      }
    });
  }

  editTodoItem(todoListId, todoItemId, newValue) {
    this.setState(state => {
      const newTodoLists = cloneDeep(state.todoLists);
      newTodoLists[todoListId].todoItems[todoItemId].value = newValue;

      return { todoLists: newTodoLists };
    });
    $.ajax({
      url: `/api/v1/todo_lists/${todoListId}/todo_items/${todoItemId}`,
      method: "PUT",
      data: { todo_item: { value: newValue } },
      success: json => {
        console.log("Saved value");
      }
    });
  }

  deleteTodoItem(todoListId, todoItemId) {
    this.setState(state => {
      const newTodoLists = cloneDeep(state.todoLists);
      delete newTodoLists[todoListId].todoItems[todoItemId];

      return { todoLists: newTodoLists };
    });
    $.ajax({
      url: `/api/v1/todo_lists/${todoListId}/todo_items/${todoItemId}`,
      method: "DELETE",
      success: json => {
        console.log("Deleted item");
      }
    });
  }

  render() {
    const { todoLists } = this.props;
    return (
      <BootstrapContainer>
        <div id="todo-lists-container">
          {Object.keys(todoLists).map(todoListId => (
            <TodoListContainer
              key={todoListId}
              todoList={todoLists[todoListId]}
              handleAddTodoItem={this.createTodoItem}
              handleSaveTitle={this.editTitle}
              handleCheckTodoItem={this.toggleCheckTodoItem}
              handleEditTodoItem={this.editTodoItem}
              handleDeleteTodoItem={this.deleteTodoItem}
            />
          ))}
        </div>
        <AddEntity createList={this.props.createTodoList} />
      </BootstrapContainer>
    );
  }
}

export default MainContent;
