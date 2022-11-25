import "./Home.scss";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "../Login/Login";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navigation from "../../Components/Navigation/Navigation";
import Transfer from "../Transfer/Transfer";
import Fund from "../Fund/Fund";
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
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/fund" element={<Fund />} />
          </Routes>
        </div>
      )}
      {!user?.username && <Login />}
    </main>
  );
};

export default Home;
