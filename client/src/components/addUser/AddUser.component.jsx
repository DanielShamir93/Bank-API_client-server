import React from "react";
import "./addUser.styles.scss";

export default function AddUser() {
  return (
    <form className="ui form">
      <div className="field">
        <label>First Name</label>
        <input type="text" name="first-name" />
      </div>
      <div className="field">
        <label>Last Name</label>
        <input type="text" name="last-name" />
      </div>
      <div className="field">
        <label>Cash</label>
        <input type="text" name="cash" />
      </div>
      <div className="field">
        <label>Credit</label>
        <input type="text" name="credit" />
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
}
