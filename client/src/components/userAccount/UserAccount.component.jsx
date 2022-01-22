import { useEffect, useState } from "react";
import { BsFillReplyAllFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import myApi from "../../api/Api";
import "./userAccount.styles.scss";
import "./userAccount.styles.mobile.scss";

export default function UserAccount() {
  const [user, setUser] = useState({});
  const [deposit, setDeposit] = useState(0);
  const [updateCredit, setUpdateCredit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [transferToId, setTransferToId] = useState("");
  const [isAccountChanged, setIsAccountChanged] = useState(false);
  const [serverMsg, setServerMsg] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const uid = localStorage.getItem("uid");
        const { data } = await myApi.get(`/${uid}`);
        setUser(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUser();
  }, [isAccountChanged]);

  const makeDeposit = async () => {
    try {
      const { data } = await myApi.put(`/${user._id}/deposit`, {
        amount: deposit
      });
      setServerMsg(data);
      setIsAccountChanged(!isAccountChanged);
    } catch (err) {
      console.log(err.message);
    }
  }

  const updateUserCredit = async () => {
    try {
      const {data} = await myApi.put(`/${user._id}/credit`, {
        amount: updateCredit
      });
      setServerMsg(data);
      setIsAccountChanged(!isAccountChanged);
    } catch (err) {
      console.log(err.message);
    }
  }

  const toWithdraw = async () => {
    try {
      const { data } = await myApi.put(`/${user._id}/withdraw`, {
        amount: withdraw
      });
      setServerMsg(data);
      setIsAccountChanged(!isAccountChanged);
    } catch (err) {
      console.log(err.message);
    }
  }

  const transferMoney = async () => {
    try {
      const { data } = await myApi.put(`/${user._id}/transfer`, {
        amount: transferAmount
      }, {
        params: {
          destId: transferToId
        }
      });
      setServerMsg(data);
      setIsAccountChanged(!isAccountChanged);
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
            <div className="status-user">
              <div>{`Cash: ${user.cash}$`}</div>
              <div>{`Credit: ${user.credit}$`}</div>
            </div>
            <fieldset className="server-message">
              <legend>Server Message</legend>
              <p>{serverMsg}</p>
            </fieldset>
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
              <button 
                className="ui orange labeled icon button actions-button"
                onClick={toWithdraw}
              >
                <i className="dollar sign icon"></i>
                Withdraw
              </button>
              <input 
                type="text" 
                onChange={(e) => {
                  if (!isNaN(e.target.value)) {
                    setWithdraw(e.target.value)
                  }
                }}
                value={withdraw}
              />
            </div>
            <div className="ui left action input">
              <button 
                className="ui yellow labeled icon button actions-button"
                onClick={updateUserCredit}
              >
                <i className="dollar sign icon"></i>
                Update Credit
              </button>
              <input 
                type="text" 
                onChange={(e) => {
                  if (!isNaN(e.target.value)) {
                    setUpdateCredit(e.target.value)
                  }
                }}
                value={updateCredit}
              />
            </div>
            <div className="ui left action input">
              <button 
                className="ui pink labeled icon button actions-button"
                onClick={transferMoney}
              >
                <i className="dollar sign icon"></i>
                Transfer
              </button>
              <input 
                type="text" 
                onChange={(e) => {
                  if (!isNaN(e.target.value)) {
                    setTransferAmount(e.target.value)
                  }
                }}
                value={transferAmount}
              />
              <input 
                type="text"
                placeholder="Destination Id"
                onChange={(e) => setTransferToId(e.target.value)}
                value={transferToId}
              />
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
