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
import Dashboard from "./Components/Dashboard/Dashboard";

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
      <Route path="/test" element={<Home />} />

      {/* Protected Routes */}
      <Route path="*" element={<RequireAuth />}>
        {user.isVerified && <Route path="/*" element={<Home />} />}
        {user.isAdmin && <Route path="/*" element={<AdminDashboard />} />}
        {user.isSuperAdmin && (
          <Route path="/*" element={<SuperAdminDashboard />} />
        )}
      </Route>

    </Routes>
  );
}

export default App;
