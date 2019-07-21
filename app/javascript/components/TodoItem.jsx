import React, { Component } from "react";

import Checkbox from "./Checkbox";
import ListMenu from "./nes/ListMenu";
import Container from "./nes/Container";
import Button from "./nes/Button";

class TodoItem extends Component {
  constructor(props) {
    super(props);

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
  }

  handleCheck(event) {
    console.log("Check called in todoItem");
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

  getValueElement() {
    console.log("getValueElement()");
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
        <React.Fragment>
          <Checkbox
            isChecked={this.props.isChecked || false}
            onChange={this.handleCheck}
          />
          <span>{this.state.inputValue}</span>
        </React.Fragment>
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
    console.log("render()");
    return (
      <div className="one-todo">
        <label className="todo-inputs">{this.getValueElement()}</label>
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
