import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";
import CustomRoute from "../pages/CustomRoute";
import NewsSourcesPage from "../pages/NewsSourcesPage";
import Login from "../pages/LoginPage";

const Layout = () => {
  const [loginDetails, setLoginDetails] = useState({
    isLoggedIn: false,
    name: "",
  });

  const setLogin = (named) => {
    setLoginDetails({ ...loginDetails, isLoggedIn: true, name: named });
  };
  const setLogout = () => {
    setLoginDetails({ ...loginDetails, isLoggedIn: false });
  };
  return (
    <Router>
      <Header setLogout={setLogout} isLoggedIn={loginDetails.isLoggedIn} />
      <Switch>
        <CustomRoute exact path="/news" isLoggedIn={loginDetails.isLoggedIn}>
          <NewsSourcesPage />
        </CustomRoute>
        <Route exact path="/login">
          <Login setLogin={setLogin} isLoggedIn={loginDetails.isLoggedIn} />
        </Route>
        <CustomRoute exact path="/" isLoggedIn={loginDetails.isLoggedIn}>
          <NewsSourcesPage />
        </CustomRoute>
      </Switch>
    </Router>
  );
};

export default Layout;
