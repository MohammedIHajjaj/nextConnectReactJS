import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <i className="fas fa-share-alt"></i>
        <h1>NextConnect</h1>
      </div>
      <div>
        <Link to="profile" className="profile">
          Profile
        </Link>
        <button className="sign-out-btn">
          <Link to="login" className="sign-out">
            Sign Out
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
