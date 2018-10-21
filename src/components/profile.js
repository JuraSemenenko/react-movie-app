import React, { Component } from "react";

class Profile extends Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.clearLoginData();
  };

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Profile;
