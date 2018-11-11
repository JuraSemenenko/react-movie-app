import React, { Component } from "react";
import { logOut } from "../services/auth";
class Profile extends Component {
  state = {
    user: {}
  };
  handleLogout = () => {
    this.props.clearLoginData();
    logOut();
  };

  componentDidMount() {
    this.setState({ user: this.props.user });
  }

  render() {
    return (
      <div className="container">
        <div>
          <h1>Hello, {this.state.user.displayName}</h1>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
