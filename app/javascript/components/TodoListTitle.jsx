import React, { Component } from "react";

import Button from "./nes/Button";

class TodoListTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditTitle: false,
      inputValue: props.title
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

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  getTitleElement() {
    let titleElement = null;
    if (this.state.isEditTitle) {
      titleElement = (
        <div className="edit-title-form">
          <input
            type="text"
            className="nes-input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button variant="success" onClick={this.saveTitle}>
            Save
          </Button>
        </div>
      );
    } else {
      titleElement = (
        <h2 className="todo-list-title" onClick={this.toggleEditTitle}>
          {this.props.title} <span className="edit-title">Edit</span>
        </h2>
      );
    }
    return titleElement;
  }

  saveTitle(event) {
    this.toggleEditTitle();

    this.props.handleSaveTitle(this.props.todoListId, this.state.inputValue);
  }

  render() {
    return this.getTitleElement();
  }
}

export default TodoListTitle;
