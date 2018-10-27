import React, { Component } from "react";
import { logIn, signIn } from "../services/auth";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleLogin = () => {
    logIn(this.state.email, this.state.password);
    this.props.history.push("/");
  };

  handleInput = event => {
    const formsInput = { ...this.state };
    formsInput[event.currentTarget.type] = event.currentTarget.value;
    this.setState({ ...formsInput });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
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
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
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
                onClick={this.handleLogin}
              >
                Login
              </button>

              <Link className="btn btn-primary" to="/sign-in">
                Sign In
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
