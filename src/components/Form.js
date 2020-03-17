import React from "react";
import * as ReactBootstrap from "react-bootstrap";
export default function Form() {
  return (
    <div>
      <ReactBootstrap.Form>
        <ReactBootstrap.Form.Group controlId="formBasicEmail">
          <ReactBootstrap.Form.Label>Food name:</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control
            type="text"
            placeholder="e.g banana"
          />
          {/* <ReactBootstrap.Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </ReactBootstrap.Form.Text> */}
        </ReactBootstrap.Form.Group>

        {/* <ReactBootstrap.Form.Group controlId="formBasicPassword">
          <ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control type="password" placeholder="Password" />
        </ReactBootstrap.Form.Group>
        <ReactBootstrap.Form.Group controlId="formBasicCheckbox">
          <ReactBootstrap.Form.Check type="checkbox" label="Check me out" />
        </ReactBootstrap.Form.Group> */}
        <ReactBootstrap.Button variant="primary" type="submit">
          Track
        </ReactBootstrap.Button>
      </ReactBootstrap.Form>
    </div>
  );
}
