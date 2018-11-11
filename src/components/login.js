import React, { Component } from "react";
import { logIn, signIn } from "../services/auth";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  handleLogin = async e => {
    e.preventDefault();
    const logInInfo = await logIn(this.state.email, this.state.password);
    if (logInInfo.success === true) {
      this.props.history.push("/profile");
    } else {
      this.setState({
        errors: {
          errorCode: logInInfo.errors.errorCode,
          errorMessage: logInInfo.errors.errorMessage
        }
      });
    }
  };

  handleInput = event => {
    const formsInput = { ...this.state };
    formsInput[event.currentTarget.type] = event.currentTarget.value;
    this.setState({ ...formsInput });
  };

  render() {
    const { email, password, errors } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className={
                    errors.errorCode === "auth/invalid-email" ||
                    errors.errorCode === "auth/user-not-found"
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  placeholder="Enter email"
                  value={email}
                  onChange={this.handleInput}
                />
                {errors.errorCode === "auth/user-not-found" ||
                errors.errorCode === "auth/invalid-email" ? (
                  <small id="emailHelp" className="invalid-feedback">
                    {errors.errorMessage}
                  </small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className={
                    errors.errorCode === "auth/wrong-password"
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  placeholder="Password"
                  value={password}
                  onChange={this.handleInput}
                />
                {errors.errorCode === "auth/wrong-password" ? (
                  <small id="emailHelp" className="invalid-feedback">
                    {errors.errorMessage}
                  </small>
                ) : null}
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
