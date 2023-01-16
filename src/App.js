import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Token from "./pages/redirect_Pages/VerifyUser";
import Register from "./pages/Register/Register";
import ResetPass from "./pages/ResetPassword/ResetPass";
import RequireAuth from "./utils/RequireAuth";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import SuperAdminDashboard from "./Components/Admin/SuperAdminDashboard";
import TransferTabs from "./pages/Transfer/TF";
import Dashboard from "./Components/Dashboard/Dashboard";
import Fund from "./pages/Fund/Fund";

import useActions from "./utils/Hooks/hookActions";
import SetupKYC from "./utils/UserAuthorization/SetupKYC";
import VerifyBVN from "./utils/UserAuthorization/VerifyBVN";
import UserRequireAuth from "./utils/UserRequireAuth";
import TOPUP from "./pages/VTU/TOPUP";
import Bills from "./pages/BillsPayment/Bills";
import Services from "./pages/SelfServices/services";

function App() {
  const { user } = useActions();
  console.log(user);
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resetpassword" element={<ResetPass />} />
      <Route path="/userauth/*" element={<Token />} />
      {/* <Route path="/test/*" element={<TF />} />
      <Route path="/test2/*" element={<Home />} /> */}
      {/* Authorization Routes */}
      <Route path="/accountsetup" element={<SetupKYC />} />
      <Route path="/verifybvn" element={<VerifyBVN />} />
      {/* <Route path="/" element={<Home />}>
        <Route path={"/"} element={<Dashboard />} />
        <Route path="/transfer" element={<TransferTabs />} />
        <Route path="/fund" element={<Fund />} />
        <Route path="airtime" element={<TOPUP />} />
        <Route path="/bill" element={<Bills />} />
        <Route path="/self-services" element={<Services />} />
      </Route> */}
      {/* Protected routes */}
      <Route path="" element={<RequireAuth />}>
        {!user.isVerified && (
          <Route path="" element={<UserRequireAuth />}>
            <Route path="/" element={<Home />}>
              <Route index element={<Dashboard />} />
              <Route path="/transfer" element={<TransferTabs />} />
              <Route path="/fund" element={<Fund />} />
              <Route path="airtime" element={<TOPUP />} />
              <Route path="/bill" element={<Bills />} />
              <Route path="/self-services" element={<Services />} />
            </Route>
          </Route>
        )}
        {user.isAdmin && <Route path="/*" element={<AdminDashboard />} />}
        {user.isSuperAdmin && (
          <Route path="/*" element={<SuperAdminDashboard />} />
        )}
      </Route>
    </Routes>
  );
}

export default App;
