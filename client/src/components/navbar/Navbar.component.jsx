import React from "react";

export default function Navbar() {
  return (
    <div class="Navbar">
      <div class="ui small menu">
        <span class="active item">All Users</span>
        <span class="item">Add User</span>
        <div class="right menu">
          <div class="ui dropdown item">
            Language <i class="dropdown icon"></i>
            <div class="menu">
              <span class="item">English</span>
              <span class="item">Russian</span>
              <span class="item">Spanish</span>
            </div>
          </div>
          <div class="item">
            <div class="ui primary button">Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  );
}
