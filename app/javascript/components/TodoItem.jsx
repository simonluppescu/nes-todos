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
      isEdit: false
    };

    this.toggleActionsOpen = this.toggleActionsOpen.bind(this);
    this.toggleEditItem = this.toggleEditItem.bind(this);
    this.resetActionsMenu = this.resetActionsMenu.bind(this);
    this.checkActionsMenuTimeout = this.checkActionsMenuTimeout.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
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

  saveItem(fieldName, value, callback) {
    const { todoListId, id } = this.props;
    $.ajax({
      url: `/api/v1/todo_lists/${todoListId}/todo_items/${id}`,
      method: "PUT",
      data: { todo_item: { [fieldName]: value } },
      success: json => {
        console.log("Saved value");

        if (callback) callback();
      }
    });
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
            value={this.props.value}
            onChange={event => {
              this.props.editTodoItem(this.props.todoListId, this.props.id, {
                value: event.target.value
              });
            }}
          />
          <Button
            variant="success"
            name="value"
            onClick={event =>
              this.saveItem(event.target.name, this.props.value, () => {
                this.toggleEditItem();
              })
            }>
            Save
          </Button>
        </div>
      );
    } else {
      valueElement = (
        <label className="todo-inputs">
          <Checkbox
            isChecked={this.props.isChecked || false}
            name="is_checked"
            onChange={event => {
              const { name, checked } = event.target;
              this.saveItem(name, checked, () => {
                this.props.editTodoItem(this.props.todoListId, this.props.id, {
                  isChecked: checked
                });
              });
            }}
          />
          <span>{this.props.value}</span>
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
