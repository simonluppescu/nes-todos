import React, { Component } from "react";

import Button from "./nes/Button";
import TodoItemActions from "./TodoItemActions";
import TodoItemValue from "./TodoItemValue";

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
        console.log(`Successfully edited todo`);
        console.log(json);

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

  render() {
    return (
      <div
        className="one-todo"
        onMouseEnter={this.checkActionsMenuTimeout}
        onMouseLeave={this.resetActionsMenu}>
        <TodoItemValue
          isEdit={this.state.isEdit}
          todoListId={this.props.todoListId}
          id={this.props.id}
          value={this.props.value}
          isChecked={this.props.isChecked}
          editTodoItem={this.props.editTodoItem}
          saveItem={this.saveItem}
          toggleEditItem={this.toggleEditItem}
        />
        <Button
          className="todo-item-actions-btn"
          variant="info"
          onClick={this.toggleActionsOpen}>
          Actions
        </Button>
        <TodoItemActions
          isOpen={this.state.isActionsOpen}
          items={[
            { text: "Edit", action: this.toggleEditItem },
            { text: "Delete", action: this.handleDeleteItem }
          ]}
        />
      </div>
    );
  }
}

export default TodoItem;
