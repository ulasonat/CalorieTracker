import React from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">
          <p>
            Hey <b>[user], </b>here is how to track your calorie consumption:{" "}
          </p>
          <Form />
        </header>
      </div>
    );
  }
}

export default App;
