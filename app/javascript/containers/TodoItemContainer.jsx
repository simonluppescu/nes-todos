import React, { Component } from "react";
import { connect } from "react-redux";
import { editTodoItem } from "../actions";

import TodoItem from "../components/TodoItem";

export class TodoItemContainer extends Component {
  render() {
    const {
      todoListId,
      id,
      value,
      isChecked,
      editTodoItem,
      onDeleteTodoItem
    } = this.props;

    return (
      <TodoItem
        todoListId={todoListId}
        id={id}
        value={value}
        isChecked={isChecked}
        editTodoItem={editTodoItem}
        onDeleteTodoItem={onDeleteTodoItem}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  editTodoItem: (todoListId, todoItemId, fields) =>
    dispatch(editTodoItem(todoListId, todoItemId, fields))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItemContainer);
