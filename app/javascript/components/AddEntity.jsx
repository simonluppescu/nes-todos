import React, { Component } from "react";
import Button from "./nes/Button";
import Container from "./nes/Container";
import ListMenu from "./nes/ListMenu";

class AddEntity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    this.setState(state => {
      return { isActive: !state.isActive };
    });
  }

  render() {
    let listMenu = null;
    if (this.state.isActive) {
      listMenu = (
        <Container className="is-rounded list-menu-container">
          <ListMenu
            items={[
              { text: "Create List", action: this.props.createList },
              { text: "Create Item", action: this.props.createItem }
            ]}
          />
        </Container>
      );
    }

    return (
      <div className="add-entity">
        {listMenu}
        <Button onClick={this.toggleActive} variant="primary">
          +
        </Button>
      </div>
    );
  }
}

export default AddEntity;
