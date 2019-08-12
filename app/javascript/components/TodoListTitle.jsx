import React, { Component } from "react";

import Button from "./nes/Button";
import EditValue from "./shared/EditValue";

class TodoListTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditTitle: false
    };

    this.toggleEditTitle = this.toggleEditTitle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
  }

  toggleEditTitle() {
    this.setState(state => {
      return { isEditTitle: !state.isEditTitle };
    });
  }

  saveTitle() {
    this.toggleEditTitle();

    const { todoListId, value } = this.props;

    $.ajax({
      url: `/api/v1/todo_lists/${todoListId}`,
      method: "PUT",
      data: { todo_list: { title: value } },
      success: json => {
        console.log(`Saved TodoList ${todoListId} with title ${value}`);
      }
    });
  }

  handleInputChange(event) {
    this.props.onEditTitle(this.props.todoListId, event.target.value);
  }

  getTitleElement() {
    let titleElement = null;
    if (this.state.isEditTitle) {
      titleElement = (
        <EditValue
          value={this.props.value}
          onInputChange={this.handleInputChange}
          onSave={this.saveTitle}
        />
      );
    } else {
      titleElement = (
        <h2 className="todo-list-title" onClick={this.toggleEditTitle}>
          {this.props.value} <span className="edit-title">Edit</span>
        </h2>
      );
    }
    return titleElement;
  }

  render() {
    return this.getTitleElement();
  }
}

export default TodoListTitle;
