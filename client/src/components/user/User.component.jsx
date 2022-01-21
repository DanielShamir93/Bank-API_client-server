import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "./User.styles.scss";

export default function User({ user }) {
  return (
    <div className="User">
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">Elliot Fu</div>
            <div className="meta">{`User ID: ${user._id}`}</div>
            <div className="description">
              <div>{`cash: ${user.cash}$`}</div>
              <div>{`credit: ${user.credit}$`}</div>
            </div>
          </div>
          <div className="ui two buttons">
            <div className="ui basic green button">Perform Actions</div>
            <div className="ui basic red button"><AiFillDelete style={{fontSize: "20px"}} /></div>
          </div>  
          
        </div>
      </div>
    </div>
  );
}
