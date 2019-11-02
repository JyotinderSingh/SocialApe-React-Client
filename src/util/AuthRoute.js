import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthROute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated == true ? <Redirect to="/" /> : <Component {...props} />
    }
  ></Route>
);

export default AuthROute;
