import { useEffect, useState } from "react";
import { BsFillReplyAllFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import myApi from "../../api/Api";
import "./userAccount.styles.scss";

export default function UserAccount() {
  const [user, setUser] = useState({});
  const [deposit, setDeposit] = useState(0);

  useEffect(() => {
    const getUser = async () => {
      try {
        const uid = localStorage.getItem("uid");
        const { data } = await myApi.get(`/${uid}`);
        if (!data) {
          console.log("wow"); //TODO:
        }
        setUser(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUser();
  });

  const makeDeposit = async () => {
    try {
      await myApi.put(`/${user._id}/deposit`, {
        amount: deposit
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="User-account">
      <div className="card">
        <div className="content">
          <div className="titles">
            <div className="header">{`${user.firstName} ${user.lastName}`}</div>
            <div className="meta">{`Id: ${user._id}`}</div>
          </div>
          <fieldset className="status">
            <legend>Status</legend>
            <div>{`Cash: ${user.cash}$`}</div>
            <div>{`Credit: ${user.credit}$`}</div>
          </fieldset>
          <div className="actions">
            <div className="ui left action input">
              <button 
                className="ui teal labeled icon button actions-button"
                onClick={makeDeposit}
              >
                <i className="dollar sign icon"></i>
                Deposit
              </button>
              <input 
                type="text"
                onChange={(e) => {
                  if (!isNaN(e.target.value)) {
                    setDeposit(e.target.value)
                  }
                }}
                value={deposit}
              />
            </div>
            <div className="ui left action input">
              <button className="ui orange labeled icon button actions-button">
                <i className="dollar sign icon"></i>
                Withdraw
              </button>
              <input type="text" />
            </div>
            <div className="ui left action input">
              <button className="ui yellow labeled icon button actions-button">
                <i className="dollar sign icon"></i>
                Update Credit
              </button>
              <input type="text" />
            </div>
          </div>
        </div>
        <Link to="/" className="ui basic blue button">
          <BsFillReplyAllFill style={{ fontSize: "40px", width: "150px" }} />
        </Link>
      </div>
    </div>
  );
}
