import Loader from "../../utils/Loader";
import Img from "../../assets/cardblackH.jpg";
import { useGetBalanceQuery } from "../../features/api/balanceApiSlice";
import Transactions from "./Transactions";
const Dashboard = () => {
  const { data: balance, isLoading } = useGetBalanceQuery();
  return (
    <div className="ml-[18%] mt-[4%] relative">
      <div className="pt-[2%]">
        <img src={Img} className="h-[15rem] w-[25rem]" />
        <p>Balance:</p>
        {isLoading ? (
          <div>...</div>
        ) : (
          <h5 className="text-blue-200 text-[2rem]">NGN {balance}.00</h5>
        )}
      </div>
      <div className="flex flex-col w-[80%]">
        <Transactions />
      </div>
    </div>
  );
};

export default Dashboard;
