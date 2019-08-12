import React from "react";
import * as BootstrapContainer from "react-bootstrap/Container";

import AddEntity from "./AddEntity";
import TodoListContainer from "../containers/TodoListContainer";

const MainContent = props => {
  const { todoLists, createTodoList } = props;
  return (
    <BootstrapContainer>
      <div id="todo-lists-container">
        {Object.keys(todoLists).map(todoListId => (
          <TodoListContainer
            key={todoListId}
            todoList={todoLists[todoListId]}
          />
        ))}
      </div>
      <AddEntity createList={createTodoList} />
    </BootstrapContainer>
  );
};

export default MainContent;
