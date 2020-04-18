import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import Body from "./components/Body";
function App(props){
    return (
      <div className="App">
        <Nav />
        <Body />
      </div>
    )
}

export default App;
