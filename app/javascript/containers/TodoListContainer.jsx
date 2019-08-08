import React, { Component } from "react";
import { connect } from "react-redux";
import { editListTitle, addTodoItem, deleteTodoItem } from "../actions";

import TodoList from "../components/TodoList";

export class TodoListContainer extends Component {
  render() {
    return (
      <TodoList
        onEditTitle={this.props.editTitle}
        todoList={this.props.todoList}
        onAddTodoItem={this.props.handleAddTodoItem}
        onDeleteTodoItem={this.props.handleDeleteTodoItem}
      />
    );
  }
}

const handleAddTodoItem = (todoListId, callback) => {
  $.ajax({
    url: `/api/v1/todo_lists/${todoListId}/todo_items`,
    method: "POST",
    success: json => {
      callback({
        id: json.id,
        value: json.value,
        isChecked: json.is_checked,
        todoListId: json.todo_list_id
      });
    }
  });
};

const handleDeleteTodoItem = (todoListId, todoItemId, callback) => {
  $.ajax({
    url: `/api/v1/todo_lists/${todoListId}/todo_items/${todoItemId}`,
    method: "DELETE",
    success: json => {
      callback();
    }
  });
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  editTitle: (id, title) => dispatch(editListTitle(id, title)),
  handleAddTodoItem: todoListId => {
    handleAddTodoItem(todoListId, newTodoItem =>
      dispatch(addTodoItem(newTodoItem))
    );
  },
  handleDeleteTodoItem: (todoListId, todoItemId) => {
    handleDeleteTodoItem(todoListId, todoItemId, () =>
      dispatch(deleteTodoItem(todoListId, todoItemId))
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
