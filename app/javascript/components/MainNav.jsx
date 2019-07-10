import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MainNav = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand>NES Todos</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link>Profile</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
