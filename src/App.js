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
import firebase from "./services/firebase";
class App extends Component {
  state = {
    user: { isAuth: false, uid: "" }
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: {
            isAuth: true,
            uid: user.uid,
            email: user.email
          }
        });
        console.log("User is signed in", user);
      } else {
        console.log("no user is signed in");
        this.setState({ user: {} });
      }
    });
  }

  setLoginData = user => {
    this.setState({ user });
  };
  clearLoginData = () => {
    this.setState({ user: { isAuth: false, uid: "" } });
  };

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <NavBar isAuth={user.isAuth} profileEmail={user.email} />
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
