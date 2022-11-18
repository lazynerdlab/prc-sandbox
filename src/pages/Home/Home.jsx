import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "../Login/Login";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navigation from "../../Components/Navigation/Navigation";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const balance = useSelector((state) => state.balance.value);
  useEffect(() => {
    console.log(user, balance);
  }, [user, balance]);

  return (
    <main>
      {user?.username && (
        <div>
          <Navigation />
          <Sidebar />
          <Dashboard />
          {/* {!user?.isVerified && (
            <div> please verify your email to access all features</div>
          )} */}
        </div>
      )}
      {!user?.username && <Login />}
      {/* <>
        <Navigation />
        <Sidebar />
        <Dashboard />
      </> */}
    </main>
  );
};

export default Home;
