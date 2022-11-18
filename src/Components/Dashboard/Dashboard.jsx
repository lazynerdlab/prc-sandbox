import "./Dashboard.scss";
import Img from "../../assets/cardblackH.jpg";
import Modals from "../Modals/Modals";
import { useState, useEffect } from "react";
import { increaseBalance, decreaseBalance } from "../../features/balance";
import { useSelector, useDispatch } from "react-redux";
import { fetchBalance } from "../../features/balance";
const Dashboard = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);
  const user = useSelector((state) => state.user.value);
  const [withdraw, setWithdraw] = useState(false);
  const [loan, setLoan] = useState(false);
  useEffect(() => {
    console.log("rendered", balance);
    if (user.balance) {
      dispatch(fetchBalance(user.balance));
    }
  }, []);
  return (
    <div className="wallet">
      <div>
        <img src={Img} className="wallet-Card" />
        <h2>{user?.userName}</h2>
        <p>Balance:</p>
        <h5 className="balance">${balance?.balance}.00</h5>
        <div className="button-flex">
          <div className="wallet-flex">
            <div>
              <button
                onClick={() => {
                  setWithdraw(!withdraw);
                  setLoan(false);
                }}
              >
                Transfer
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setLoan(!loan);
                  setWithdraw(false);
                }}
              >
                Request Loan
              </button>
            </div>
          </div>
          <Modals
            event={increaseBalance}
            action={"send request"}
            type={"increase"}
            display={loan}
          />
          <Modals
            event={decreaseBalance}
            action={"Transfer"}
            type={"decrease"}
            display={withdraw}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
