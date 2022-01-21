import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsFillReplyAllFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import myApi from "../../api/Api";
import "./userAccount.styles.scss";

export default function UserAccount() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const uid = localStorage.getItem("uid");
        const { data } = await myApi.get(`/${uid}`);
        if (!data) {
          console.log("wow");
        }
        setUser(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUser();
  }, []);

  return (
    <div className="User-account">
      <div className="card">
        <div className="content">
          <div className="titles">
            <div className="header">{`${user.firstName} ${user.lastName}`}</div>
            <div className="meta">{`Id: ${user._id}`}</div>
          </div>
          <div className="status">
            <div>{`Current Cash: ${user.cash}$`}</div>
            <div>{`Current Credit: ${user.credit}$`}</div>
          </div>
          <div className="actions">
            <div className="ui left action input">
              <button className="ui teal labeled icon button actions-button">
                <i className="dollar sign icon"></i>
                Deposit
              </button>
              <input type="text" />
            </div>
            <div className="ui left action input">
              <button className="ui orange labeled icon button actions-button">
                <i className="dollar sign icon"></i>
                Withdraw
              </button>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="ui two buttons">
          <Link to="/" className="ui basic blue button">
            <BsFillReplyAllFill style={{ fontSize: "40px" }} />
          </Link>
          <div className="ui basic red button">
            <AiFillDelete style={{ fontSize: "40px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
