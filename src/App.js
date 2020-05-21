import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import Body from "./components/Body";
function App() {
  return (
    <div>
      <Nav />
      <Body />
      {console.log("cd works as expected!")}
    </div>
  )
}


export default App;
