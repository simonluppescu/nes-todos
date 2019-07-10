import React from "react";

import TodoList from "./TodoList";
import Container from "react-bootstrap/Container";

class App extends React.Component {
  render() {
    return (
      <Container>
        <TodoList />
      </Container>
    );
  }
}

export default App;
