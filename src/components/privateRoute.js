import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      render={props =>
        isAuth ? <Component {...props} {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
