import React from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import "./App.css";

//This class will contain the Navigation Bar
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

//this class will be a sidebar that contais food items that were added in the current session
class RecentlyEntered extends React.Component {}

//This class will be a sidebar that contains the food items that were added in older sessions(this will be a historylike feature )
class RecentlHistory extends React.Component {}

//This will be the SearchBar
class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <p>
          Hey <b>[user], </b>here is how to track your calorie consumption:
        </p>
        <Form />
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <SearchBar />
        </header>
      </div>
    );
  }
}

export default App;
