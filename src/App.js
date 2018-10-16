import React, { Component } from "react";
import PopularMovies from "./components/popularMovies";
import FilterMovies from "./components/filterMovies";
import Selections from "./components/selections";
import MovieCardContent from "./components/movieCardContent";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/:id" component={MovieCardContent} />
          <Route path="/filter" component={FilterMovies} />
          <Route path="/selections" component={Selections} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={PopularMovies} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
