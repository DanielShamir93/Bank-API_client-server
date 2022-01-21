import React from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { MdAccountBox } from "react-icons/md";
import "./User.styles.scss";
import myApi from "../../api/Api";

export default function User({ user, isUserChanged, setIsUserChanged }) {
  const deleteUser = async () => {
    try {
      await myApi.delete(`/${user._id}/delete`);
      setIsUserChanged(!isUserChanged);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="User">
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">{`${user.firstName} ${user.lastName}`}</div>
            <div className="meta">{`Id: ${user._id}`}</div>
          </div>
          <div className="ui two buttons">
            <Link to="/user-account"
              className="ui basic green button"
              onClick={() => {localStorage.setItem('uid', user._id)}}
            >
              <MdAccountBox style={{ fontSize: "25px" }} />
            </Link>
            <div className="ui basic red button" onClick={deleteUser}>
              <AiFillDelete style={{ fontSize: "25px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
