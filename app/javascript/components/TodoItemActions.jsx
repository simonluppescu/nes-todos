import React from "react";

import ListMenu from "./nes/ListMenu";
import Container from "./nes/Container";

const TodoItemActions = props => {
  let actionsContainer = null;
  if (props.isOpen) {
    actionsContainer = (
      <Container className="todo-item-actions-container is-rounded">
        <ListMenu items={props.items} />
      </Container>
    );
  }
  return actionsContainer;
};

export default TodoItemActions;
