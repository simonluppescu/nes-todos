import React, { Component } from "react";
import { connect } from "react-redux";

import { setTodos } from "../actions";
import MainContent from "../components/MainContent";

class MainContentContainer extends Component {
  componentDidMount() {
    this.props.loadTodoLists();
  }

  render() {
    return <MainContent todoLists={this.props.todoLists} />;
  }
}

const loadTodoLists = callback => {
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

      callback(newTodoLists);
    }
  });
};

const mapStateToProps = state => ({
  todoLists: state.todoLists
});

const mapDispatchToProps = dispatch => ({
  loadTodoLists: () => {
    loadTodoLists(todoLists => dispatch(setTodos(todoLists)));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContentContainer);
