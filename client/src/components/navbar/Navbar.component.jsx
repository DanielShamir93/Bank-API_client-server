import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.styles.scss";

export default function Navbar() {

  const [buttonActive, setButtonActive] = useState("all-users");

  return (
    <div className="Navbar">
      <div className="ui small menu">
        <Link to="/" onClick={() => {setButtonActive("all-users")}}>
          <span className={`${buttonActive === "all-users" && "active"} item`}>All Users</span>
        </Link>
        <Link to="/add-user" onClick={() => {setButtonActive("add-user")}}>
          <span className={`${buttonActive === "add-user" && "active"} item`}>Add User</span>
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
