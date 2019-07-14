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

  componentDidMount() {
    fetch("/api/v1/todo_lists.json", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          todoLists: json.map(item => ({ id: item.id, title: item.title }))
        });
      });
  }

  createTodoList() {
    fetch("/api/v1/todo_lists", {
      method: "POST",
      body: JSON.stringify({ todo_list: { title: "Set title" } }),
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
            <TodoList
              key={todoList.id}
              id={todoList.id}
              title={todoList.title}
            />
          ))}
        </div>
        <AddEntity createList={this.createTodoList} />
      </BootstrapContainer>
    );
  }
}

export default MainContent;
