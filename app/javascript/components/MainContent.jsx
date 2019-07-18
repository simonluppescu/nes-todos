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
            newTodoItems[todoItem.id] = todoItem;
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

  editTitle(todoListId, newTitle) {
    $.ajax({
      url: `/api/v1/todo_lists/${todoListId}`,
      method: "PUT",
      data: { todo_list: { title: newTitle } },
      success: json => {
        this.setState(state => {
          const newTodoLists = cloneDeep(state.todoLists);
          newTodoLists[todoListId].title = newTitle;

          return { todoLists: newTodoLists };
        });
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
            />
          ))}
        </div>
        <AddEntity createList={this.createTodoList} />
      </BootstrapContainer>
    );
  }
}

export default MainContent;
