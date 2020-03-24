import React from "react";
import Nav from "./components/Nav";
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
      </div>
    );
  }
}

export default App;
