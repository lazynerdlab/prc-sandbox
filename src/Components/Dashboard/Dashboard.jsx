import Chart from "./PieChart";
import { Layout } from "antd";
import { useGetBalanceQuery } from "../../features/api/balanceApiSlice";
import Transactions from "./Transactions";
import Navigation from "../Navigation/Navigation";
const Dashboard = () => {
  const { data: balance, isLoading } = useGetBalanceQuery();
  const { Header } = Layout;
  return (
    <>
      <div className="relative grid grid-cols-1 gap-[2rem] p-[1rem] w-[90%] mx-auto">
        <div className="pt-[2%] flex items-center justify-between">
          {/* <img src={Img} className="h-[15rem] w-[25rem]" /> */}
          <div className="bg-blue-700 w-[20rem] h-[15rem] rounded-[5px] flex flex-col items-start justify-end text-white px-[1rem] pt-[1.5rem] pb-[4rem]">
            <div>Account Number: 0453496006</div>
            <div>Wallet Balance: NGN 3000</div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="p-[0.5rem] mr-[0.2rem] rounded-full bg-green-400"></span>
              <p>Inflow NGN 30000</p>
            </div>
            <div className="flex items-center">
              <span className="p-[0.5rem] mr-[0.2rem] rounded-full bg-red-400"></span>
              <p>Outflow NGN 27000</p>
            </div>
          </div>
          <div className="h-[15rem] w-[15rem]">
            <Chart />
          </div>
          {/* {isLoading ? (
          <div>...</div>
        ) : (
          <h5 className="text-blue-200 text-[2rem]">NGN {balance}.00</h5>
        )} */}
        </div>
        <div className="flex flex-col">
          <Transactions />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
