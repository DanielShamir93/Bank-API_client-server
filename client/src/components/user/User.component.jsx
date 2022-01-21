import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "./User.styles.scss";
import myApi from '../../api/Api';

export default function User({ user, isUserChanged, setIsUserChanged }) {

  const deleteUser = async () => {
    try {
      console.log(`/${user._id}/delete`)
      await myApi.delete(`/${user._id}/delete`);
      setIsUserChanged(!isUserChanged);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="User">
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">{`${user.firstName} ${user.lastName}`}</div>
            <div className="meta">{`Id: ${user._id}`}</div>
            <div className="description">
              <div>{`cash: ${user.cash}$`}</div>
              <div>{`credit: ${user.credit}$`}</div>
            </div>
          </div>
          <div className="ui two buttons">
            <div className="ui basic green button">Perform Actions</div>
            <div className="ui basic red button"
              onClick={deleteUser}
            >
              <AiFillDelete style={{fontSize: "20px"}} 
            /></div>
          </div>  
        </div>
      </div>
    </div>
  );
}
