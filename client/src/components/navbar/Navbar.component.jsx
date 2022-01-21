import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="ui small menu">
        <Link to="/">
          <span className="active item">All Users</span>
        </Link>
        <Link to="/add-user">
          <span className="item">Add User</span> 
        </Link>
        <div className="right menu">
          <div className="ui dropdown item">
            Language <i className="dropdown icon"></i>
            <div className="menu">
              <span className="item">English</span>
              <span className="item">Russian</span>
              <span className="item">Spanish</span>
            </div>
          </div>
          <div className="item">
            <div className="ui primary button">Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  );
}
