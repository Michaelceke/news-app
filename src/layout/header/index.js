import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">left</div>
      <div className="header-right">
        <div className="navbar">Home</div>
        <div className="navbar">item2</div>
        <div className="navbar">item3</div>
        <div className="navbar">Login</div>
      </div>
    </div>
  );
};

export default Header;
