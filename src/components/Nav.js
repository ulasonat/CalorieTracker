import React from "react";
import * as ReactBootstrap from "react-bootstrap";

export default function Nav() {
  return (
    <ReactBootstrap.Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
    >
      <ReactBootstrap.Navbar.Brand href="#home">
        Calorie Counter
      </ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootstrap.Nav className="mr-auto">
          <ReactBootstrap.Nav.Link href="#features">
            About
          </ReactBootstrap.Nav.Link>
          {/* <ReactBootstrap.Nav.Link href="#pricing">
            Pricing
          </ReactBootstrap.Nav.Link> */}
          <ReactBootstrap.NavDropdown
            title="Profile"
            id="collasible-nav-dropdown"
          >
            <ReactBootstrap.NavDropdown.Item href="#action/3.1">
              coming up
            </ReactBootstrap.NavDropdown.Item>
            <ReactBootstrap.NavDropdown.Item href="#action/3.2">
              coming up
            </ReactBootstrap.NavDropdown.Item>
            <ReactBootstrap.NavDropdown.Item href="#action/3.3">
              coming up
            </ReactBootstrap.NavDropdown.Item>
            <ReactBootstrap.NavDropdown.Divider />
            <ReactBootstrap.NavDropdown.Item href="#action/3.4">
              coming up
            </ReactBootstrap.NavDropdown.Item>
          </ReactBootstrap.NavDropdown>
        </ReactBootstrap.Nav>
        <ReactBootstrap.Nav>
          <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
            Sign out
          </ReactBootstrap.Nav.Link>
        </ReactBootstrap.Nav>
      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
  );
}
