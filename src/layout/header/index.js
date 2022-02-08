import React from "react";
import PropTypes from "prop-types";
import { useGoogleLogout } from "react-google-login";
import "./header.css";

const Header = ({ isLoggedIn, setLogout }) => {
  const clientId = "523367593881-gpbdg0kgfpfcg2e7ikjas0vf45dm2fmg.apps.googleusercontent.com";
  const cookiePolicy = "single_host_origin";
  const onFailure = () => {
    console.log("Failed to logout");
  };
  const onLogoutSuccess = () => {
    console.log("LoggedOutSuccessfully");
    setLogout();
  };

  const { signOut } = useGoogleLogout({
    clientId,
    cookiePolicy,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <div className="header">
      <div className="header-left">
        <span style={{ fontSize: "30px" }}>N</span>ews{" "}
        <span style={{ fontSize: "30px" }}>W</span>orld
      </div>
      <div className="header-right">
        <div className="navbar home">Home</div>
        <div className="navbar">item2</div>
        <div className="navbar">item3</div>
        <div className="navbar login_logout">
          <button type="button" onClick={signOut}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setLogout: PropTypes.func.isRequired,
};
export default Header;
