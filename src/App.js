import React, { Component } from "react";
import PopularMovies from "./components/popularMovies";
import NavBar from "./components/navBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <PopularMovies />
      </React.Fragment>
    );
  }
}

export default App;
