import React, { Component } from "react";
import * as BootstrapContainer from "react-bootstrap/Container";
import cloneDeep from "clone-deep";

import AddEntity from "./AddEntity";
import TodoList from "./TodoList";

class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoLists: {}
    };

    this.createTodoList = this.createTodoList.bind(this);
    this.createTodoItem = this.createTodoItem.bind(this);
    this.editTitle = this.editTitle.bind(this);
    this.toggleCheckTodoItem = this.toggleCheckTodoItem.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: "/api/v1/todo_lists.json",
      method: "GET",
      success: json => {
        const newTodoLists = {};
        json.forEach(todoList => {
          const newTodoItems = {};
          todoList.todo_items.forEach(todoItem => {
            newTodoItems[todoItem.id] = {
              id: todoItem.id,
              value: todoItem.value,
              isChecked: todoItem.is_checked
            };
          });
          todoList.todoItems = newTodoItems;

          newTodoLists[todoList.id] = todoList;
        });
        this.setState({ todoLists: newTodoLists });
      }
    });
  }

  createTodoList() {
    $.ajax({
      url: "/api/v1/todo_lists",
      method: "POST",
      success: json => {
        this.setState(state => {
          const newTodoLists = cloneDeep(state.todoLists);
          newTodoLists[json.id] = {
            id: json.id,
            title: json.title,
            todoItems: {}
          };

          return { todoLists: newTodoLists };
        });
      }
    });
  }

  createTodoItem(todoListId) {
    $.ajax({
      url: `/api/v1/todo_lists/${todoListId}/todo_items`,
      method: "POST",
      success: json => {
        this.setState(state => {
          const newTodoLists = cloneDeep(state.todoLists);
          newTodoLists[todoListId].todoItems[json.id] = {
            id: json.id,
            value: json.value,
            isChecked: json.is_checked
          };

          return { todoLists: newTodoLists };
        });
      }
    });
  }

  editTitle(todoListId, newTitle) {
    this.setState(state => {
      const newTodoLists = cloneDeep(state.todoLists);
      newTodoLists[todoListId].title = newTitle;

      return { todoLists: newTodoLists };
    });
    $.ajax({
      url: `/api/v1/todo_lists/${todoListId}`,
      method: "PUT",
      data: { todo_list: { title: newTitle } },
      success: json => {
        console.log(`Saved title for todoList[${todoListId}] to ${newTitle}`);
      }
    });
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

  render() {
    const { todoLists } = this.state;
    return (
      <BootstrapContainer>
        <div id="todo-lists-container">
          {Object.keys(todoLists).map(todoListId => (
            <TodoList
              key={todoListId}
              id={todoListId}
              title={todoLists[todoListId].title}
              todoItems={todoLists[todoListId].todoItems}
              handleAddTodoItem={this.createTodoItem}
              handleSaveTitle={this.editTitle}
              handleCheckTodoItem={this.toggleCheckTodoItem}
            />
          ))}
        </div>
        <AddEntity createList={this.createTodoList} />
      </BootstrapContainer>
    );
  }
}

export default MainContent;
