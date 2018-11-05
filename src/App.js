import React, { Component } from "react";
import MoviesDB from "./components/moviesDB";
import People from "./components/actorsDB";
import MovieCardContent from "./components/movieCardContent";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import Profile from "./components/profile";
import Login from "./components/login";
import SignIn from "./components/signIn";
import PeopleCardContent from "./components/peopleCardContent";
import PrivateRoute from "./components/privateRoute";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import firebase from "./services/firebase";

class App extends Component {
  state = {
    user: { isAuth: false, uid: "", userName: "" },
    curreentUser: {}
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user", user);
        this.setState({
          user: {
            isAuth: true,
            uid: user.uid,
            email: user.email,
            userName: user.displayName
          },
          curreentUser: user
        });
        document.cookie = `userid=${user.uid}`;
      } else {
        console.log("no user");
        this.setState({ user: { isAuth: false, uid: "", userName: "" } });
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
    const { user, curreentUser } = this.state;
    return (
      <React.Fragment>
        <NavBar
          isAuth={user.isAuth}
          profileEmail={user.email}
          profileName={user.userName}
        />
        <Switch>
          <Route path="/movie/:id" component={MovieCardContent} />
          <Route path="/people/:id" component={PeopleCardContent} />
          <Route path="/people-data-base" component={People} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/sign-in" component={SignIn} />
          <PrivateRoute
            path="/profile"
            isAuth={user.isAuth}
            user={curreentUser}
            component={Profile}
          />
          <Route
            path="/login"
            render={props => (
              <Login getUserData={this.setLoginData} {...props} />
            )}
          />
          <Route path="/" exact component={MoviesDB} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
