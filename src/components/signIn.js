import React, { Component } from "react";
import { signIn } from "../services/auth";

class SignIn extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    errors: {}
  };

  handleSignIn = async e => {
    e.preventDefault();
    const signInInfo = await signIn(
      this.state.email,
      this.state.password,
      this.state.name
    );
    if (signInInfo.success) {
      console.log("All fine!!!");
      this.props.history.push("/");
    } else {
      console.log(signInInfo.errors.errorCode, signInInfo.errors.errorMessage);
      this.setState({
        errors: {
          errorCode: signInInfo.errors.errorCode,
          errorMessage: signInInfo.errors.errorMessage
        }
      });
    }
  };

  handleInput = event => {
    const formsInput = { ...this.state };
    formsInput[event.currentTarget.id] = event.currentTarget.value;
    this.setState({ ...formsInput });
  };

  render() {
    const { email, password, name, errors } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-">
            <form>
              <div className="form-group is-invalid">
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
                  className={
                    errors.errorCode === "auth/email-already-in-use" ||
                    errors.errorCode === "auth/invalid-email"
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  placeholder="Enter email"
                  value={email}
                  onChange={this.handleInput}
                />
                {errors.errorCode === "auth/email-already-in-use" ||
                errors.errorCode === "auth/invalid-email" ? (
                  <small id="emailHelp" className="invalid-feedback">
                    {errors.errorMessage}
                  </small>
                ) : (
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                )}
              </div>
              <div className="form-group is-invalid">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className={
                    errors.errorCode === "auth/weak-password"
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  placeholder="Password"
                  value={password}
                  onChange={this.handleInput}
                />
                {errors.errorCode === "auth/weak-password" ? (
                  <small id="emailHelp" className="invalid-feedback">
                    {errors.errorMessage}
                  </small>
                ) : null}
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSignIn}
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
