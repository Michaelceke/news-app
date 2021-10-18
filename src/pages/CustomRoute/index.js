import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const CustomRoute = ({ children, isLoggedIn, ...rest }) => {
  return (
    <Route
      render={({ location }) => {
        return isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        );
      }}
      {...rest}
    />
  );
};

CustomRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default CustomRoute;
