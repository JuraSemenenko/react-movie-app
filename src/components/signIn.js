import React, { Component } from "react";
import { signIn } from "../services/auth";

class SignIn extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleSignin = e => {
    e.preventDefault();
    signIn(this.state.email, this.state.password, this.state.name);
    this.props.history.push("/");
  };

  handleInput = event => {
    const formsInput = { ...this.state };
    formsInput[event.currentTarget.id] = event.currentTarget.value;
    this.setState({ ...formsInput });
  };

  render() {
    const { email, password, name } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-">
            <form>
              <div className="form-group">
                <label htmlFor="name">Your full name</label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Your full name"
                  value={name}
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.handleInput}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleInput}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSignin}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
