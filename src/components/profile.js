import React, { Component } from "react";
import FavoritesTable from "./favoritesTable";

import { logOut } from "../services/auth";
import { getDataFromDB } from "../services/firebase";

class Profile extends Component {
  state = {
    user: {},
    data: {}
  };
  handleLogout = () => {
    this.props.clearLoginData();
    logOut();
  };

  componentDidMount() {
    const URL = `users/${this.props.user.uid}`;
    getDataFromDB(URL).then(data =>
      this.setState({ data: data, user: this.props.user })
    );

    this.setState({ user: this.props.user });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container m-3">
        <div className="row d-flex justify-content-between m-2">
          <h1>Hello, {this.state.user.displayName}</h1>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleLogout}
          >
            Logout
          </button>
        </div>
        <div>
          <h2>Your favorites movies:</h2>
          {data.favorites !== undefined ? (
            <FavoritesTable
              data={this.state.data}
              content="movie"
              contentType="movies"
            />
          ) : (
            <h3>You donn't have favorites movies</h3>
          )}
          <h2>Your favorites actors:</h2>
          {data.favorites !== undefined ? (
            <FavoritesTable
              data={this.state.data}
              content="people"
              contentType="people"
            />
          ) : (
            <h3>You donn't have favorites actors</h3>
          )}
        </div>
      </div>
    );
  }
}

export default Profile;
