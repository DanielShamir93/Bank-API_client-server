import React from "react";
import "./addUser.styles.scss";
import { useState } from "react";
import validator from 'validator';
import myApi from '../../api/Api';

export default function AddUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cash, setCash] = useState("");
  const [credit, setCredit] = useState("");

  const setNewUser = async () => {
    if (isValidInput()) {
      try {
        await myApi.post('/add', {
          firstName,
          lastName,
          cash,
          credit
        });
        setFirstName("");
        setLastName("");
        setCash("");
        setCredit("");
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  const isValidInput = () => {
    return (
      validator.isAlpha(firstName) &&
      validator.isAlpha(lastName) &&
      validator.isNumeric(cash) &&
      validator.isNumeric(credit)
    ) 
  }

  return (
    <form className="ui form">
      <div className="field">
        <label>First Name</label>
        <input 
          type="text"
          name="first-name"
          onChange={(e) => {setFirstName(e.target.value)}}
          value={firstName}
        />
      </div>
      <div className="field">
        <label>Last Name</label>
        <input 
          type="text"
          name="last-name"
          onChange={(e) => {setLastName(e.target.value)}}
          value={lastName}
        />
      </div>
      <div className="field">
        <label>Cash</label>
        <input 
          type="text"
          name="cash"
          onChange={(e) => {
            if (!isNaN(e.target.value)) {
              setCash(e.target.value)
            }
          }}
          value={cash}
        />
      </div>
      <div className="field">
        <label>Credit</label>
        <input 
          type="text"
          name="credit"
          onChange={(e) => {
            if (!isNaN(e.target.value)) {
              setCredit(e.target.value)
            }
          }}
          value={credit}
        />
      </div>
      <button 
        className="ui button" 
        type="button"
        onClick={setNewUser}
      >
        Submit
      </button>
    </form>
  );
}
