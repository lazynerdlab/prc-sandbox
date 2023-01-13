import Chart from "./PieChart";
import { Layout } from "antd";
import { useGetBalanceQuery } from "../../features/api/balanceApiSlice";
import Transactions from "./Transactions";
import Navigation from "../Navigation/Navigation";
import Loader from "../../utils/Loader";
const Dashboard = () => {
  const { data, isLoading, isSuccess } = useGetBalanceQuery();
  console.log(data);
  let update;
  if (isLoading) {
    update = <p>...</p>;
  } else if (isSuccess) {
    update = <p>{data}</p>;
  }
  const { Header } = Layout;
  return (
    <>
      <div className="relative grid grid-cols-1 gap-[0.5rem] mx-auto">
        <Header style={{ height: "100%", padding: "0rem", lineHeight: "20px" }}>
          <Navigation />
        </Header>
        <div className="pt-[2%] px-[1rem] flex items-center justify-between text-black">
          <div className="bg-white w-[15rem] h-[5rem] rounded-[5px] flex flex-col items-center justify-center text-[1rem] py-[1rem] px-[0.5rem] relative">
            <div className="absolute top-[-50%] left-0">Overview</div>
            <div>Acc Number: 0453496006</div>
            <div>
              Balance: NGN {isSuccess && data} {isLoading && "..."}
            </div>
          </div>
          <div className="bg-white w-[12rem] h-[5rem] rounded-[5px] flex items-center justify-center text-[0.5rem] py-[1rem] px-[0.2rem]">
            <span className="p-[0.5rem] mr-[0.2rem] rounded-full bg-green-400"></span>
            <p>Inflow NGN 30000</p>
          </div>
          <div className="bg-white w-[12rem] h-[5rem] rounded-[5px] flex items-center justify-center text-[0.5rem] py-[1rem] px-[0.2rem]">
            <span className="p-[0.5rem] mr-[0.2rem] rounded-full bg-red-400"></span>
            <p>Outflow NGN 27000</p>
          </div>
          {/* <div className="flex flex-col">
            <div className="flex items-center">
              <span className="p-[0.5rem] mr-[0.2rem] rounded-full bg-green-400"></span>
              <p>Inflow NGN 30000</p>
            </div>
            <div className="flex items-center">
              <span className="p-[0.5rem] mr-[0.2rem] rounded-full bg-red-400"></span>
              <p>Outflow NGN 27000</p>
            </div>
          </div> */}
          <div className="h-[12rem] w-[12rem]">
            <Chart />
          </div>
          {/* {isLoading ? (
          <div>...</div>
        ) : (
          <h5 className="text-blue-200 text-[2rem]">NGN {balance}.00</h5>
        )} */}
        </div>
        <div className="flex px-[1rem] flex-col">
          <div>Recent Activty</div>
          <Transactions />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
