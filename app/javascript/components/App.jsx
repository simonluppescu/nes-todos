import React from "react";

import TodoList from "./TodoList";
import Container from "react-bootstrap/Container";
import MainNav from "./MainNav";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainNav />
        <Container>
          <TodoList />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
