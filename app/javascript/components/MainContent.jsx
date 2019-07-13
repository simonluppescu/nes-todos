import React, { Component } from "react";

import * as BootstrapContainer from "react-bootstrap/Container";
import AddEntity from "./AddEntity";
import TodoList from "./TodoList";

class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoLists: []
    };

    this.createTodoList = this.createTodoList.bind(this);
  }

  createTodoList() {
    fetch("/api/v1/todo_lists", {
      method: "POST",
      body: JSON.stringify({ todo_list: { title: "Example Title" } }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState(state => {
          const newTodoLists = [
            ...state.todoLists,
            { id: json.id, title: json.title }
          ];

          return { todoLists: newTodoLists };
        });
      });
  }

  render() {
    return (
      <BootstrapContainer>
        <div id="todo-lists-container">
          {this.state.todoLists.map(todoList => (
            <TodoList key={todoList.id} title={todoList.title} />
          ))}
        </div>
        <AddEntity createList={this.createTodoList} />
      </BootstrapContainer>
    );
  }
}

export default MainContent;
