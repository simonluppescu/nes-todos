import React, { Component } from "react";

import * as BSContainer from "react-bootstrap/Container";
import AddEntity from "./AddEntity";

class MainContent extends Component {
  state = {};
  render() {
    return (
      <BSContainer>
        <AddEntity />
      </BSContainer>
    );
  }
}

export default MainContent;
