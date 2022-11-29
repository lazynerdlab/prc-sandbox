import "./Dashboard.scss";
import Img from "../../assets/cardblackH.jpg";
import { useEffect } from "react";
import useActions from "../../utils/hookActions";
import { getTransactions } from "../../features/actions.transactions";
import { updateBalance } from "../../features/actions.balance";
const Dashboard = () => {
  const { dispatch, state } = useActions();
  const balance = state.balance.value;
  const user = state.user.value;
  const transactions = state.transactions.value.transactions;
  useEffect(() => {
    if (user.email) {
      dispatch(updateBalance({ email: user.email }));
      dispatch(getTransactions({ email: user.email }));
      console.log(transactions, transactions?.length);
    }
  }, []);
  return (
    <div className="ml-[18%] mt-[4%] relative">
      <div className="pt-[2%]">
        <img src={Img} className="h-[15rem] w-[25rem]" />
        <h2>{user?.userName}</h2>
        <p>Balance:</p>
        <h5 className="balance">NGN {balance?.balance}.00</h5>
      </div>
      <div className="flex flex-col w-[80%]">
        <div className="text-[1.5rem] text-primary-light">Transactions</div>
        {transactions?.length < 1 && <div>No Transaction History</div>}
        <table class="table-fixed">
          {/* <thead>
            <tr>
              <th>Amount</th>
              <th>Description</th>
            </tr>
          </thead> */}
          <tbody>
            {transactions.map((transactions) => {
              const date = new Date(transactions?.createdAt);
              return (
                <tr>
                  <td>
                    <div
                      className={
                        transactions?.Recieve
                          ? " bg-green-500 rounded-full p-[1rem]"
                          : "bg-red-500 rounded-full p-[1rem]"
                      }
                    >
                      {transactions?.Receive ? "CR" : "DR"}
                    </div>
                  </td>
                  <td>
                    <div>{date}</div>
                  </td>
                  <td>
                    <p
                      className={
                        transactions?.Recieve
                          ? " text-green-500"
                          : "text-red-500"
                      }
                    >
                      {transactions?.Recieve || transactions?.Sent}
                    </p>
                  </td>
                  <td>
                    {transactions?.senderUserEmail ||
                      transactions?.recieverEmail}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
