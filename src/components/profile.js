import React, { Component } from "react";
import FavoritesTable from "./favoritesTable";
import { Link } from "react-router-dom";
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
          {data.favorites !== undefined && data.favorites.movies ? (
            <FavoritesTable
              data={this.state.data}
              content="movie"
              contentType="movies"
            />
          ) : (
            <React.Fragment>
              <h3>You don't have favorites movies</h3>
              <p>
                Find your favorite pictures{" "}
                <Link to="/people-data-base">here</Link>.
              </p>
              <hr />
            </React.Fragment>
          )}

          {data.favorites !== undefined && data.favorites.people ? (
            <FavoritesTable
              data={this.state.data}
              content="people"
              contentType="people"
            />
          ) : (
            <React.Fragment>
              <h3>You don't have favorites actors</h3>
              <p>
                Find your favorite actors{" "}
                <Link to="/people-data-base">here</Link>.
              </p>
              <hr />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Profile;
