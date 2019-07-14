import React, { Component } from "react";

import Button from "./nes/Button";

class TodoListTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      isEditTitle: false
    };

    this.bindMethods();
  }

  bindMethods() {
    this.handleTitleEdit = this.handleTitleEdit.bind(this);
    this.toggleEditTitle = this.toggleEditTitle.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
  }

  getTitleElement() {
    let titleElement = null;
    if (this.state.isEditTitle) {
      titleElement = (
        <div className="edit-title-form">
          <input
            type="text"
            className="nes-input"
            value={this.state.title}
            onChange={this.handleTitleEdit}
          />
          <Button variant="success" onClick={this.saveTitle}>
            Save
          </Button>
        </div>
      );
    } else {
      titleElement = (
        <h2 className="todo-list-title" onClick={this.toggleEditTitle}>
          {this.state.title} <span className="edit-title">Edit</span>
        </h2>
      );
    }
    return titleElement;
  }

  handleTitleEdit(event) {
    this.setState({ title: event.target.value });
  }

  toggleEditTitle() {
    this.setState(state => {
      return { isEditTitle: !state.isEditTitle };
    });
  }

  saveTitle() {
    this.toggleEditTitle();

    fetch(`/api/v1/todo_lists/${this.props.todoListId}`, {
      method: "PUT",
      body: JSON.stringify({ todo_list: { title: this.state.title } }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log("Saved");
      });
  }

  render() {
    return this.getTitleElement();
  }
}

export default TodoListTitle;
