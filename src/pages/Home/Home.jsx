import { useNavigate, Routes, Route, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navigation from "../../Components/Navigation/Navigation";
import Transfer from "../Transfer/Transfer";
import Fund from "../Fund/Fund";
import TransferTabs from "../Transfer/TF";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Header, Footer, Sider, Content } = Layout;
  const user = useSelector((state) => state.user.value);
  // const balance = useSelector((state) => state.balance.value);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="h-screen overflow-hidden w-[80%] m-auto">
      <Header>
        <Navigation />
      </Header>
      <Layout>
        <Sider
          style={{
            flex: "0 0 150px",
            minWidth: "150px",
            maxWidth: "150px",
            width: "150px",
          }}
        >
          <Sidebar />
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </div>
  );
};

export default Home;
