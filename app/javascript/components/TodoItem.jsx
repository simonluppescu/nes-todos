import React, { Component } from "react";

import Checkbox from "./Checkbox";
import ListMenu from "./nes/ListMenu";
import Container from "./nes/Container";
import Button from "./nes/Button";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.actionsMenuTimeout = null;

    this.state = {
      isActionsOpen: false,
      isEdit: false,
      inputValue: props.value
    };

    this.bindMethods();
  }

  bindMethods() {
    this.handleCheck = this.handleCheck.bind(this);
    this.toggleActionsOpen = this.toggleActionsOpen.bind(this);
    this.toggleEditItem = this.toggleEditItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveItemValue = this.saveItemValue.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.resetActionsMenu = this.resetActionsMenu.bind(this);
    this.checkActionsMenuTimeout = this.checkActionsMenuTimeout.bind(this);
  }

  handleCheck(event) {
    this.props.handleCheckTodoItem(
      this.props.todoListId,
      this.props.id,
      event.target.checked
    );
  }

  toggleActionsOpen() {
    this.setState(state => {
      return { isActionsOpen: !state.isActionsOpen };
    });
  }

  toggleEditItem() {
    this.setState(state => {
      return { isEdit: !state.isEdit, isActionsOpen: false };
    });
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  saveItemValue() {
    this.toggleEditItem();

    this.props.handleEditTodoItem(
      this.props.todoListId,
      this.props.id,
      this.state.inputValue
    );
  }

  handleDeleteItem() {
    this.props.onDeleteTodoItem(this.props.todoListId, this.props.id);
  }

  resetActionsMenu() {
    this.actionsMenuTimeout = setTimeout(() => {
      this.setState({ isActionsOpen: false });
    }, 300);
  }
  checkActionsMenuTimeout() {
    clearTimeout(this.actionsMenuTimeout);
  }

  getValueElement() {
    let valueElement = null;
    if (this.state.isEdit) {
      valueElement = (
        <div className="edit-value-container">
          <input
            type="text"
            className="nes-input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button variant="success" onClick={this.saveItemValue}>
            Save
          </Button>
        </div>
      );
    } else {
      valueElement = (
        <label className="todo-inputs">
          <Checkbox
            isChecked={this.props.isChecked || false}
            onChange={this.handleCheck}
          />
          <span>{this.state.inputValue}</span>
        </label>
      );
    }
    return valueElement;
  }
  getActionsContainer() {
    let actionsContainer = null;
    if (this.state.isActionsOpen) {
      actionsContainer = (
        <Container className="todo-item-actions-container is-rounded">
          <ListMenu
            items={[
              { text: "Edit", action: this.toggleEditItem },
              { text: "Delete", action: this.handleDeleteItem }
            ]}
          />
        </Container>
      );
    }
    return actionsContainer;
  }

  render() {
    return (
      <div
        className="one-todo"
        onMouseEnter={this.checkActionsMenuTimeout}
        onMouseLeave={this.resetActionsMenu}>
        {this.getValueElement()}
        <Button
          className="todo-item-actions-btn"
          variant="info"
          onClick={this.toggleActionsOpen}>
          Actions
        </Button>
        {this.getActionsContainer()}
      </div>
    );
  }
}

export default TodoItem;
