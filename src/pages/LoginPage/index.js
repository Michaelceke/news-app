import React from "react";
import "./login.css";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const LoginPage = ({ setLogin }) => {
  const history = useHistory();
  const responseGoogle = (response) => {
    window.sessionStorage.setItem("access_token", response.accessToken);
    window.sessionStorage.setItem("name", response.profileObj.name);
    setLogin(response.profileObj.name);
    history.push("/news");
    console.log(response);
    console.log(response.profileObj);
  };
  return (
    <div className="login">
      <h3>Login</h3>
      <form>
        <label htmlFor="username">
          Username:
          <input type="text" name="name" id="username" placeholder="username" />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="text"
            name="password"
            id="password"
            placeholder="password"
          />
        </label>
        <input type="submit" value="Sign in" />
      </form>
      <GoogleLogin
        clientId="523367593881-gpbdg0kgfpfcg2e7ikjas0vf45dm2fmg.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            type="submit"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            style={{
              width: "93%",
              height: "30px",
              backgroundColor: "lightblue",
            }}
          >
            Google Sign in
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={() => {
          console.log("failed to login");
        }}
        isSignedIn
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

LoginPage.propTypes = {
  setLogin: PropTypes.func.isRequired,
};

export default LoginPage;
