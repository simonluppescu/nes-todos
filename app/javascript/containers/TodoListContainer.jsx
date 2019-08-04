import React, { Component } from "react";
import { connect } from "react-redux";
import { editListTitle } from "../actions";

import TodoList from "../components/TodoList";

export class TodoListContainer extends Component {
  render() {
    return (
      <TodoList
        onEditTitle={this.props.editTitle}
        todoList={this.props.todoList}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  editTitle: (id, title) => dispatch(editListTitle(id, title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
