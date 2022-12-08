import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Token from "./pages/redirect_Pages/VerifyUser";
import Register from "./pages/Register/Register";
import ResetPass from "./pages/ResetPassword/ResetPass";
import RequireAuth from "./utils/RequireAuth";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import SuperAdminDashboard from "./Components/Admin/SuperAdminDashboard";

import useActions from "./utils/Hooks/hookActions";
import SetupKYC from "./utils/UserAuthorization/SetupKYC";
import VerifyBVN from "./utils/UserAuthorization/VerifyBVN";
import UserRequireAuth from "./utils/UserRequireAuth";
import OtherTransfer from "./pages/Transfer/OtherTransfer";

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
      <Route path="test" element={<OtherTransfer />} />
      {/* Authorization Routes */}
      <Route path="accountsetup" element={<SetupKYC />} />
      <Route path="verifybvn" element={<VerifyBVN />} />

      {/* Protected routes */}
      <Route path="*" element={<RequireAuth />}>
        {!user.isVerified && (
          <Route path="/*" element={<UserRequireAuth />}>
            <Route index element={<Home />} />
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
