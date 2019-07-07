import React from "react";
import { Route, Switch } from "react-router-dom";

import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TodoList />
      </React.Fragment>
    );
  }
}

export default App;
