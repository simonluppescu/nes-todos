import React, { Component } from "react";
import Button from "./nes/Button";
import Container from "./nes/Container";

class AddEntity extends Component {
  state = {
    isActive: false
  };

  render() {
    return (
      <div className="add-entity">
        <Container className="is-rounded">
          <ul>
            <li>Create List</li>
            <li>Create Item</li>
          </ul>
        </Container>
        <Button className="add-entity-btn" variant="primary">
          +
        </Button>
      </div>
    );
  }
}

export default AddEntity;
