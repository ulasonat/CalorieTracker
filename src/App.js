import React from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import "./App.css";

//This class will contain the Navigation Bar
class NavBar extends React.Component{
}

//this class will be a sidebar that contais food items that were added in the current session
class RecentlyEntered extends React.Component{
}

//This class will be a sidebar that contains the food items that were added in older sessions(this will be a historylike feature )
class RecentlHistory extends React.Component{
}

//This will be the SearchBar
class SearchBar extends React.Component{

}


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
          Hey <b>[user], </b>here is how to track your calorie consumption:
        </p>
        <Form/>
        </header>
      </div>
    );
  }
}

export default App;
