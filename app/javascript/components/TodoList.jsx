import React, { Component } from "react";
import TodoItem from "./TodoItem";
import Button from "./nes/Button";
import Container from "./nes/Container";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [],
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
  }

  render() {
    return (
      <Container className="is-rounded">
        {this.getTitleElement()}
        <div className="todo-list">{this.state.todoItems}</div>
        <Button variant="success">Add Todo</Button>
      </Container>
    );
  }
}

export default TodoList;
