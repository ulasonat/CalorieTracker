import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import Body from "./components/Body";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Body />
      </div>
    );
  }
}

export default App;
