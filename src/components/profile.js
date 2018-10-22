import React, { Component } from "react";
import { logOut } from "../services/auth";
class Profile extends Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.clearLoginData();
    logOut();
  };

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleLogout}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default Profile;
