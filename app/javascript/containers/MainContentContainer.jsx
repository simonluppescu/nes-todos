import React, { Component } from "react";
import { connect } from "react-redux";

import { setTodos, addTodoList } from "../actions";
import MainContent from "../components/MainContent";

class MainContentContainer extends Component {
  componentDidMount() {
    this.props.loadTodoLists();
  }

  render() {
    return (
      <MainContent
        todoLists={this.props.todoLists}
        createTodoList={this.props.createTodoList}
      />
    );
  }
}

const loadTodoLists = callback => {
  $.ajax({
    url: "/api/v1/todo_lists.json",
    method: "GET",
    success: json => {
      const newTodoLists = {};
      json.forEach(todoList => {
        const newTodoList = {
          id: todoList.id,
          title: todoList.title
        };
        const newTodoItems = {};
        todoList.todo_items.forEach(todoItem => {
          newTodoItems[todoItem.id] = {
            id: todoItem.id,
            value: todoItem.value,
            isChecked: todoItem.is_checked
          };
        });
        newTodoList.todoItems = newTodoItems;

        newTodoLists[todoList.id] = newTodoList;
      });

      callback(newTodoLists);
    }
  });
};

const createTodoList = callback => {
  $.ajax({
    url: "/api/v1/todo_lists",
    method: "POST",
    success: json => {
      const newTodoList = {
        id: json.id,
        title: json.title,
        todoItems: {}
      };

      callback(newTodoList);
    }
  });
};

const mapStateToProps = state => ({
  todoLists: state.todoLists
});

const mapDispatchToProps = dispatch => ({
  loadTodoLists: () => {
    loadTodoLists(todoLists => dispatch(setTodos(todoLists)));
  },
  createTodoList: () => {
    createTodoList(newTodoList => dispatch(addTodoList(newTodoList)));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContentContainer);
