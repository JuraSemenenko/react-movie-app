import React, { Component } from "react";
import PopularMovies from "./components/popularMovies";
import FilterMovies from "./components/filterMovies";
import Selections from "./components/selections";
import MovieCardContent from "./components/movieCardContent";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import Profile from "./components/profile";
import Login from "./components/login";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    user: { isAuth: false, uid: "" }
  };

  componentDidMount() {
    if (localStorage.getItem("isAuth") && localStorage.getItem("uid")) {
      const user = {
        isAuth: localStorage.getItem("isAuth"),
        uid: localStorage.getItem("uid")
      };
      this.setState({ user });
    }
  }

  setLoginData = user => {
    this.setState({ user });
  };
  clearLoginData = () => {
    this.setState({ user: { isAuth: false, uid: "" } });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar isAuth={this.state.user.isAuth} />
        <Switch>
          <Route path="/movie/:id" component={MovieCardContent} />
          <Route path="/filter" component={FilterMovies} />
          <Route path="/selections" component={Selections} />
          <Route path="/not-found" component={NotFound} />
          <Route
            path="/profile"
            render={props => (
              <Profile clearLoginData={this.clearLoginData} {...props} />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <Login getUserData={this.setLoginData} {...props} />
            )}
          />
          <Route path="/" exact component={PopularMovies} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
