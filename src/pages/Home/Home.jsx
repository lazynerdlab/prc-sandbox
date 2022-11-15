import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { logout } from "../../features/user";
import Login from "../Login/Login";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navigation from "../../Components/Navigation/Navigation";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <main>
      {user.name && (
        <>
          <Navigation />
          <Sidebar />
        </>
      )}
      {!user.name && <Login />}
      {/* <>
        <Navigation />
        <Sidebar />
      </> */}
    </main>
  );
};

export default Home;
